import { builder } from "../../graphql/builder";
import prisma from "../../lib/prisma";
import "./mutation";

builder.prismaNode("Address", {
    select: {
        id: true,
    },
    findUnique: (address : any) => ({ id: address.id }),
    id: { resolve: (location) => String(location.id) },
    nullable: true,
    fields: t => ({
        name: t.exposeString("name", { nullable: true }),
        address: t.exposeString("address", { nullable: true }),
        postalCode: t.exposeString("postalCode", { nullable: true }),
        lat: t.exposeFloat("lat", {nullable:true}),
        long: t.exposeFloat("long", {nullable:true}),
        location: t.relation("location"),
        createdAt: t.expose("createdAt", {
          type: "Date"
        }),
        updatedAt: t.expose("updatedAt", {
          type: "Date"
        })
    }),
})

builder.queryField("Address", t =>
    t.prismaField({
        type: ["Address"],
        resolve: async (_query: any, _parent: any, _args: any, _info: any) => prisma.location.findMany({..._query}),
    } as any)
)