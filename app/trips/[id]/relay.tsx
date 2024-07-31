"use client";

import { useRelayEnvironment } from "react-relay";
import { SerializablePreloadedQuery } from "../../../relay/loadSerializableQuery"
import useSerializablePreloadedQuery from "../../../relay/useSerializablePreloadedQuery"
import TripQueryGraphql, { TripQuery } from "../../../__generated__/TripQuery.graphql"
import Trip from "../../../components/Trip";

const Relay = (props: {
  preloadedQuery: SerializablePreloadedQuery<
    typeof TripQueryGraphql,
    TripQuery
  >;
}) => {
  const environment = useRelayEnvironment();
  const queryRef = useSerializablePreloadedQuery(
    environment,
    props.preloadedQuery
  );

  return <>
  <Trip queryRef={queryRef} />
  </>
};

export default Relay;