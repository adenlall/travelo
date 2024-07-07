import { signIn } from "../../lib/auth"

 export function GitHub() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github",{ redirectTo: "/api/session" })
      }}
    >
      <button type="submit">GitHub</button>
    </form>
  )
}