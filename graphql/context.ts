import { auth } from "../lib/auth"
import { log } from "../utils"
import { Session } from "next-auth"

export async function createContext() {
    const session : Session | null = await auth()

      return {
        id:session?.user.id,
        email:session?.user.email,
        name:session?.user.name
      }
}