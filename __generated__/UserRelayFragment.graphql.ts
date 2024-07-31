/**
 * @generated SignedSource<<08eb3377001afad97113ea7a43a82b1b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserRelayFragment$data = {
  readonly email: string;
  readonly id: string;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "UserRelayFragment";
};
export type UserRelayFragment$key = {
  readonly " $data"?: UserRelayFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserRelayFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserRelayFragment",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "3e63ce9e3df8a23880ca3e96d52cfa82";

export default node;
