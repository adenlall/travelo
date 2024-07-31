# Extracted GraphQL Operations
## Queries

### HelloUser

```graphql
query HelloUser {
  users {
    name
  }
}
```

From [graphql/queries/user.ts:3:20](graphql/queries/user.ts#L3-L7)
    

### MainViewQuery

```graphql
query MainViewQuery {
  users {
    name
  }
}
```

From [components/MainView.tsx:11:13](components/MainView.tsx#L11-L17)
    

### TripQuery

```graphql
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
```

From [components/Trip.tsx:7:13](components/Trip.tsx#L7-L20)
    

### TripsQuery

```graphql
query TripsQuery {
  trips {
    id
    title
    description
  }
}
```

From [components/Trips.tsx:8:13](components/Trips.tsx#L8-L16)
    
---
Extracted by [ts-graphql-plugin](https://github.com/Quramy/ts-graphql-plugin)