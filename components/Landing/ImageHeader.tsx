import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Image from "next/image";

export default function ImageHeader({alt, classNameContainer ,src, className="w-full", res}:
{
    src: string,
    className?: string,
    alt?: string,
    classNameContainer?: string,
    res: {
        w: number,
        h: number,
    }
}) {
    return <div className={classNameContainer}>
        <Image
            src={src}
            className={className}
            alt={alt??""}
            width={res.w}
            height={res.h}
        />
    </div>
}