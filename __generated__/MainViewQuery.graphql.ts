/**
 * @generated SignedSource<<d23dd84842402875df3a43014f74bef3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MainViewQuery$variables = Record<PropertyKey, never>;
export type MainViewQuery$data = {
  readonly Users: ReadonlyArray<{
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
    "name": "Users",
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
    "cacheID": "c67755136350c6d43dcfe805205a2655",
    "id": null,
    "metadata": {},
    "name": "MainViewQuery",
    "operationKind": "query",
    "text": "query MainViewQuery {\n  Users {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "268887b287a132473e3b9dfb240b6011";

export default node;
