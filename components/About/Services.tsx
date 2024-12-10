import {motion} from "motion/react";
import {services} from "@/constants";
import contactImage from "@/public/contact-image.webp";
import Image from "next/image";

export const Services = () => {
    return (
        <section className={"relative max-w-[95%] mx-auto py-[5em]"}>
            <h2 className="uppercase text-[2.5em] font-anton tracking-[-.0475em] leading-[0.94] xl:text-[4.5em] lg:font-medium">
                What I do, my services
            </h2>
            <div className={" relative grid grid-cols-1 md:grid-cols-3 gap-4 mt-[3vw]"}>
                {services.map((item) => (
                    <motion.div
                        className={"hidden lg:block"}
                        key={item.id}
                        initial="initial"
                        whileHover="hovered"
                    >
                        <div>
                            <div
                                className={" relative text-[1.5em] h-full font-semibold font-switzer uppercase"}>
                                <motion.div
                                    variants={{
                                        hovered: {
                                            opacity: 0
                                        }
                                    }}
                                    className={"mask absolute z-30 h-full w-full bg-[--light-grey]"}>
                                </motion.div>
                                <motion.div
                                    variants={{
                                        hovered: {
                                            color: "white"
                                        }
                                    }}
                                    className={"absolute z-40 w-full h-full flex justify-center items-center"}>
                                    {item.title}

                                </motion.div>
                                <motion.div
                                    variants={{
                                        hovered: {
                                            opacity: 1
                                        }
                                    }}
                                    style={{
                                        opacity: 0
                                    }}
                                >
                                    <Image src={item.src} alt={"quangngx"}/>
                                </motion.div>

                            </div>
                        </div>
                        <motion.div
                            className={
                                "py-[16px] font-semibold text-[1.125em] sm:text-[1.25em] lg:text-[2rem] leading-[1.05] tracking-[-0.06em]"
                            }
                            transition={{
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            animate={{
                                transformOrigin: "top",
                                transformStyle: "preserve-3d",
                            }}
                            variants={{
                                initial: {
                                    display: "none",
                                    rotateX: "90deg"
                                },
                                hovered: {
                                    display: "block",
                                    rotateX: 0
                                }
                            }}
                        >
                            {item.description}
                        </motion.div>
                    </motion.div>
                ))}
                {services.map((item) => (
                    <div key={item.id} className={"lg:hidden"}>
                        <div className={"relative"}>
                            <Image src={item.src} width={300} height={300} alt={item.title}/>
                            <div className={"absolute z-40  bottom-0 p-2 bg-[--white]"}>
                                <p className={"all-caps-paragraph-1-5em"}>{item.title}</p>
                            </div>
                        </div>
                        <p
                            className={"py-[16px] paragraph-1-5em"}
                        >{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}