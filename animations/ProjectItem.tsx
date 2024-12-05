import Image, {StaticImageData} from "next/image";
import {motion} from "motion/react";

export const ProjectItem = ({title, href, img}: { title: string; href: string; img: string | StaticImageData }) => {
    return (
        <motion.a
            initial="initital"
            whileHover="hovered"
            transition={{
                duration: 1,
                ease: "easeInOut",
            }}
            className={"relative"}
            href={href}>
            <motion.div
                variants={{
                    initial: {
                        opacity: 0,
                        rotateX: "90deg"
                    },
                    hovered: {
                        display: "flex",
                        rotateX: 0
                    }
                }}
                className={"hidden w-full h-full  justify-center items-center align-middle absolute uppercase font-anton tracking-[-0.005em] text-[6vw] leading-[1]"}>
                <div>
                    {title}
                </div>
            </motion.div>
            <motion.div
                variants={{
                    initial: {
                        opacity: 1,
                    },
                    hovered: {
                        opacity: 0,
                    }
                }}
            >
                <Image src={img} alt={"Project Image"}/>
            </motion.div>
        </motion.a>
    );
}