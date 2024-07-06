"use server"

import client from "../../lib/apollo-client";
import gql from "graphql-tag";

export async function call(query:any, variables?:JSON) : Promise<void> {
    const { data } = await client.query({
        query: query,
        variables: variables,
    })

    return data
}