import SchemaBuilder, { FieldRef } from "@pothos/core";
import PrismaPlugin from '@pothos/plugin-prisma';
import prisma from "../lib/prisma";
import RelayPlugin from "@pothos/plugin-relay";
import { createContext } from './context';
import type PrismaTypes from "@pothos/plugin-prisma/generated";

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes,
  Scalars: {
    Date: {
      Input: Date;
      Output: Date;
    };
    JSONObject: {
      Input: any;
      Output: any;
    };
    LinkType:{
      Input:any,
      Output:any;
    };
    Links: {
      Input: any,
      Output: any
    };
    DurationType: {
      Input: string,
      Output: string
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

builder.queryType({})
builder.mutationType({})