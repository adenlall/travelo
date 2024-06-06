import { builder } from "@/graphql/builder";

builder.prismaObject('Trip', {
  fields: (t) => ({
    id: t.exposeID('id'),

    title: t.exposeString('title'),
    durationUnit: t.exposeString('durationUnit'),
    priceUnit: t.exposeString('priceUnit'),

    duration:t.exposeInt('duration'),
    price:t.exposeInt('price'),

    users: t.relation("users"),
    // location: t.relation("location"),
    // details: t.relation("details"),

    createdAt: t.expose("createdAt", {
      type: "Date"
    }),
    updatedAt: t.expose("updatedAt", {
      type: "Date"
    })
  })
})

builder.queryField('Trips', (t) =>
  t.prismaConnection({
    type: 'Trip',
    cursor: 'id',
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.trip.findMany({ ...query })
  })
)
