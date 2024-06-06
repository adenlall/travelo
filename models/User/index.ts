import { builder } from "@/graphql/builder";

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    username: t.exposeString('username'),
    email: t.exposeString('email'),
    location: t.exposeString('location'),

    // role: t.expose(newLocal, { type: Role, }),

    // action: t.relation("action"),
    trips: t.relation("trips", {
      args: {
        oldestFirst: t.arg.boolean(),
      },
      query: (args, context) => ({
        orderBy: {
          createdAt: args.oldestFirst ? 'asc' : 'desc',
        }, 
      }),
    }),
    tripsConnection: t.relatedConnection('trips', {
      cursor: 'id',
    }),
    
    // details: t.relation("details"),
    // history: t.relation("history"),
    // locations: t.relation("locations"),

    createdAt: t.expose("createdAt", {
      type: "Date"
    }),
    updatedAt: t.expose("updatedAt", {
      type: "Date"
    })
  }),
})


builder.queryField('Auth', (t) =>
  t.prismaField({
    type: 'User',
    resolve: async (query, _parent, _args, ctx) => {
      if (!(await ctx).id) {
        throw new Error("You have to be logged in to perform this action")
      }
      const user = await prisma.user.findFirst({
        ...query,
        where: {
          email: (await ctx).email,
        }
      })

      if (!user) {
        throw Error('Your not Authorized');
      }

      return user
    }
  })
)
builder.queryField('User', (t) =>
  t.prismaField({
    type: ["User"],
    args: {
      id: t.arg({
        type: "String",
      }),
      name: t.arg({
        type: "String",
      }),
    },
    resolve: async (query, _parent, _args) => {
      if (_args.id) {
        const user = await prisma.user.findMany({
          ...query,
          where: {
            id: _args.id
          }
        })
        return user;
      }
      const users = await prisma.user.findMany({
        ...query,
        // where:{
        //   // name:_args.name
        // }
      })
      return users
    }
  })
)