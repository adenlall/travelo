import { InputFieldRef, InputShapeFromFields } from "@pothos/core"
import { builder } from "../../graphql/builder"
import prisma from "../../lib/prisma"
import { Create } from "./prisma"

builder.mutationField("deleteLocation", t =>
    t.prismaField({
        type: "Location",
        args: {
            id: t.arg.id({ required: true }),
        },
        resolve: async (query, _parent, args, _info) =>
            prisma.location.delete({
                ...query,
                where: {
                    id: String(args.id),
                }
            }),
    })
)

builder.mutationField("createLocation", t =>
    t.prismaField({
        type: "Location",
        args: {
            country: t.arg.string({
                required: true, validate: {
                    minLength: 2
                }
            }),
            state: t.arg.string({
                required: true, validate: {
                    minLength: 2
                }
            }),
            city: t.arg.string({
                required: true, validate: {
                    minLength: 2
                }
            }),
            tripId: t.arg.id({
                required: false, validate: {
                    uuid: true
                }
            }),
            profileId: t.arg.id({
                required: false, validate: {
                    uuid: true
                }
            }),
        },
        resolve: async (query, _parent, args, ctx) =>
            prisma.location.create({
                ...query,
                data: Create(args)
            }),
    })
)

builder.mutationField("editLocation", t =>
    t.prismaField({
        type: "Location",
        args: {
            id: t.arg.id({
                required: true, validate: {
                    uuid: true
                }
            }),
            country: t.arg.string({
                required: false, validate: {
                    minLength: 2
                }
            }),
            state: t.arg.string({
                required: false, validate: {
                    minLength: 2
                }
            }),
            city: t.arg.string({
                required: false, validate: {
                    minLength: 2
                }
            })
        },
        resolve: async (query, _parent, args, ctx) =>
            prisma.location.update({
                ...query,
                where: {
                    id: String(args.id)
                },
                data: {
                    city: args.city as string | undefined,
                    country: args.country as string | undefined,
                    state: args.state as string | undefined
                },
            }),
    })
)

