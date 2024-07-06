import { builder } from "../../graphql/builder";

builder.prismaObject("TripsOnUsers", {
    select: {
        id: true,
      },
    fields: t => ({
        assignedBy: t.exposeString("assignedBy"),
        assignedAt: t.expose("assignedAt", {
            type: "Date"
        }),
        trip: t.relation("trip"),
        user: t.relation("user"),
    }),
})