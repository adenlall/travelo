/**
 * @generated SignedSource<<931fd39d31296fac22e5abb9ed55f684>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TripQuery$variables = Record<PropertyKey, never>;
export type TripQuery$data = {
  readonly trips: ReadonlyArray<{
    readonly description: string | null | undefined;
    readonly id: string;
    readonly location: {
      readonly city: string;
      readonly country: string;
      readonly state: string | null | undefined;
    };
    readonly title: string;
  }>;
};
export type TripQuery = {
  response: TripQuery$data;
  variables: TripQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "city",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "country",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TripQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Trip",
        "kind": "LinkedField",
        "name": "trips",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Location",
            "kind": "LinkedField",
            "name": "location",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TripQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Trip",
        "kind": "LinkedField",
        "name": "trips",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Location",
            "kind": "LinkedField",
            "name": "location",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4e544f776f819dc9c64954b002ca30ef",
    "id": null,
    "metadata": {},
    "name": "TripQuery",
    "operationKind": "query",
    "text": "query TripQuery {\n  trips {\n    id\n    title\n    description\n    location {\n      city\n      state\n      country\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0ca0ec28f047f7a6bc52944642b7e1f7";

export default node;
