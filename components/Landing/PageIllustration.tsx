import Image from "next/image";

export default function PageIllustration() {
  return (
    <>
      {/* Stripes illustration */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        {/*<Image*/}
        {/*  className="max-w-none"*/}
        {/*  src={"https://cdn.vectorstock.com/i/1000v/43/94/default-avatar-photo-placeholder-icon-grey-vector-38594394.jpg"}*/}
        {/*  width={768}*/}
        {/*  height={400}*/}
        {/*  alt="Stripes"*/}
        {/*  priority*/}
        {/*/>*/}
      </div>
      {/* Circles */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 ml-[50%] -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-50 blur-[160px]" />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-[30%] ml-[0%] -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[160px]" />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-[40%] ml-[10%] -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[160px]" />
      </div>
    </>
  );
}