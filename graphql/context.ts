import { auth } from "../lib/auth"
import { log } from "../utils"

export async function createContext() {
    const session = await auth()

    // if (!session || !session.id || typeof session === 'undefined') return {}

    log("session");
    log(session)

      const email = "alice@prisma.com"//session?.user?.email;
      const name = "alice"//session?.user?.name;

      return {
        id:"clyaadti70000dops2rsqwffp",
        email:email,
        name:name
      }
}