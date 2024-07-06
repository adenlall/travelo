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
            name: t.arg.string({ required: true }),
            address: t.arg.string(),
            postalCode: t.arg.string(),
            lat: t.arg.float(),
            long: t.arg.float(),
            locationId: t.arg.id({required: true})
        },
        resolve: async (query, _parent, args, ctx) =>
            prisma.address.create({
                ...query,
                data: {
                    name: args.name,
                    address: args.address,
                    postalCode: args.postalCode,
                    lat: args.lat,
                    long:args.long,
                    location:{
                        connect:{
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
            id: t.arg.id({required: true}),
            name: t.arg.string({ required: true }),
            address: t.arg.string(),
            postalCode: t.arg.string(),
            lat: t.arg.float(),
            long: t.arg.float(),
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

