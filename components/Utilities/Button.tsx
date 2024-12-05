import {motion} from "motion/react";
import {FaArrowRight} from "react-icons/fa6";
import {TprimaryButtonProps} from "@/types";

export default function PrimaryButton({title, href}: TprimaryButtonProps) {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            transition={{
                duration: 5,
                ease: "easeInOut",
            }}
            className={"lg:border-[--white] lg:text-[1.5em] lg:border-[3px] lg:font-semibold font-medium text-[1.1em] flex flex-row items-center gap-1 rounded-full border-[2px] border-[--black] px-[0.4em] py-[0.2em] w-fit tracking-[-.08em]"}>
            {title}
            <div className={"relative block overflow-hidden w-fit h-fit"}>
                <motion.div
                    className={"relative"}
                    variants={{
                        initial: {
                            x: 0
                        },
                        hovered: {
                            x: "100%"
                        }
                    }}>
                    <FaArrowRight className={" h-[90%]"}/>
                </motion.div>
                <motion.div
                    className={"absolute inset-0"}
                    variants={{
                        initial: {
                            x: "-100%"
                        },
                        hovered: {
                            x: 0
                        }
                    }}>
                    <FaArrowRight className={"h-[90%]"}/>
                </motion.div>
            </div>
        </motion.a>
    );
}