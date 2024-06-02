import SchemaBuilder from "@pothos/core";
import PrismaPlugin from '@pothos/plugin-prisma';
import prisma from "../lib/prisma";
import RelayPlugin from "@pothos/plugin-relay";
import {createContext} from './context'
import PrismaTypes from "@pothos/plugin-prisma/generated";
import { DateResolver } from "graphql-scalars";

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes,
  Scalars: {
    Date: {
      Input: Date;
      Output: Date;
    };
  },
  Context: ReturnType<typeof createContext>,
}>({
  plugins: [PrismaPlugin, RelayPlugin],
  relayOptions: {},
  prisma: {
    client: prisma,
  }
})


builder.addScalarType('Date', DateResolver);

builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});