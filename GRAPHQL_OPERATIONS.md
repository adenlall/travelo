# Extracted GraphQL Operations
## Queries

### HelloUser

```graphql
query HelloUser {
  Users {
    name
  }
}
```

From [graphql/queries/user.ts:3:20](graphql/queries/user.ts#L3-L7)
    

### ANONYMOUS_QUERY

```graphql
{
  Users {
    name
    email
  }
  report(id: 1) {
    id
  }
}
```

From [app/page.tsx:13:31](app/page.tsx#L13-L21)
    

### FeedQuery

```graphql
query FeedQuery($id: String!) {
  profile(id: $id) {
    id
    name
    date
    createdAt
    bodymaps {
      id
      label
      details
    }
    user {
      id
      name
      email
    }
  }
}
```

From [pages.old/profile.tsx:63:16](pages.old/profile.tsx#L63-L82)
    

### FeedQuery

```graphql
query FeedQuery {
  feed {
    id
    name
    date
    createdAt
  }
}
```

From [pages.old/reports.tsx:262:16](pages.old/reports.tsx#L262-L271)
    

### ReportQuery

```graphql
query ReportQuery($id: ID!) {
  report(id: $id) {
    id
    name
    date
    bodymaps {
      id
      label
      details
    }
    user {
      id
      name
    }
  }
}
```

From [pages.old/edit/[id].tsx:203:16](pages.old/edit/[id].tsx#L203-L220)
    

### ReportQuery

```graphql
query ReportQuery($id: ID!) {
  report(id: $id) {
    id
    name
    date
    bodymaps {
      id
      label
      details
    }
    user {
      id
      name
    }
  }
}
```

From [pages.old/p/[id].tsx:136:16](pages.old/p/[id].tsx#L136-L153)
    
## Mutations

### CreateReportMutation

```graphql
mutation CreateReportMutation($name: String!, $date: Date!, $email: String!, $bodymaps: [BodyMapInput!]!) {
  createReport(name: $name, date: $date, bodymaps: $bodymaps, email: $email) {
    id
    name
    date
    bodymaps {
      label
      details
    }
    user {
      id
      name
    }
  }
}
```

From [pages.old/create.tsx:15:34](pages.old/create.tsx#L15-L36)
    

### EditReportMutation

```graphql
mutation EditReportMutation($id: ID!, $name: String!, $date: Date!) {
  editReport(id: $id, name: $name, date: $date) {
    id
    name
    date
    bodymaps {
      id
      label
      details
    }
    user {
      id
      name
    }
  }
}
```

From [pages.old/edit/[id].tsx:22:32](pages.old/edit/[id].tsx#L22-L39)
    

### CreateBodyMapMutation

```graphql
mutation CreateBodyMapMutation($reportId: ID!, $label: String!, $details: String!) {
  createBodyMap(reportId: $reportId, label: $label, details: $details) {
    id
    label
    details
    report {
      id
      name
    }
  }
}
```

From [pages.old/edit/[id].tsx:40:35](pages.old/edit/[id].tsx#L40-L56)
    

### EditBodyMapMutation

```graphql
mutation EditBodyMapMutation($id: ID!, $label: String!, $details: String!) {
  editBodyMap(id: $id, label: $label, details: $details) {
    id
    label
    details
  }
}
```

From [pages.old/edit/[id].tsx:57:33](pages.old/edit/[id].tsx#L57-L65)
    

### DeleteBodyMapMutation

```graphql
mutation DeleteBodyMapMutation($id: ID!) {
  deleteBodyMap(id: $id) {
    id
    label
    details
  }
}
```

From [pages.old/edit/[id].tsx:66:35](pages.old/edit/[id].tsx#L66-L74)
    

### DeleteMutation

```graphql
mutation DeleteMutation($id: ID!) {
  deleteReport(id: $id) {
    id
    name
    date
    user {
      id
      name
    }
  }
}
```

From [pages.old/p/[id].tsx:30:28](pages.old/p/[id].tsx#L30-L42)
    
---
Extracted by [ts-graphql-plugin](https://github.com/Quramy/ts-graphql-plugin)