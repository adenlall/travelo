import Image from "next/image";
import Travelo from "@/public/logo.png"
import Link from "next/link";
import {cn} from "@/lib/utils";

import "@/styles/footer.css";


const BASE_LINK =
    "flex m-auto outline outline-primary items-center justify-center h-full md:w-[14em] w-[10em] rounded-lg font-bold";
const SPAN_NAME =
    "text-3xl font-extrabold";
export default function Footer() {

    return<footer className={"flex flex-col md:flex-row bg-primary/80 text-primary-foreground p-4 items-center justify-between"}>
        <div className={"h-[17em] grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-2 grid-rows-3 gap-4"}>

            <Link
                href={"/"}
                className={cn(
                    BASE_LINK,
                    "text-white hover:bg-yellow-300 bg-yellow-200",
                    "bg-custom-mountain bg-custom-grid bg-custom-bg-color",
                    "footer-home-item"
                )}
            >
                <span className={cn(SPAN_NAME,"text-white drop-shadow-lg shadow-red-600")}>
                HOME
                </span>
            </Link>
            <Link
                href={"/"}
                className={cn(
                    BASE_LINK,
                    "text-emerald-200 hover:bg-emerald-300 bg-emerald-200",
                    "footer-about-item"
                )}
            >
                <span className={cn(SPAN_NAME,"text-white drop-shadow-lg shadow-red-600")}>
                About Us
                </span>
            </Link>
            <Link
                href={"/"}
                className={cn(
                    BASE_LINK,
                    "text-red-900 hover:bg-red-300 bg-red-200",
                    "footer-faq-item"
                )}
            >
                <span className={cn(SPAN_NAME,"text-white drop-shadow-lg shadow-red-600")}>
                FAQ
                </span>
            </Link>
            <Link
                href={"/"}
                className={cn(
                    BASE_LINK,
                    "text-blue-900 hover:bg-blue-300 bg-blue-200",
                    "footer-features-item"
                )}
            >
                <span className={cn(SPAN_NAME,"text-white drop-shadow-lg shadow-red-600")}>
                Features
                </span>
            </Link>
            <Link
                href={"/"}
                className={cn(
                    BASE_LINK,
                    "text-fuchsia-900 hover:bg-fuchsia-300 bg-fuchsia-200",
                    "footer-contact-item"
                )}
            >
                <span className={cn(SPAN_NAME,"text-white drop-shadow-lg shadow-red-600")}>
                Contact
                </span>
            </Link>
            <Link
                href={"/"}
                className={cn(
                    BASE_LINK,
                    "text-violet-900 hover:bg-violet-300 bg-violet-200",
                    "footer-register-item"
                )}
            >
                <span className={cn(SPAN_NAME,"text-white drop-shadow-lg shadow-red-600")}>
                Register
                </span>
            </Link>
        </div>
        <div className={"bg-primary p-4 h-full flex flex-col items-center justify-center md:w-auto w-full md:m-0 m-4 rounded-lg"}>
            <Image
                className="w-32 md:w-[100%] md:h-[100%]"
                src={Travelo}
                width={100}
                height={100}
                alt="Logo 01"
            />
            <h4 className={"font-bold text-3xl text-center"}>Travelos</h4>
            <p className={"text-sm"}>all rights reserved <Link href={"https://janahbilal.vercel.app"}>@adenlall</Link></p>
        </div>
    </footer>
}