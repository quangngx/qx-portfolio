import {TextHover} from "@/animations";
import {navbarItems} from "@/constants";
import {navVariants} from "@/motions";
import {logo} from "@/public";
import {motion, useMotionValueEvent, useScroll, useTransform} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import MobileNav from "./MobileNav";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const {scrollY} = useScroll();

    // useMotionValueEvent(scrollY, "change", (latest) => {
    //     const previous = scrollY.getPrevious();
    //     if (previous && latest > previous) {
    //         setHidden(true);
    //     } else {
    //         setHidden(false);
    //     }
    // });

    const logoWidth = useTransform(
        scrollY,
        [0, 300], // Input range: 0 to 300px of scroll
        ["32vw", "11.5vw"] // Output range: 32vh to 11.5vh
    );

    return (
        <>
            <motion.nav
                variants={navVariants}
                className="w-full fixed top-0 z-[999] py-4  backdrop-blur md:backdrop-blur-0 "
            >
                <div className="w-[95%] mx-auto flex items-center justify-between lg:items-start">
                    <div className="">
                        <Link href={"/"}>
                            <motion.div style={{width: logoWidth}} transition={{ease: [0.25, 1, 0.5, 1]}}>
                                {/*<Image className="w-[150px] md:w-[170px] lg:w-[32vw] " src={logo} alt="quangngx logo"/>*/}
                                {/* <Image className="" src={logo} alt="quangngx logo"/> */}
                                <Image className={"w-full"} loading={"lazy"} src={logo} alt="quangngx logo"/>
                                
                            </motion.div>
                        </Link>
                    </div>
                    <div className="flex gap-x-1 uppercase font-switzer leading-[1] text-[--orange]">
                        {navbarItems.map((item) => (
                            <Link
                                key={item.id}
                                className={`w-fit font-semibold flex flex-col border-[2px] lg:border-[3px]
                                 border-[--orange] rounded-full text-[1.25em] lg:text-[1.5em] px-[0.4em] py-1 tracking-tight`}
                                href={item.href}
                            >
                                <TextHover title1={item.title} title2={item.title}/>
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.nav>
            <MobileNav/>
        </>
    );
}
