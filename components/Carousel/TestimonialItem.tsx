import { TtestimonialItemProps } from "@/types";
import { BiSolidQuoteLeft } from "react-icons/bi";

export default function TestimonialItem({content, author} : TtestimonialItemProps) {
    return (
        <div className={"min-w-[80%] md:min-w-[60%] lg:min-w-[45%] xl:min-w-[35%]"}>
            <div className="h-full bg-[--bg-grey] flex flex-col gap-[1em] p-[2em] lg:p-[3vw] ">
                <BiSolidQuoteLeft size={30}/>
                <p className=" tracking-[-.055em] text-[1.5em] xl:text-[2vw] leading-[1] font-semibold">
                    {content}
                </p>
                <div className=" flex flex-row uppercase">
                    <div className="text-[1em] text-[--dark-grey] leading-[1.1] font-semibold tracking-[-.065em]">
                        {author}
                    </div>
                    <div className="text-[1em] text-[--dark-grey] leading-[1.1] tracking-[-.065em] semibold">
                        <div className="">Ceo</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
