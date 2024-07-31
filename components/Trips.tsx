import { Suspense } from "react";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { TripsQuery } from "../__generated__/TripsQuery.graphql"
import Link from "next/link";

export default function Trips(props: { queryRef: PreloadedQuery<TripsQuery> }) {
  const data = usePreloadedQuery(
    graphql`
        query TripsQuery {
            trips {
                id
                title
                description
            }
        }
    `,
    props.queryRef
  );

  return (
    <Suspense fallback="Loading (client side)...">
      {data.trips?.map((trip) => (
        <>
        <Link href={"/trips/"+trip.id} style={{marginTop:'1em'}}>
          <h1>{trip.title}</h1>
          <p>{trip.description}</p>
        </Link>
        <hr/>
        </>
      ))}
    </Suspense>
  );
}