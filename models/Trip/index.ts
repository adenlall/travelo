import { builder } from "../../graphql/builder"
import prisma from "../../lib/prisma"
import "./mutation"

builder.prismaObject("Trip", {
  select: {
    id: true
  },
  findUnique: (trip: any) => ({ id: trip.id }),
  fields: t => ({
    id: t.exposeString("id"),
    title: t.exposeString("title"),
    description: t.exposeString("description", { nullable: true }),
    location: t.relation("location"),
    users: t.relatedConnection("users", {
      cursor: "userId_tripId"
    }),
  })
})

builder.queryField("trips", t =>
  t.prismaField({
    type: ["Trip"],
    args: {
      me: t.arg.boolean()
    },
    resolve: async (query, parent, args, ctx) => {

      if (!args.me) {
        return prisma.trip.findMany({});
      }

      if (!(await ctx).email) {
        throw new Error("You have to be logged in to perform this action")
      }
      return prisma.trip.findMany({
        include: {
          users: {
            include: {
              user: true
            }
          }
        },
        where: {
          users: {
            every: {
              user: {
                email: (await ctx).email as string
              }
            }
          }
        }
      });

    }
  })
)


builder.queryField("trip", t =>
  t.prismaField({
    type: "Trip",
    args: {
      id: t.arg.string({ required: true })
    },
    resolve: async (query, root, args) =>
      prisma.trip.findUniqueOrThrow({
        ...query,
        where: { id: String(args.id) }
      })
  })
)