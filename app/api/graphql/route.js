import { createYoga } from 'graphql-yoga'
import { schema } from '@/graphql/schema'
import { createContext } from '@/graphql/context'

const { handleRequest } = createYoga({
    schema,
    context: createContext,
    graphqlEndpoint: '/api/graphql',
    fetchAPI: { Response },
    
})

export const config = {
    api: {
        bodyParser: true
    }
}


export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }