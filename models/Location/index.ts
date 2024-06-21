import { builder } from "@/graphql/builder";

builder.prismaObject('Location', {
  fields: (t) => ({
    id: t.exposeID('id'),

    title: t.exposeString('title'),
    description: t.exposeString('description', { nullable: true }),
    country: t.exposeString('country'),
    lat: t.exposeString('lat', { nullable: true }),
    long: t.exposeString('long', { nullable: true }),

    author: t.relation("author"),
    trips: t.relation("trips"),

    createdAt: t.expose("createdAt", {
      type: "Date"
    }),
    updatedAt: t.expose("updatedAt", {
      type: "Date"
    })
  })
})

builder.queryField('Location', (t) =>
  t.prismaConnection({
    type: 'Location',
    cursor: 'id',
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.location.findMany({ ...query })
  })
)
