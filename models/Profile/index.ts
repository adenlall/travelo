import { builder } from "@/graphql/builder";

builder.prismaObject('profile', {
  fields: (t) => ({
    id: t.exposeID('id'),
    user: t.relation('user'),
    bio: t.exposeString("bio", { nullable: true }),

    city: t.exposeString("city", { nullable: true }),
    country: t.exposeString("country", { nullable: true }),

    details: t.expose("details", {
      type: "JSONObject",
    }),
    media: t.expose("media", {
      type: "JSONObject",
    }),
    links: t.expose("links", {
      type: "Links",
    }),
    statistics: t.expose("statistics", {
      type: "JSONObject",
    }),
    createdAt: t.expose("createdAt", {
      type: "Date"
    }),
    updatedAt: t.expose("updatedAt", {
      type: "Date"
    })
  })
})

builder.queryField('profile', (t) =>
  t.prismaConnection({
    type: 'profile',
    cursor: 'id',
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.profile.findMany({ ...query })
  })
)
