import { builder } from "../../graphql/builder";
import prisma from "../../lib/prisma";
import "./mutation";

builder.prismaNode("Location", {
    select: {
        id: true,
    },
    findUnique: (location:any) => ({ id: location.id }),
    id: { resolve: (location) => String(location.id) },
    nullable: true,
    fields: t => ({
        state: t.exposeString("state", { nullable: true }),
        city: t.exposeString("city"),
        country: t.exposeString("country"),
        addresses: t.relatedConnection("addresses", {
            cursor: 'id'
        }),
        profiles: t.relatedConnection('profiles', {
            cursor: 'id',
            args: {
                oldestFirst: t.arg.boolean(),
            },
            query: (args, ctx) => ({
                orderBy: {
                    createdAt: args.oldestFirst ? 'asc' : 'desc',
                },
            }),
        }),
        trips: t.relatedConnection('trips', {
            cursor: 'id',
            args: {
                oldestFirst: t.arg.boolean(),
            },
            query: (args, context) => ({
                orderBy: {
                    createdAt: args.oldestFirst ? 'asc' : 'desc',
                },
            }),
        }),
    }),
})

builder.queryField("locations", t =>
    t.prismaField({
        type: ["Location"],
        resolve: async (_query: any, _parent: any, _args: any, _info: any) => prisma.location.findMany({}),
    } as any)
)


builder.queryField("location", t =>
  t.prismaField({
    type: "Location",
    args: {
      id: t.arg.string({ required: true })
    },
    resolve: async (query, root, args) =>
      prisma.location.findUniqueOrThrow({
        ...query,
        where: { id: String(args.id) }
      })
  })
)