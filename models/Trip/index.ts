import { builder } from "@/graphql/builder";

builder.prismaObject('Trip', {
  fields: (t) => ({
    id: t.exposeID('id'),

    title: t.exposeString('title'),
    description: t.exposeString('description', {nullable:true}),
    
    details: t.expose("details", { type: "JSONObject", nullable: true }),
    
    vues:t.exposeInt("vues"),
    likes:t.exposeInt("likes"),

    duration: t.exposeInt('duration'),
    price: t.exposeInt('price'),

    durationUnit: t.exposeString('durationUnit'),
    priceUnit: t.exposeString('priceUnit'),

    users: t.relation("users"),
    location: t.relation("location"),

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
