import {logo} from "@/public";
import Image from "next/image";
import {navbarItems} from "@/constants";
import {useState} from "react";
import {motion} from "motion/react";
import Link from "next/link";

export default function MobileNav() {
    const [isShow, setIsShow] = useState(false)
    return (
        <div className={"block md:hidden w-full h-fit fixed top-0 z-[999] bg-[--white]"}>
            <div
                className={"w-[95%] mx-auto py-[1rem] flex flex-row justify-between items-center"}>
                <Link href={"/"}>
                    <Image className={"w-[10rem] "} loading={"lazy"} src={logo} alt="quangngx logo"/>
                </Link>
                <div
                    onClick={() => {
                        setIsShow(!isShow);
                    }}
                    className={"flex flex-col gap-[3px]"}>
                    <div className={"w-[22px] h-[3px] bg-black"}></div>
                    <div className={"w-[22px] h-[3px] bg-black"}></div>
                    <div className={"w-[22px] h-[3px] bg-black"}></div>
                </div>
            </div>
            <motion.div
                className={"nav-overlay"}
                layout={true}
                animate={{
                    display: isShow ? "block" : "none",
                }}
            >
                <motion.div
                    layout={true}
                    animate={{
                        translateY: isShow ? 0 : "-100%",
                        transformOrigin: "top",
                        transformStyle: "preserve-3d",
                    }}
                    transition={{
                        ease: "easeInOut"
                    }}
                    className={"expanded-nav w-[95%] flex flex-col gap-[0.5em] mx-auto text-[1.25em] tracking-[-.08em] leading-[1] font-medium py-[.5em] uppercase"}>
                    {navbarItems.map((item) => (
                        <Link key={item.id} href={item.href}>
                            <div
                                className={"mobile-nav-item"}
                            >
                                {item.title}
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

