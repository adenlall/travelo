import { Metadata } from "next"
import { call } from "../graphql/queries"
import gql from "graphql-tag"

export const metadata: Metadata = {
  title: "My Page Title"
}

export default async function Page() {
  const data = await call(gql`query  {
      Users {
          id
          email
      }
      report(id:1){
          id
      }
  }`) as any;

  return <>
    <h1>Hello</h1>
    {
      data.Users.map((name, i) => (
        <h2 key={i}>{name.name}</h2>
      ))
    }
  </>
}