import {hero} from "@/public";
import Image from "next/image";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa6";
import {services} from "@/constants";
import {PrimaryButton} from "@/components";

export default function Hero() {
    return (
        <section className="max-w-[95%] mx-auto lg:max-w-[100%] leading-[1] uppercase pt-[8em] lg:pt-[15vw] ">
            <div className="flex flex-col gap-[1em] lg:gap-[3vw]">
                <div className="lg:max-w-[95%] lg:mx-auto flex flex-col justify-between gap-[2em] sm:flex-row">
                    <div className="basis-[55%] md:basis-[50%] lg:basis-[40%] lg:max-w-[40%] ">
                        <p className="text-[1.5em] lg:text-[2.5vw] font-semibold tracking-[-.07em]">
                            Bringing Your Wildest Creative Visions to Life with a Fresh
                            Perspective and a Bold Touch
                        </p>
                    </div>
                    <div
                        className="flex flex-col text-[1.1em] lg:text-[2vw] tracking-tighter font-semibold gap-[8px] ">
                        {services.map((item) => (
                            <Link key={item.id}
                                  href={item.href}
                                  className="flex flex-row items-center justify-between sm:justify-start gap-2">
                                <div>{item.title}</div>
                                <FaArrowRight className={"h-[90%]"}/>
                            </Link>
                        ))}
                    </div>
                </div>
                <div
                    className="flex flex-col gap-[2em] lg:justify-center lg:content-center min-h-[auto] lg:min-h-[85vh]">
                    <div className="relative aspect-[16/9]">
                        <Image
                            className="w-[100%] h-[100%] object-cover lg:min-h-[85vh]"
                            src={hero}
                            alt="hero image"
                        />
                    </div>
                    <div className=" lg:absolute">
                        <div className="block lg:max-w-[95%] mx-auto">
                            <div className="lg:max-w-[50%] lg:text-[--white] flex flex-col gap-[1em]">
                                <p className="text-[3em] font-anton tracking-[-.0475em] leading-[0.94] md:text-[3.5em] lg:text-[6vw] lg:font-medium">
                                    A Glimpse Into What Fuels My Vision & Inspires my Projects
                                </p>
                                <PrimaryButton title={"Discover More"} href={"/contact"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
