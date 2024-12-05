import {projects} from "@/constants";
import {ProjectItem} from "@/animations";

export default function Projects() {
    return (
        <section className="max-w-[95%] mx-auto uppercase py-[3em] md:py-[5em] ">
            <h2 className="font-anton text-[2.5em] xl:text-[4.5em] tracking-[-.04em] leading-[0.95] ">
                My Recent Work
            </h2>
            <div className={"grid grid-cols-2 gap-4 pt-[2em] xl:pt-[3vw]"}>
                {projects.map((item) => (
                    <ProjectItem key={item.id.toString()} title={item.title} href={item.href} img={item.img}/>
                ))}
            </div>
        </section>
    );
}


