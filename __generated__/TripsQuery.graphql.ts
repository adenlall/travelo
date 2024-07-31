/**
 * @generated SignedSource<<1447cea2f588c1b717507dcbf3316d0c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TripsQuery$variables = Record<PropertyKey, never>;
export type TripsQuery$data = {
  readonly trips: ReadonlyArray<{
    readonly description: string | null | undefined;
    readonly id: string;
    readonly title: string;
  }>;
};
export type TripsQuery = {
  response: TripsQuery$data;
  variables: TripsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Trip",
    "kind": "LinkedField",
    "name": "trips",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TripsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TripsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "18afcb480d31fc2b524f775bc772d7c5",
    "id": null,
    "metadata": {},
    "name": "TripsQuery",
    "operationKind": "query",
    "text": "query TripsQuery {\n  trips {\n    id\n    title\n    description\n  }\n}\n"
  }
};
})();

(node as any).hash = "877c701b0a8485881c33038726aa8a5c";

export default node;
