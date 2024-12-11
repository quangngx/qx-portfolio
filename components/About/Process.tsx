import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa6";
import { myProcess } from "@/constants";
import { useState } from "react";

export const MyProcess = () => {
    // State to manage which card is opened
    const [openedCardIndex, setOpenedCardIndex] = useState<number | null>(null);

    const toggleCard = (index: number) => {
        setOpenedCardIndex(openedCardIndex === index ? null : index);
    };

    return (
        <section className="relative max-w-[95%] mx-auto flex flex-col lg:flex-row lg:gap-4 py-[2em]">
            {/* Left Section */}
            <div className="lg:basis-[40%]">
                <h2 className="uppercase text-[2.5em] font-anton tracking-[-.0475em] leading-[0.94] xl:text-[4.5em] lg:font-medium">
                    Work Process
                </h2>
                <p className="py-[16px] paragraph-1-5em">
                    Take a look at my professional experience, showcasing the key roles and skills that have shaped my creative journey.
                </p>
            </div>

            {/* Right Section */}
            <div className="lg:basis-[60%] flex flex-col gap-1">
                {myProcess.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => toggleCard(index)}
                        className="card bg-[--bg-grey] p-4 cursor-pointer"
                    >
                        <motion.div
                            animate={{
                                gap: openedCardIndex === index ? "16px" : "0px",
                            }}
                            className="flex flex-col"
                        >
                            {/* Header Section */}
                            <div className="flex justify-between items-center">
                                <div className="all-caps-paragraph-2em">{item.title}</div>
                                <motion.div
                                    animate={{
                                        rotate: openedCardIndex === index ? 90 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FaArrowRight className="h-[90%]" />
                                </motion.div>
                            </div>

                            {/* Description Section */}
                            <motion.div
                                initial={false}
                                animate={{
                                    height: openedCardIndex === index ? "auto" : "0px",
                                    opacity: openedCardIndex === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden paragraph-1-5em"
                            >
                                {item.description}
                            </motion.div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};
