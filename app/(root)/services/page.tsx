// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion-service"
// import * as React from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
import Image from "next/image"
import { assets, category } from "@/public/assets/assets"
import Cta from "@/components/Cta"

const Services =  () => {

    return (
        <>
        {/* Hero */}
        <section className="w-full h-[30vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center bg-[url(/assets/images/stacked-peaks-05-noise.webp)] dark:bg-[url(/assets/images/stacked-peaks-04-dark-noise.webp)] overflow-hidden select-none">
            <h1 className="text-3xl z-20 md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Our Services
            </h1>
        </section>
        {/* Title */}
        <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] select-none">
            <div className="my-28">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
                        Exceptional Woodwork{" "}
                        <span className="text-primary">Crafted with Passion</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-on-surface-variant">
                        We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time.
                    </p>
                </div>
            </div>
        </section>
        <section className="my-28 select-none">
            {/* 01 */}
            <div className="mt-20" id="service-01">
                <div className="w-full h-[10vh] md:h-[20vh] flex items-center justify-center bg-cover bg-center bg-[url(/assets/images/stacked-peaks-05-noise.webp)] dark:bg-[url(/assets/images/stacked-peaks-04-dark-noise.webp)] overflow-hidden">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">
                        01 SERVICE
                    </h2>
                </div>
                <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
                    <div className="my-10">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3">
                        Building Stronger Communities
                        </h2>
                        <p className="max-w-lg text-md text-foreground/70">
                        We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time.
                        </p>
                    </div>
                    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(96px,2fr))] gap-4 place-items-center justify-center place-content-center">
                        {category.map((item, index) => (
                            <div className="max-w-24 aspect-3/4 " key={index}>
                                <Image src={item.image} alt="wood" className="w-full aspect-3/4 object-cover"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* 02 */}
            <div className="mt-20" id="service-02">
                <div className="w-full h-[10vh] md:h-[20vh] flex items-center justify-center bg-cover bg-center bg-[url(/assets/images/stacked-peaks-05-noise.webp)] dark:bg-[url(/assets/images/stacked-peaks-04-dark-noise.webp)] overflow-hidden">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">
                        02 SERVICE
                    </h2>
                </div>
                <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
                    <div className="my-10">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3">
                        Building Stronger Communities
                        </h2>
                        <p className="max-w-lg text-md text-foreground/70">
                        We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time.
                        </p>
                    </div>
                    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(96px,2fr))] gap-4 place-items-center justify-center place-content-center">
                        {category.map((item, index) => (
                            <div className="w-24" key={index}>
                                <Image src={item.image} alt="wood" className=" aspect-3/4 object-cover"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* 03 */}
            <div className="mt-20" id="service-03">
                <div className="w-full h-[10vh] md:h-[20vh] flex items-center justify-center bg-cover bg-center bg-[url(/assets/images/stacked-peaks-05-noise.webp)] dark:bg-[url(/assets/images/stacked-peaks-04-dark-noise.webp)] overflow-hidden">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">
                        03 SERVICE
                    </h2>
                </div>
                <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
                    <div className="my-10">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3">
                        Building Stronger Communities
                        </h2>
                        <p className="max-w-lg text-md text-foreground/70">
                        We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time.
                        </p>
                    </div>
                    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(96px,2fr))] gap-4 place-items-center justify-center place-content-center">
                        {category.map((item, index) => (
                            <div className="w-24" key={index}>
                                <Image src={item.image} alt="wood" className=" aspect-3/4 object-cover"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* 04 */}
            <div className="mt-20" id="service-04">
                <div className="w-full h-[10vh] md:h-[20vh] flex items-center justify-center bg-cover bg-center bg-[url(/assets/images/stacked-peaks-05-noise.webp)] dark:bg-[url(/assets/images/stacked-peaks-04-dark-noise.webp)] overflow-hidden">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">
                        04 SERVICE
                    </h2>
                </div>
                <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
                    <div className="my-10">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3">
                        Building Stronger Communities
                        </h2>
                        <p className="max-w-lg text-md text-foreground/70">
                        We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time.
                        </p>
                    </div>
                    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(96px,2fr))] gap-4 place-items-center justify-center place-content-center">
                        {category.map((item, index) => (
                            <div className="w-24" key={index}>
                                <Image src={item.image} alt="wood" className=" aspect-3/4 object-cover"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        <Cta/>
        </>
    )
}

export default Services