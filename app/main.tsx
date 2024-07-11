"use client";

import { useRelayEnvironment } from "react-relay";
import MainView from "../components/MainView"
import { SerializablePreloadedQuery } from "../relay/loadSerializableQuery"
import useSerializablePreloadedQuery from "../relay/useSerializablePreloadedQuery"
import MainViewQueryGraphql, { MainViewQuery } from "../__generated__/MainViewQuery.graphql"
import { Session } from "next-auth";

const Main = (props: {
  preloadedQuery: SerializablePreloadedQuery<
    typeof MainViewQueryGraphql,
    MainViewQuery
  >;
}) => {
  const environment = useRelayEnvironment();
  const queryRef = useSerializablePreloadedQuery(
    environment,
    props.preloadedQuery
  );

  return <MainView queryRef={queryRef} />;
};

export default Main;