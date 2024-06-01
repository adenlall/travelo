import SchemaBuilder from "@pothos/core";
import PrismaPlugin from '@pothos/plugin-prisma';
import prisma from "../lib/prisma";
import RelayPlugin from "@pothos/plugin-relay";
import {createContext} from './context'
import PrismaTypes from "@pothos/plugin-prisma/generated";

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes,
  Scalars: {
    Json: {
      Input: any;
      Output: any;
    };
    Date: {
      Input: Date;
      Output: Date;
    };
  },
  Context: ReturnType<typeof createContext>,
}>({
  plugins: [PrismaPlugin, RelayPlugin],
  relayOptions: {
    idFieldName:"id",
    cursorType:"String",
    clientMutationId:"omit",
  },
  prisma: {
    client: prisma,
  }
})

builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});

builder.mutationType({})