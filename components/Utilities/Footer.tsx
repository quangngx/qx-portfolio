import Image from "next/image";
import logo from "../../public/quangngx.svg";
import Link from "next/link";
import {FaLinkedin, FaSquareInstagram} from "react-icons/fa6";

export default function Footer() {
    return (
        <section className="max-w-[95%] mx-auto pb-[24px] pt-[40px]">
            <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-8">
                <div
                    className="flex flex-col lg:flex-row sm:items-start lg:items-end justify-center items-center gap-2">
                    <Link href={'/'}>
                        <Image className={"h-[40px] w-fit"} src={logo} alt={"quangngx logo"}/>
                    </Link>
                    <p className={"font-switzer font-semibold text-[1em] "}>DEVELOPED BY @quangngx </p>
                </div>
                <div
                    className={"flex flex-col sm:flex-row sm:justify-between gap-4 justify-center items-center sm:items-end"}>
                    <div className={" flex gap-2 font-switzer uppercase font-semibold text-[1em]"}>
                        <Link href={"/about"}>About</Link>
                        <Link href={"/portfolio"}>Portfolio</Link>
                        <Link href={"/contact"}>Contact</Link>
                    </div>
                    <div className={"flex gap-2"}>
                        <Link href={"https://www.instagram.com/quang.ngx/"}>
                            <FaSquareInstagram
                                size={32}
                                style={{
                                    color: "#e65300"
                                }}/>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/quangngx/"}>
                            <FaLinkedin
                                size={32}
                                style={{
                                    color: "#e65300"
                                }}/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
