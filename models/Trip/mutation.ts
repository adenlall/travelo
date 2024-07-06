import { builder } from "../../graphql/builder";
import prisma from "../../lib/prisma";


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
      city: t.string({ required: true }),
      country: t.string({ required: true }),
      state: t.string({ required: true }),
    }),
  });

builder.mutationField("createTrip", t =>
    t.prismaField({
        type: "Trip",
        args: {
            title: t.arg.string({ required: true }),
            description: t.arg({ type: "String" }),
            locationId: t.arg.string(),
            location: t.arg({
                type: LocationInput,
                required:false
            }),
        },
        resolve: async (query, _parent, args, ctx) =>
            prisma.trip.create({
                ...query,
                data: {
                    title: args.title,
                    description: args.description,
                    location: {
                        connectOrCreate: {
                            where:{
                                id:args.locationId??""
                            },
                            create:args.location??{
                                city:"dqw",
                                country:"dqw",
                                state:"dww"
                            }
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
                                assignedBy: "API",
                                assignedAt: new Date(),
                            }
                        ]
                    }
                },
            }),
    })
)

builder.mutationField("editTrip", t =>
    t.prismaField({
        type: "Trip",
        args: {
            id: t.arg.id({ required: true }),
            title: t.arg.string({ required: true }),
            description: t.arg.string()
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

