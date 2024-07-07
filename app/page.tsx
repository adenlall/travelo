import { Metadata } from "next"
import { call } from "../graphql/queries"
import gql from "graphql-tag"
import { auth } from "../lib/auth";
import { SignIn } from "../components/Auth/SignIn";
import { GitHub } from "../components/Auth/GitHub";
import { SignOut } from "../components/Auth/SignOut";

export const metadata: Metadata = {
  title: "My Page Title"
}

export default async function Page() {
  const session = await auth();
  const data = await call(gql`query  {
      Users {
          id
          email
      }
  }`) as any;

  return <>
    {
      session ? (
        <>
          <h2>Welcome Back</h2>
          <SignOut />
        </>
      ) : (
        <>
          <SignIn />
          <GitHub />
        </>
      )
    }
    <h1>Hello</h1>
  </>
}