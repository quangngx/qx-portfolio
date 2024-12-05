"use client"
import Navbar from "@/components/Utilities/NavBar";
import Testimonials from "@/components/Carousel/Testimonials";
import {projects} from "@/constants";
import {ProjectItem} from "@/animations";
import {Footer} from "@/components";

export default function ProjectsPage() {
    return (
        <>
            <Navbar/>
            <section className={"max-w-[95%] mx-auto place-content-center pt-[8em] lg:pt-[15vw]"}>
                <div className={"flex flex-col gap-[1vw] xl:max-w-[40%]"}>
                    <p className="md:basis-[47%] lg:basis-[50%] uppercase text-[3em] font-anton tracking-[-0.0475em] leading-[0.94] md:text-[3.5em] lg:text-[6vw] ">
                        Portfolio
                    </p>
                    <p className={"md:basis-[40%] xl:basis-[25%] uppercase font-switzer font-semibold leading-[1] tracking-[-.065em] text-[1.25em] xl:text-[1.66vw]"}>
                        Showcasing My Recent Creative Ventures, Achievements, and Innovative Design Projects Across
                        Multiple
                        Platforms
                    </p>
                </div>
                <div className={"grid grid-cols-2 gap-4 py-[2em] xl:py-[3vw]"}>
                    {projects.map((item) => (
                        <ProjectItem key={item.id} title={item.title} href={item.href} img={item.img}/>
                    ))}
                </div>
            </section>
            <Testimonials/>
            <Footer/>
        </>
    );
}