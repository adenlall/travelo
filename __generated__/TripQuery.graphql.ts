/**
 * @generated SignedSource<<d602eca6ae9f4aea7a2ba3a28cfdd7d4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TripQuery$variables = Record<PropertyKey, never>;
export type TripQuery$data = {
  readonly Trip: ReadonlyArray<{
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
        "name": "Trip",
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
        "name": "Trip",
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
    "cacheID": "0b38113211bc580435d0d419c63693e6",
    "id": null,
    "metadata": {},
    "name": "TripQuery",
    "operationKind": "query",
    "text": "query TripQuery {\n  Trip {\n    id\n    title\n    description\n    location {\n      city\n      state\n      country\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2f639a65fddaec7360148557218fac82";

export default node;
