/**
 * @generated SignedSource<<8a4f033c81269540028a96ab11e334e2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MainViewQuery$variables = Record<PropertyKey, never>;
export type MainViewQuery$data = {
  readonly users: ReadonlyArray<{
    readonly name: string | null | undefined;
  }>;
};
export type MainViewQuery = {
  response: MainViewQuery$data;
  variables: MainViewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
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
    "name": "MainViewQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainViewQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d9aaaa987d022bc3fe964b59a2515d52",
    "id": null,
    "metadata": {},
    "name": "MainViewQuery",
    "operationKind": "query",
    "text": "query MainViewQuery {\n  users {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "8d6e4676dbbefa2fe776fd0bfc60ca64";

export default node;
