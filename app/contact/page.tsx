"use client"
import Navbar from "@/components/Utilities/NavBar";
import {Footer} from "@/components";
import Image from "next/image";
import {handshake} from "@/public";

export default function ContactPage() {
    return (
        <>
            <Navbar/>
            <section className={" max-w-[95%] mx-auto min-h-[90vh] pt-[15em] content-center"}>
                <div className={"flex flex-col xl:flex-row gap-[3em] justify-center content-center"}>
                    <div className={"flex flex-col gap-[2em] basis-[48%]"}>
                        <div className={"flex flex-col gap-4"}>
                            <h1 className={"font-anton uppercase leading-[0.94] tracking-[-.04em] text-[3.5em] xl:text-[7.5em]"}
                            >Reach Out, Let’s&nbsp;Talk</h1>
                            <p className={"uppercase font-semibold leading-[1.05] tracking-[-.065em] text-[1.1em] md:text-[1.25em] xl:text-[1.5em]"}>
                                Have a project or idea in mind? I’m ready to help make it a reality.
                                Reach out today, and let’s
                                create something amazing together.</p>
                        </div>
                        <div className={"flex flex-col gap-[8px]"}>
                            <input className={"input text-[16px] rounded-[12px] p-[1em] bg-[--bg-grey] text-[--black]"}
                                   placeholder={"Name"} type="text"/>
                            <input className={"text-[16px] rounded-[12px] p-[1em] bg-[--bg-grey] text-[--black]"}
                                   placeholder={"Email"} type="email"/>
                            <input className={"text-[16px] rounded-[12px] p-[1em] bg-[--bg-grey] text-[--black]"}
                                   placeholder={"Phone"} type="tel"/>
                            <input className={"text-[16px] rounded-[12px] p-[1em] bg-[--bg-grey] text-[--black]"}
                                   placeholder={"Messages"} type="text"/>
                            <div className={"mt-[2em]"}>
                                <button type={"submit"}
                                        className={"font-switzer font-medium rounded-[10em] border-[--black] border-[2.5px] sm:border-[3px] w-fit px-[0.4em] py-[0.1em]"}>
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={"basis-[45%] "}>
                        <Image src={handshake} alt={"handshake"}/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}