import { builder } from "../../graphql/builder";
import prisma from "../../lib/prisma";
import { Profile } from "../../types/graphql"

builder.prismaObject("Profile", {
  select: {
    id: true,
  },
  findUnique: (profile : any) => ({ id: profile.id }),
  fields: t => ({
    id: t.exposeString("id"),
    description: t.exposeString("description", { nullable: true }),
    location: t.relation("location"),
    email: t.exposeString("email", { nullable: true }),
    user: t.relation("user"),

    createdAt: t.expose("createdAt", {
      type: "Date"
    }),
    updatedAt: t.expose("updatedAt", {
      type: "Date"
    })
  }),
})


builder.queryField("profiles", t =>
    t.prismaField({
        type: ["Profile"],
        resolve: async (_query: any, _parent: any, _args: any, _info: any) => prisma.profile.findMany({..._query}),
    } as any)
)

builder.queryField("profile", t =>
  t.prismaField({
    type: "Profile",
    args: {
      id: t.arg.string({ required: true })
    },
    resolve: async (query, root, args) =>
      prisma.profile.findUniqueOrThrow({
        ...query,
        where: { id: String(args.id) }
      })
  })
)