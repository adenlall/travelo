import { createYoga } from 'graphql-yoga'
import { schema } from '@/graphql/schema'
import { createContext } from '@/graphql/context'
import { run } from '@/models/User/seeder'

const { handleRequest } = createYoga({
    schema,
    context: createContext,
    graphqlEndpoint: '/api/graphql',
    fetchAPI: { Response }
})

run()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }



// import { createYoga } from 'graphql-yoga'
// import { createContext } from '@/graphql/context'
// import { schema } from '@/graphql/schema'

// export default createYoga ({
//     schema,
//     context: createContext,
//     graphqlEndpoint: '/api/graphql'
// })

// export const config = {
//     api: {
//         bodyParser: false
//     }
// }