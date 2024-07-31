"use client";

import { useRelayEnvironment } from "react-relay";
import { SerializablePreloadedQuery } from "../../relay/loadSerializableQuery"
import useSerializablePreloadedQuery from "../../relay/useSerializablePreloadedQuery"
import TripsQueryGraphql, { TripsQuery } from "../../__generated__/TripsQuery.graphql"
import Trips from "components/Trips";

const Relay = (props: {
  preloadedQuery: SerializablePreloadedQuery<
    typeof TripsQueryGraphql,
    TripsQuery
  >;
}) => {
  const environment = useRelayEnvironment();
  const queryRef = useSerializablePreloadedQuery(
    environment,
    props.preloadedQuery
  );

  return <Trips queryRef={queryRef} />;
};

export default Relay;