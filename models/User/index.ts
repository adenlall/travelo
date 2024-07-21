import { builder } from "../../graphql/builder"
import prisma from "../../lib/prisma"
import "./mutations";
import "./subscription";
// import { User as GqlUser } from "../../types/graphql"
// import { PrismaFieldResolver } from "@pothos/plugin-prisma"
// import { MaybePromise } from "@pothos/core"
// import { User } from "@prisma/client/edge"

builder.prismaObject("User", {
  // include: {
  //   profile: true,
  //   trips: true
  // },
  select: {
    id: true
  },
  findUnique: (trip: any) => ({ id: trip.id }),
  fields: t => ({
    id: t.exposeString("id"),
    email: t.exposeString("email", { nullable: false }),
    name: t.exposeString("name", { nullable: true }),
    tagline: t.exposeString("tagline", { nullable: true }),
    // description: t.string({
    //   resolve: (user) => user?.profile?.description,
    //   nullable: true
    // }),

    // tripOnCity: t.string({
    //   args: {
    //     city: t.arg({ type: "String", required: true })
    //   },
    //   select: (args) => ({
    //     trips: {
    //       where: {
    //         trip: {
    //           location: {
    //             city: args.city
    //           }
    //         }
    //       }
    //     }
    //   }),
    //   nullable: true,
    //   resolve: (user) => user.trips[0]?.tripId
    // }),

    trips: t.relatedConnection("trips", {
      cursor: "userId_tripId"
    }),
    profile: t.relation("profile", { nullable: true }),

    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    updatedAt: t.expose("updatedAt", {
      type: "Date"
    })
  })
})

builder.queryField("users", t =>
  t.prismaField({
    type: ["User"],
    resolve: async (query, root, args, ctx, info) => prisma.user.findMany({ ...query })
  })
)

builder.queryField("user", t =>
  t.prismaField({
    type: "User",
    args: {
      id: t.arg.string({ required: true })
    },
    resolve: async (query, root, args) =>
      prisma.user.findUniqueOrThrow({
        ...query,
        where: { id: String(args.id) }
      })
  })
)

builder.queryField("me", t =>
  t.prismaField({
    type: "User",
    resolve: async (query, root, args, ctx) => {

      if (!(await ctx).email) {
        throw new Error("You have to be logged in to perform this action")
      }
      const me = prisma.user.findUniqueOrThrow({
        ...query,
        where: { email: (await ctx).email ?? "" }
      })

      if (!me) throw Error('User does not exist');

      return me
    }
  })
)
