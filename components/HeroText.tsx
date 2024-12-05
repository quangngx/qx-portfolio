import Link from "next/link";

export default function HeroText() {
  return (
    <div
      className="hero mx-auto w-[95%] pt-[15vw] pb-[3w] flex justify-between
      "
    >
      <div className="text-[2.5vw] uppercase font-switzer tracking-[-.07em] font-semibold leading-[1] max-w-[42%]">
        Bringing Your Wildest Creative Visions to Life with a Fresh Perspective
        and a Bold Touch
      </div>
      <div className=" flex flex-col">
        <Link href="/">
          <div className="text-[2vw] uppercase font-semibold tracking-[-.09em] leading-[1]">
            Product Designer
          </div>
        </Link>
        <Link href="/">
          <div className="text-[2vw] uppercase font-semibold tracking-[-.09em] leading-[1]">
            Web Developer
          </div>
        </Link>
        <Link href="/">
          <div className="text-[2vw] uppercase font-semibold tracking-[-.09em] leading-[1]">
            Mobile Developer
          </div>
        </Link>
      </div>
    </div>
  );
}
