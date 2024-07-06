import { builder } from "../../graphql/builder";
import prisma from "../../lib/prisma";
import './mutations'

builder.prismaObject("User", {
  include: {
    profile: true,
    trips:true
  },
  fields: t => ({
    id: t.exposeString("id"),
    email: t.exposeString("email"),
    name: t.exposeString("name", { nullable: true }),
    tagline: t.exposeString("tagline", { nullable: true }),
    description: t.string({
      resolve: (user) => user?.profile?.description,
      nullable: true,
    }),

    tripOnCity: t.string({
      args: {
        city: t.arg({ type: 'String', required: true }),
      },
      select: (args) => ({
        trips:{
          where:{
            trip:{
              location:{
                city: args.city
              }
            }
          }
        }
      }),
      nullable:true,
      resolve: (user) => user.trips[0]?.tripId,
    }),

    trips: t.relatedConnection('trips', {
      cursor: 'userId_tripId',
    }),
    profile: t.relation("profile", { nullable: true }),
  }),
})

builder.queryField("Users", t =>
  t.prismaField({
    type: ["User"],
    resolve: async (_query: any, _parent: any, _args: any, _info: any) => prisma.user.findMany({}),
  } as any)
)