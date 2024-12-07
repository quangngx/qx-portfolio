import React, {useCallback} from 'react'
import {EmblaCarouselType} from 'embla-carousel'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './CarouselButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import {testimonials} from "@/constants";
import TestimonialItem from "@/components/Carousel/TestimonialItem";

const Testtimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({align: 'start', dragFree: true, loop: true}, [Autoplay()])

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        resetOrStop()
    }, [])

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick)

    return (
        <section className="max-w-[95%] mx-auto ">
            <div className={"flex justify-between items-center mb-[32px]"}>
                <h2
                    className="all-caps-paragraph-1-5em text-center ">
                    Testimonials
                </h2>
                <div className="embla__controls">
                    <div className="embla__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden pb-[48px] md:pb-[80px]" ref={emblaRef}>
                <div className="embla__container relative flex flex-row gap-2">
                    {testimonials.map((index) => (
                        <TestimonialItem key={index.id} author={index.name} content={index.content} position={''}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testtimonials
