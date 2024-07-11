import { Suspense } from "react";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { MainViewQuery } from "../__generated__/MainViewQuery.graphql"
import { auth } from "lib/auth";
import { useSession } from "next-auth/react";

export default function MainView(props: {
  queryRef: PreloadedQuery<MainViewQuery>;
}) {
  const data = usePreloadedQuery(
    graphql`
        query MainViewQuery {
            users {
                name
            }
        }
    `,
    props.queryRef
  );
  const session = useSession();

  return (
    <Suspense fallback="Loading (client side)...">
      <h1>
        <p>Welcome {session.data?.user.name}</p>
        <pre>
          {JSON.stringify(session, null, 2)}
        </pre>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </h1>
      {/*<Issues repository={data.repository} />*/}
    </Suspense>
  );
}