import { builder } from "../../graphql/builder"
import { TripsOnUsers } from "../../types/graphql"

builder.prismaObject("TripsOnUsers", {
  select: {
    id: true
  },
  findUnique: (tripsOnUsers: TripsOnUsers) => ({ id: tripsOnUsers.id }),
  fields: t => ({
    id: t.exposeID("id"),
    assignedBy: t.exposeString("assignedBy"),
    assignedAt: t.expose("assignedAt", {
      type: "Date"
    }),
    trip: t.relation("trip"),
    user: t.relation("user")
  })
})