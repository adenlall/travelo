import { builder } from "../../graphql/builder";
import prisma from "../../lib/prisma";

builder.prismaObject("Profile", {
  select: {
    id: true,
  },
  fields: t => ({
    id: t.exposeString("id"),
    description: t.exposeString("description", { nullable: true }),
    location: t.relation("location"),
    email: t.exposeString("email", { nullable: true }),
    user: t.relation("user"),
  }),
})


builder.queryField("Profile", t =>
    t.prismaField({
        type: ["Profile"],
        resolve: async (_query: any, _parent: any, _args: any, _info: any) => prisma.profile.findMany({}),
    } as any)
)