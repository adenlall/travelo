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
        // trips: t.relation("trips"),
        // details: t.relation("details"),
        // history: t.relation("history"),
        // locations: t.relation("locations"),

        createdAt: t.field({
            type: 'Date',
            resolve: () => new Date(),
        }),

        updatedAt: t.field({
            type: 'Date',
            resolve: () => new Date(),
        })

    })
})


builder.queryField('favorites', (t) =>
  t.prismaField({
    type: 'User',
    resolve: async (query, _parent, _args, ctx) => {
      if (!(await ctx).id) {
        throw new Error("You have to be logged in to perform this action")
      }

      const user = await prisma.user.findUnique({
        ...query,
        where: {
          email: (await ctx).email,
        }
      })

      if (!user) throw Error('User does not exist');

      return user
    }
  })
)