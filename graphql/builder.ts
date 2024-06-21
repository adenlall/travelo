import SchemaBuilder, { FieldRef } from "@pothos/core";
import PrismaPlugin from '@pothos/plugin-prisma';
import prisma from "../lib/prisma";
import RelayPlugin from "@pothos/plugin-relay";
import { createContext } from './context';
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { DateResolver, JSONObjectResolver } from "graphql-scalars";
import { linksValidator } from "./validators/links";

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
    Links: {
      Input: any,
      Output: any
    }
    DurationType: {
      Input: string,
      Output: string
    }
  },
  Context: ReturnType<typeof createContext>,
}>({
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
builder.addScalarType('JSONObject', JSONObjectResolver);

builder.scalarType('Links', {
  description:'Links contains Website URL, Twitter Username and list of Links',
  serialize: (ls) => {
    if (linksValidator(ls)) {
      return ls;
    } else {
      throw new Error('Not a valid Links JSON Object Type');
    }
  },
  parseValue: (ls) => {
    let links = JSON.parse(JSON.stringify(ls));
    if (linksValidator(links)) {
      return links;
    } else {
      throw new Error('Not a valid Links JSON Object Type');
    }
  },
});

builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});