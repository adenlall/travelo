import { Suspense } from "react";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { TripQuery } from "../__generated__/TripQuery.graphql"

export default function Trip(props: { queryRef: PreloadedQuery<TripQuery> }) {
  const data = usePreloadedQuery(
    graphql`
        query TripQuery($id: String!) {
            trip(id: $id) {
                id    
                title
                description
                location {
                    city
                    state
                    country
                }
            }
        }
    `,
    props.queryRef
  );

  return (
    <Suspense fallback="Loading (client side)...">
      <h1>{data.trip.title}</h1>
      <p>{data.trip.description}</p>
      <h2>Location :</h2>
      <p>
        <ul>
          <li>{data.trip.location.city}</li>
          <li>{data.trip.location.state}</li>
          <li>{data.trip.location.country}</li>
        </ul>
      </p>
    </Suspense>
  );
}