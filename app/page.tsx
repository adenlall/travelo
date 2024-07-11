import loadSerializableQuery from "../relay/loadSerializableQuery"
import Main from "./main"
import { Metadata } from "next";
import MainViewQueryNode, {
  MainViewQuery,
} from "../__generated__/MainViewQuery.graphql";
import { auth } from "lib/auth";

export const metadata: Metadata = {
  title: "My Page Title"
}

const Page = async () => {
  const preloadedQuery = await loadSerializableQuery<
    typeof MainViewQueryNode,
    MainViewQuery
  >(MainViewQueryNode.params, {});
  return <Main preloadedQuery={preloadedQuery} />;
};

export default Page;
export const revalidate = 0;

