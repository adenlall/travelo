import { createYoga } from "graphql-yoga";
import { schema } from "./schema";

const { handleRequest } = createYoga<{
    req: NextApiRequest,
    res: NextApiResponse
}>({
    schema,
    // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
    graphqlEndpoint: "/api/graphql",

    // Yoga needs to know how to create a valid Next response
    fetchAPI: { Response: Response },
});

export {
    handleRequest as GET,
    handleRequest as POST,
    handleRequest as OPTIONS,
};