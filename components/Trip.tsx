import { Suspense } from "react";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { TripQuery } from "../__generated__/TripQuery.graphql"

export default function Trip(props: { queryRef: PreloadedQuery<TripQuery> }) {
  const data = usePreloadedQuery(
    graphql`
        query TripQuery {
            Trip {
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
      <h1>{data.Trip[0].title}</h1>
      <p>{data.Trip[0].description}</p>
      <h2>Location :</h2>
      <p>
        <ul>
          <li>{data.Trip[0].location.city}</li>
          <li>{data.Trip[0].location.state}</li>
          <li>{data.Trip[0].location.country}</li>
        </ul>
      </p>
    </Suspense>
  );
}