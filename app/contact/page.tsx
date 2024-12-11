"use client";
import Navbar from "@/components/Utilities/NavBar";
import {Footer} from "@/components";
import Image from "next/image";
import {handshake} from "@/public";
import useMousePosition from "@/components/Utilities/mouse/Mouse";
import {motion} from "motion/react";
import React, {useState} from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const {x, y} = useMousePosition();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "", // Service ID from env
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "", // Template ID from env
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "" // Public User ID from env
            );
            setStatus("sent");
            setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
        } catch (error) {
            console.error("Email sending failed:", error);
            setStatus("error");
        }
    };

    return (
        <>
            {/* Mouse Following Effect */}
            <motion.div
                className="pointer-events-none z-50"
                style={{
                    position: "fixed",
                    width: `20px`,
                    height: `20px`,
                    borderRadius: "50%",
                    backgroundColor: "black",
                    transform: "translate(-50%, -50%)",
                }}
                animate={{
                    x: x,
                    y: y,
                }}
                transition={{type: "tween", ease: "backOut"}}
            />
            <Navbar/>
            <section className="max-w-[95%] mx-auto min-h-[90vh] pt-[5em] md:pt-[10em] content-center">
                <div className="flex flex-col xl:flex-row gap-[3em] justify-center content-center">
                    <div className="flex flex-col gap-[2em] basis-[48%]">
                        <div className="flex flex-col gap-4">
                            <h1
                                className="font-anton uppercase leading-[0.94] tracking-[-.04em] text-[3.5em] xl:text-[7.5em]"
                            >
                                Reach Out, Let’s&nbsp;Talk
                            </h1>
                            <p className="uppercase font-semibold leading-[1.05] tracking-[-.065em] text-[1.1em] md:text-[1.25em] xl:text-[1.5em]">
                                Have a project or idea in mind? I’m ready to help make it a
                                reality. Reach out today, and let’s create something amazing
                                together.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-[8px]">
                            <input
                                className="input text-[16px] rounded-[12px] p-[1em] bg-[--bg-grey] text-[--black]"
                                placeholder="Name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                className="text-[16px] rounded-[12px] p-[1em] bg-[--bg-grey] text-[--black]"
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                className="text-[16px] rounded-[12px] p-[1em] bg-[--bg-grey] text-[--black]"
                                placeholder="Phone"
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <input
                                className="text-[16px] rounded-[12px] p-[1em] bg-[--bg-grey] text-[--black]"
                                placeholder="Message"
                                type="text"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <div className="mt-[2em]">
                                <button
                                    type="submit"
                                    className="font-switzer font-medium rounded-[10em] border-[--black] border-[2.5px] sm:border-[3px] w-fit px-[0.4em] py-[0.1em]"
                                    disabled={status === "sending"}
                                >
                                    {status === "sending" ? "Sending..." : "SUBMIT"}
                                </button>
                                {status === "sent" && (
                                    <p className="text-green-500 mt-2">Message sent successfully!</p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-500 mt-2">Failed to send message. Please try again.</p>
                                )}
                            </div>
                        </form>
                    </div>
                    <div className="basis-[45%]">
                        <Image src={handshake} alt="handshake"/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}
