import { builder } from "../../graphql/builder";
import prisma from "../../lib/prisma";

builder.mutationField("createUser", t =>
  t.prismaField({
    type: "User",
    args: {
      name: t.arg.string({ required: true }),
      tagline: t.arg.string(),
      email: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, _info) =>
      prisma.user.create({
        ...query,
        data: {
          email: args.email,
          tagline: args.tagline,
          name: args.name,
        },
      }),
  })
)

builder.mutationField("deleteUser", t =>
  t.prismaField({
    type: "User",
    args: {
      name: t.arg.string({ required: true }),
      email: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, _info) =>
      prisma.user.create({
        ...query,
        data: {
          email: args.email,
          name: args.name,
        },
      }),
  })
)
