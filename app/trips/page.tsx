import Relay from "./relay"
import loadSerializableQuery from "../../relay/loadSerializableQuery"
import TripsQueryNode, { TripsQuery } from "__generated__/TripsQuery.graphql";

export default async function IssuePage({ params }: {
  params: { id: string };
}) {
  const preloadedQuery = await loadSerializableQuery<
    typeof TripsQueryNode,
    TripsQuery
  >(TripsQueryNode.params, {})

  return <Relay preloadedQuery={preloadedQuery} />
}

export const revalidate = 0