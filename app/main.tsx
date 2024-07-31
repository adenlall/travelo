"use client";

import {SerializablePreloadedQuery} from "../relay/loadSerializableQuery"
import MainViewQueryGraphql, {MainViewQuery} from "../__generated__/MainViewQuery.graphql"
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {useRelayEnvironment} from "react-relay";
import useSerializablePreloadedQuery from "../relay/useSerializablePreloadedQuery"
import HeroHome from "@/components/Landing/Hero"
import Header from "@/components/Landing/Header"
import ImageHeader from "@/components/Landing/ImageHeader";
import CompassTracker from "@/components/Landing/CompassTracker";
import {Features} from "@/components/Landing/Features";
import Footer from "@/components/Guest/Footer";

const Main = (props: {
    preloadedQuery: SerializablePreloadedQuery<
        typeof MainViewQueryGraphql,
        MainViewQuery
    >;
}) => {
    const environment = useRelayEnvironment();
    const queryRef = useSerializablePreloadedQuery(
        environment,
        props.preloadedQuery
    );

    return <div className={"h-auto"}>

        <Parallax pages={undefined as any} style={{top: '0', left: '0', background: '#fffdfe'}}>

            <ParallaxLayer offset={0} speed={1.2}>
                <ImageHeader classNameContainer={"h-screen w-full flex items-end"} className={"w-full h-full"}
                             res={{w: 1000, h: 500}} src={"/_assets/home/ocien-blue-dark.jpeg"}/>
            </ParallaxLayer>

            <ParallaxLayer offset={0.1} speed={0}>
                <Header/>
                {/*<GetStarted/>*/}
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.5}>
                <ImageHeader classNameContainer={"h-[90vh] w-full flex items-end"} className={"h-auto w-full"}
                             res={{w: 880, h: 300}} src={"/_assets/home/mountain-transparent-1.png"}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.9}>
                <ImageHeader classNameContainer={"h-screen flex items-end"} className={"h-auto w-full"}
                             res={{w: 1320, h: 480}} src={"/_assets/home/mountain-transparent-2.png"}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
                <div className={"absolute top-0 w-full h-full"}
                     style={{background: 'linear-gradient(0, #fefcfb 5%, transparent 40%)'}}/>
                <ImageHeader classNameContainer={"h-screen flex items-end"} className={"h-auto w-full"}
                             res={{w: 1320, h: 480}} src={"/_assets/home/mountain-transparent-3.png"}/>
            </ParallaxLayer>

            <ParallaxLayer offset={1} style={{zIndex: -1}} speed={0.1}>
                <div className={"absolute top-0 w-full h-full"}
                     style={{background: 'linear-gradient(0deg, transparent, rgb(254, 252, 251) 86%)'}}/>
                <ImageHeader classNameContainer={"w-full flex items-end"} className={"w-full h-full"}
                             res={{w: 1000, h: 500}} src={"/_assets/home/blue.webp"}/>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={1}>

                <h2
                    className="mt-6 py-6 border-y text-center text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.5),transparent)1] md:text-6xl"
                >
                    Any Place, Any Time
                </h2>
            </ParallaxLayer>

            <ParallaxLayer offset={1.3} speed={.5}>
                <HeroHome/>
            </ParallaxLayer>
            <div className={"mt-[200vh]"}>
                <CompassTracker/>
                <Features/>
                <Footer/>
            </div>
        </Parallax>
        {/*<MainView queryRef={queryRef}/>;*/}
    </div>
};

export default (props: any) => {
    return <Main {...props}/>

};