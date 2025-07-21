"use client"
import dynamic from "next/dynamic";
import * as animation from "../../public/login-animation.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Animation() {
    // Creează o copie a obiectului JSON
    const animationData = JSON.parse(JSON.stringify(animation));

    return (
        <>
            <Lottie
                animationData={animationData}
                loop={true}
                className="absolute inset-0 h-full rounded-3xl w-full object-cover dark:brightness-[0.7]"
            />
        </>
    );
}