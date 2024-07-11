import SchemaBuilder, { FieldRef } from "@pothos/core";
import prisma from "../lib/prisma";

import { createContext } from './context';

import type PrismaTypes from "@pothos/plugin-prisma/generated";
import PrismaPlugin from '@pothos/plugin-prisma';
import ValidationPlugin from '@pothos/plugin-validation';
import RelayPlugin from "@pothos/plugin-relay";

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
    LinkType: {
      Input: any,
      Output: any;
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
  plugins: [PrismaPlugin, RelayPlugin, ValidationPlugin],
  relayOptions: {},
  validationOptions: {
    validationError: (zodError, args, context, info) => {
      return zodError;
    }
  },
  prisma: {
    client: prisma,
  }
})

builder.queryType({})
builder.mutationType({})