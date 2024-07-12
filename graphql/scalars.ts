import { DateResolver, JSONObjectResolver } from "graphql-scalars";
import { builder } from "./builder";
import { linksValidator } from "./validators/links";
import { GraphQLScalarType, Kind } from "graphql";

builder.scalarType("DurationType", {
  serialize: (n) => n,
  parseValue: (value: any) => {
    return value;
  }
});



builder.addScalarType("Date", DateResolver, {});

builder.addScalarType('JSONObject', JSONObjectResolver, {});

builder.scalarType('Links', {
  description: 'Links contains Website URL, Twitter Username and list of Links',
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