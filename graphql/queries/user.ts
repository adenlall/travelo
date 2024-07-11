import gql from "graphql-tag"

export default gql`query HelloUser{
    users {
        name
    }
}`