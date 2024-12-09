"use client"
import Navbar from "@/components/Utilities/NavBar";
import {Footer, Services, Testimonials} from "@/components";
import {aboutPhotos} from "@/constants";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div>
            <Navbar/>
            <section className="max-w-[95%] mx-auto pt-[8em] lg:pt-[15vw] ">
                <div className={"flex flex-col gap-4 md:flex-row justify-between md:items-end pb-[3em] md:pb-[5em]"}>
                    <p className="md:basis-[47%] lg:basis-[50%] uppercase text-[3em] font-anton tracking-[-0.0475em] leading-[0.94] md:text-[3.5em] lg:text-[6vw] ">
                        About my creative journey
                    </p>
                    <p className="md:basis-[40%] xl:basis-[25%] all-caps-paragraph-1-5em">
                        Mixing Sharp Skills and Big Ideas to Create Work That Sticks and Success That Lasts.
                    </p>
                </div>
                <div className={" grid grid-cols-3 gap-4"}>
                    {aboutPhotos.map((item) => (
                        // <div key={item.id}
                        //      className={"bg-[--light-grey] h-[30vw] flex justify-center items-center"}>
                        //     <div className={"text-[1.5em] font-semibold font-switzer uppercase"}>
                        //         {item.id}
                        //     </div>
                        // </div>
                        <Image key={item.id} src={item.src} alt={item.att}/>
                    ))}
                </div>
            </section>
            <section className={"relative max-w-[95%] mx-auto py-[3em] md:py-[4rem]"}>
                <h2 className="uppercase text-[2.5em] xl:text-[4.5em] font-anton tracking-[-.0475em] leading-[1] lg:font-medium">
                    Step into my world
                </h2>
                <p className={"pt-[16px] xl:pt-[48px]" +
                    " paragraph-3-5em"}>
                    I’m Quang Nguyễn (@quangngx), a designer and creative developer with 4 years of turning big ideas
                    into things that actually look and work great. From designs that catch eyes to interactions that
                    feel just right, I make sure every project stands out—and doesn’t put anyone to sleep.
                </p>
            </section>
            <Services/>
            <section className="relative max-w-[95%] mx-auto flex flex-col ">
                <div className={""}>
                    <h2 className="uppercase text-[2.5em] font-anton tracking-[-.0475em] leading-[0.94] xl:text-[4.5em] lg:font-medium">
                        Work Process
                    </h2>
                    <p className={"py-[16px] paragraph-1-5em"}>
                        Take a look at my professional experience, showcasing the
                        key roles and skills that have shaped my creative journey.
                    </p>
                </div>
            </section>
            <Testimonials/>
            <Footer/>
        </div>
    );
}