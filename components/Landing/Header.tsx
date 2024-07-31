import Travelo from "@/public/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <h1
        className="mt-6 flex md:flex-row flex-col items-center justify-center gap-2 py-6 border-y text-center text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.5),transparent)1] md:text-6xl"
      >
          <Image
              className="w-20"
              src={Travelo}
              width={100}
              height={100}
              alt="Logo 01"
          />
        Making trips enjoyable
      </h1>
      {/*<div className="mx-auto max-w-3xl">*/}
      {/*  <p*/}
      {/*    className="my-4 text-lg text-center text-foreground/80"*/}
      {/*  >*/}
      {/*    Travelos is a platform that connects travelers with potential trip companions and local guides.*/}
      {/*    It allows users to find and connect with other like-minded individuals to share travel experiences,*/}
      {/*    explore destinations together, and gain insider knowledge from local experts.*/}
      {/*  </p>*/}
      {/*</div>*/}
    </>
  )
}