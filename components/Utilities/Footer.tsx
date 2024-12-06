import Image from "next/image";
import logo from "../../public/quangngx.svg";
import Link from "next/link";
export default function Footer() {
  return (
    <section className="max-w-[95%] mx-auto pb-[24px] pt-[40px]">
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
            <div className="flex flex-col lg:flex-row sm:items-start lg:items-end justify-center items-center gap-2">
                <Link href={'/'} >
                    <Image className={"h-[40px] w-fit"} src={logo} alt={"quangngx logo"}/>
                </Link>
                <p className={"font-switzer font-semibold text-[1em] "}>DEVELOPED BY @quangngx </p>
            </div>
          <div className={"flex flex-col sm:flex-row sm:justify-start gap-4 justify-center items-center font-switzer uppercase font-semibold text-[1em]"}>
              <Link href={"/about"}>About</Link>
              <Link href={"/portfolio"}>Portfolio</Link>
              <Link href={"/contact"}>Contact</Link>
          </div>
      </div>
    </section>
  );
}
