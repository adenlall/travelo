import { auth } from "../../../lib/auth";

export async function GET() {
    const session = await auth();
    if (!session?.user) return Response.json({error: "!auth", session:session});
    return Response.json(session);
}