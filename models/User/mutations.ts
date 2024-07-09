import { builder } from "../../graphql/builder";
import prisma from "../../lib/prisma";

builder.mutationField("createUser", t =>
  t.prismaField({
    type: "User",
    args: {
      name: t.arg.string({ required: true, validate:{
        minLength:5,
        maxLength:50
      } }),
      tagline: t.arg.string({
        validate:{
          maxLength:50,
          minLength:5
        }
      }),
      email: t.arg.string({ required: true, validate:{
        email:true
      } }),
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
      id: t.arg.id({
        required: true, validate: {
          uuid: true
        }
      }),
    },
    resolve: async (query, _parent, args, _info) =>
      prisma.user.delete({
        ...query,
        where:{
          id: String(args.id)
        }
      }),
  })
)
