import { builder } from "../../graphql/builder";
import prisma from "../../lib/prisma";
import './mutation';
import { Trip, User } from "../../types/graphql"

builder.prismaObject("Trip", {
    select: {
        id: true,
    },
    findUnique: (trip : Trip) => ({ id: trip.id }),
    fields: t => ({
        id: t.exposeString("id"),
        title: t.exposeString("title"),
        description: t.exposeString("description", { nullable: true }),
        location: t.relation("location"),
        users: t.field({
            select: (args, ctx, nestedSelection) => ({
                users: {
                    select: {
                        user: nestedSelection(true),
                    },
                },
            }),
            type: ["User"] as User[],
            resolve: (trip) => trip.users.map(({ user }) => user),
            nullable: true,
        })
    }),
})


builder.queryField("Trip", t =>
    t.prismaField({
        type: ["Trip"],
        resolve: async (_query: any, _parent: any, _args: any, _info: any) => prisma.trip.findMany({}),
    } as any)
)