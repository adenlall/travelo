import zod from "zod"
import { builder } from "../../graphql/builder"
import prisma from "../../lib/prisma"

builder.mutationField("deleteAddress", t =>
    t.prismaField({
        type: "Address",
        args: {
            id: t.arg.id({ required: true }),
        },
        resolve: async (query, _parent, args, _info) =>
            prisma.address.delete({
                ...query,
                where: {
                    id: String(args.id),
                }
            }),
    })
)

builder.mutationField("createAddress", t =>
    t.prismaField({
        type: "Address",
        args: {
            name: t.arg.string({
                required: true, validate: {
                    minLength: 5,
                    maxLength: 150
                }
            }),
            address: t.arg.string({
                validate: {
                    minLength: 2,
                    maxLength: 200
                }
            }),
            postalCode: t.arg.string({
                validate: {
                    schema: zod.string().min(4).max(50)
                }
            }),
            lat: t.arg.float({
                validate: {
                    schema: zod.number()
                }
            }),
            long: t.arg.float({
                validate: {
                    schema: zod.number()
                }
            }),
            locationId: t.arg.id({
                required: true,
                validate: {
                    schema: zod.string().uuid()
                }
            })
        },
        resolve: async (query, _parent, args, ctx) =>
            prisma.address.create({
                ...query,
                data: {
                    name: args.name,
                    address: args.address,
                    postalCode: args.postalCode,
                    lat: args.lat,
                    long: args.long,
                    location: {
                        connect: {
                            id: String(args.locationId)
                        }
                    }
                }
            }),
    })
)

builder.mutationField("editAddress", t =>
    t.prismaField({
        type: "Address",
        args: {
            id: t.arg.id({ required: true }),
            name: t.arg.string({ required: true }),
            address: t.arg.string({
                validate: {
                    schema: zod.string().min(5).max(200)
                }
            }),
            postalCode: t.arg.string({
                validate: {
                    schema: zod.string().min(4).max(50)
                }
            }),
            lat: t.arg.float({
                validate: {
                    schema: zod.number()
                }
            }),
            long: t.arg.float({
                validate: {
                    schema: zod.number()
                }
            }),
        },
        resolve: async (query, _parent, args, ctx) =>
            prisma.address.update({
                ...query,
                where: {
                    id: String(args.id)
                },
                data: {
                    name: args.name,
                    address: args.address,
                    lat: args.lat,
                    long: args.long,
                    postalCode: args.postalCode,
                },
            }),
    })
)

