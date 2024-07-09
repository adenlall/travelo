import loadSerializableQuery from "../relay/loadSerializableQuery"
import Main from "./main"
import { Metadata } from "next";
import MainViewQueryNode, {
  MainViewQuery,
} from "../__generated__/MainViewQuery.graphql";


export const metadata: Metadata = {
  title: "My Page Title"
}


const Page = async () => {
  const preloadedQuery = await loadSerializableQuery<
    typeof MainViewQueryNode,
    MainViewQuery
  >(MainViewQueryNode.params, {
    owner: "facebook",
    name: "relay",
  });

  return <Main preloadedQuery={preloadedQuery} />;
};

export default Page;
export const revalidate = 0;

