import {ProjectGalleryItem} from "@/components/Utilities/project";
import {useState} from "react";
import {Modal} from "@/components/Utilities/modal";
import {projectsGallery} from "@/constants";
import {PrimaryButton} from "@/components";


export default function Projects() {
    const [modal, setModal] = useState({active: false, index: 0})
    return (
        <div>
            <section className={"relative max-w-[95%] mx-auto uppercase pt-[3em] md:pt-[5em] "}>
                <div className={"flex justify-between items-end "}>
                    <h2 className="font-anton text-[2.5em] xl:text-[4.5em] tracking-[-.04em] leading-[0.95] ">
                        My Recent Work
                    </h2>
                </div>
                <div className={"mt-[2rem]"}>
                    {projectsGallery.slice(1, 6).map((project, index) => (
                        <div key={index}>
                            <ProjectGalleryItem
                                index={index}
                                title={project.title}
                                role={project.role}
                                time={project.time}
                                href={project.href}
                                setModal={setModal} key={index}/>
                            <Modal modal={modal} projects={projectsGallery.slice(1, 6)}/>
                        </div>
                    ))}
                </div>
                <div className={"flex justify-end pt-[2em]"}>
                    <PrimaryButton title={"More"} href={"/portfolio"}/>
                </div>
            </section>
        </div>
    );
}


