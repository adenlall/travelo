import user from "graphql/queries/user";
import { builder } from "../../graphql/builder";
import prisma from "../../lib/prisma";
import zod from "zod";


builder.mutationField("deleteTrip", t =>
    t.prismaField({
        type: "Trip",
        args: {
            id: t.arg.id({ required: true }),
        },
        resolve: async (query, _parent, args, _info) =>
            prisma.trip.delete({
                ...query,
                where: {
                    id: String(args.id),
                },
            }),
    })
)

const LocationInput = builder.inputType('LocationInput', {
    fields: (t) => ({
        city: t.string({
            required: true,
            validate: {
                minLength: 2
            }
        }),
        country: t.string({
            required: true,
            validate: {
                minLength: 2
            }
        }),
        state: t.string({
            required: true,
            validate: {
                minLength: 2
            }
        }),
    }),
});

builder.mutationField("createTrip", t =>
    // TODO: edge case where user give location obj but the uniqueness faleid
    t.prismaField({
        type: "Trip",
        args: {
            title: t.arg.string({
                required: true, validate: {
                    minLength: 10,
                    maxLength: 150
                }
            }),
            description: t.arg({
                type: "String", validate: {
                    maxLength: 200
                }
            }),
            locationId: t.arg.string({
                validate: {
                    uuid: true
                }
            }),
            location: t.arg({
                type: LocationInput,
                required: false
            }),
        },
        validate: [
            (args) => {
                if (!args.locationId && !args.location) {
                    return false;
                }
                return true;
            },
            { message: "You must specify a locationId or location object for this trip" }
        ],
        resolve: async (query, _parent, args, ctx) => {
            return prisma.trip.create({
                ...query,
                data: {
                    title: args.title,
                    description: args.description,
                    location: {
                        connectOrCreate: {
                            where: {
                                id: args.locationId ?? ""
                            },
                            create: args.location as any
                        }
                    },
                    users: {
                        create: [
                            {
                                user: {
                                    connect: {
                                        id: (await ctx).id
                                    }
                                },
                                assignedBy: (await ctx).email ?? "API",
                                assignedAt: new Date(),
                            }
                        ]
                    }
                },
            });
        }
    })
)

builder.mutationField("editTrip", t =>
    t.prismaField({
        type: "Trip",
        args: {
            id: t.arg.id({
                required: true,
                validate: {
                    uuid: true
                }
            }),
            title: t.arg.string({
                required: true,
                validate: {
                    schema: zod.string().max(150).min(50)
                }
            }),
            description: t.arg.string({
                validate: {
                    schema: zod.string().max(200)
                }
            })
        },
        resolve: async (query, _parent, args, ctx) =>
            prisma.trip.update({
                ...query,
                where: {
                    id: String(args.id),
                },
                data: {
                    title: args.title,
                    description: args.description
                },
            }),
    })
)

