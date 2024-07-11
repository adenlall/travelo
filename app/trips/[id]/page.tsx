import IssueViewClientComponent from "./TripViewClientComponent"
import loadSerializableQuery from "../../../relay/loadSerializableQuery"
import TripQueryNode, { TripQuery } from "__generated__/TripQuery.graphql";

export default async function IssuePage({ params }: {
  params: { id: string };
}) {
  const preloadedQuery = await loadSerializableQuery<
    typeof TripQueryNode,
    TripQuery
  >(TripQueryNode.params, {})

  return <IssueViewClientComponent preloadedQuery={preloadedQuery} />
}

export const revalidate = 0