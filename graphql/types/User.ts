// /graphql/types/User.ts
import { builder } from "../builder";
 
builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email'),
    name: t.exposeString('name'),
    username: t.exposeString('username'),
    location: t.exposeString('location'),
    details: t.expose('details', { type: 'Json' }),
    history: t.expose('history', { type: 'Json' }),
  })
})

