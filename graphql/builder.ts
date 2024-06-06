import SchemaBuilder, { FieldRef } from "@pothos/core";
import PrismaPlugin from '@pothos/plugin-prisma';
import prisma from "../lib/prisma";
import RelayPlugin from "@pothos/plugin-relay";
import { createContext } from './context';
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { DateResolver } from "graphql-scalars";

export const builder = new SchemaBuilder < {
  PrismaTypes: PrismaTypes,
  Scalars: {
    Date: {
      Input: Date;
      Output: Date;
    };
    DurationType: {
      Input: string,
      Output: string 
    }
  },
  Context: ReturnType<typeof createContext>,
} > ({
  plugins: [PrismaPlugin, RelayPlugin],
  relayOptions: {},
  prisma: {
    client: prisma,
  }
})



builder.scalarType("DurationType", {
  serialize: (n) => n,
  parseValue: (value: any) => {
    return value;
  }
});

builder.addScalarType('Date', DateResolver);

builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});