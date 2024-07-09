import { Suspense } from "react";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";
import Issues from "./Issues";
import { MainViewQuery } from "../__generated__/MainViewQuery.graphql"

export default function MainView(props: {
  queryRef: PreloadedQuery<MainViewQuery>;
}) {
  const data = usePreloadedQuery(
    graphql`
        query MainViewQuery {
            Users {
                name
            }
        }
    `,
    props.queryRef
  );

  return (
    <Suspense fallback="Loading (client side)...">
      <h1>
        {data.Users[0].name}
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </h1>
      {/*<Issues repository={data.repository} />*/}
    </Suspense>
  );
}