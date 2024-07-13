"use client";

import { useRelayEnvironment } from "react-relay";
import { SerializablePreloadedQuery } from "../../../relay/loadSerializableQuery"
import useSerializablePreloadedQuery from "../../../relay/useSerializablePreloadedQuery"
import Issue from "../../../components/Trip"

const Root = (props: {
  preloadedQuery: any;
}) => {
  const environment = useRelayEnvironment();
  const queryRef = useSerializablePreloadedQuery(
    environment,
    props.preloadedQuery
  );
  return <></>
  // return <Issue queryRef={queryRef} />;
};

export default Root;