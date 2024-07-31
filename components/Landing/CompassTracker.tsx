import CompassIcon from "@/components/Misc/CompassIcon";
import {Button} from "@/components/ui/button";

export default function CompassTracker() {
    return <div className="outline bg-background w-[90%] m-auto rounded-lg h-auto my-4">
        <div
            className={"hidden md:grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 p-4 w-full "}>
            {
                Array((8 * 2)).fill(0).map((item, i) => (
                    <CompassIcon key={crypto.randomUUID()} index={i}/>
                ))
            }
        </div>
        <div className={"w-full flex md:flex-row flex-col gap-4 items-center justify-center"}>
            <div
                className={"flex items-center justify-center md:grid grid-cols-3 gap-4 w-full "}>
                {
                    Array((3 * 2)).fill(0).map((item, i) => (
                        <CompassIcon key={crypto.randomUUID()} index={i}/>
                    ))
                }
            </div>
            <div className={"w-full flex items-center justify-center flex-col gap-4"}>
                <h1 className={"text-4xl font-bold w-full text-center"}>
                    Get Started
                </h1>
                <p className={"space-x-2"}>
                    <Button>Register</Button>
                    <Button variant={"outline"}>Learn More</Button>
                </p>
            </div>
            <div
                className={"flex items-center justify-center md:grid grid-cols-3 gap-4 w-full "}>
                {
                    Array((3 * 2)).fill(0).map((item, i) => (
                        <CompassIcon key={crypto.randomUUID()} index={i}/>
                    ))
                }
            </div>
        </div>
        <div
            className={"hidden md:grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 p-4 w-full "}>
            {
                Array((8 * 2)).fill(0).map((item, i) => (
                    <CompassIcon key={crypto.randomUUID()} index={i}/>
                ))
            }
        </div>
    </div>
}