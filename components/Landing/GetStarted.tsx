import { Button } from "@/components/ui/button"

export default function GetStarted() {
  return (
    <div
      className="mx-auto space-x-2 py-8 max-w-xs sm:flex sm:max-w-none sm:justify-center"
    >
      <Button>Get started</Button>
      <Button variant={"secondary"}>Learn More</Button>
    </div>
  )
}