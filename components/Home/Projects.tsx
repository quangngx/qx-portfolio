import {ProjectGalleryItem} from "@/components/Utilities/project";
import {useState} from "react";
import {Modal} from "@/components/Utilities/modal";
import {projectsGallery} from "@/constants";


export default function Projects() {
    const [modal, setModal] = useState({active: false, index: 0})
    return (
        <div>
            {/*<section className="max-w-[95%] mx-auto uppercase py-[3em] md:py-[5em] ">*/}
            {/*    <h2 className="font-anton text-[2.5em] xl:text-[4.5em] tracking-[-.04em] leading-[0.95] ">*/}
            {/*        My Recent Work*/}
            {/*    </h2>*/}
            {/*    <div className={"grid grid-cols-2 gap-4 pt-[2em] xl:pt-[3vw]"}>*/}
            {/*        {projects.map((item) => (*/}
            {/*            <ProjectItem key={item.id.toString()} title={item.title} href={item.href} img={item.img}/>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</section>*/}
            <section className={"max-w-[95%] mx-auto uppercase pt-[3em] md:pt-[5em] "}>
                <h2 className="font-anton text-[2.5em] xl:text-[4.5em] tracking-[-.04em] leading-[0.95] ">
                    My Recent Work
                </h2>
                <div className={"mt-[2rem]"}>
                    {projectsGallery.slice(0, 4).map((project, index) => (
                        <div key={index}>
                            <ProjectGalleryItem
                                index={index}
                                title={project.title}
                                role={project.role}
                                time={project.time}
                                setModal={setModal} key={index}/>
                            <Modal modal={modal} projects={projectsGallery}/>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}


