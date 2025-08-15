import Cta from "@/components/Cta"
import Faq from "@/components/Faq"
import WhyChooseUs from "@/components/WhyChooseUs"


const About =  () => {

    return (
        <>
        {/* Hero */}
        <section className="w-full h-[30vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center bg-[url(/assets/images/stacked-peaks-05-noise.webp)] dark:bg-[url(/assets/images/stacked-peaks-04-dark-noise.webp)] overflow-hidden">
            <h1 className="text-3xl z-20 md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                About Us
            </h1>
        </section>
        {/* Title */}
        <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
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
        {/* Working process */}
        <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-16 bg-cover dark:bg-center bg-[url(/assets/images/blur-bg-01.png)] dark:bg-[url(/assets/images/stacked-steps-01-dark-blur.webp)]">
            <div className="w-full flex items-center justify-center">
                <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground border text-sm font-medium mb-4">
                    Our process
                </span>
            </div>
            <div className="my-16 flex flex-col items-center gap-14">
                <div className="w-full justify-between items-center gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col max-lg:text-center justify-start lg:items-start items-center gap-2 inline-flex">
                    {/* <div className="w-full flex flex-col justify-start lg:items-start items-center gap-1"> */}
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground mb-3">
                        Building Stronger Communities through Collaboration and Empowerment
                        </h2>
                        <p className="max-w-2xl mx-auto text-md text-primary-foreground/70">
                        We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time. We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time. We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time.
                        </p>                    
                    {/* </div>  */}
                    </div>
                    <div className="flex items-center justify-center relative z-0">
                        <img className="w-64 rounded-3xl object-cover aspect-4/3 ring-4 ring-primary" src="/assets/images/donet.webp" alt="about Us image" />
                        {/* <span className="hidden lg:block absolute -top-10 -right-10 w-full h-full bg-accent rounded-3xl -z-10"></span> */}
                    </div>
                </div>
                <div className="w-full justify-between items-center gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="flex items-center justify-center relative z-0">
                        <img className="w-64 rounded-3xl object-cover aspect-4/3 ring-4 ring-primary" src="/assets/images/donet.webp" alt="about Us image" />
                        {/* <span className="hidden lg:block absolute -top-10 -right-10 w-full h-full bg-accent rounded-3xl -z-10"></span> */}
                    </div>
                    <div className="w-full flex-col max-lg:text-center justify-start lg:items-start items-center gap-2 inline-flex">
                    {/* <div className="w-full flex flex-col justify-start lg:items-start items-center gap-1"> */}
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground mb-3">
                        Building Stronger Communities through Collaboration and Empowerment
                        </h2>
                        <p className="max-w-2xl mx-auto text-md text-primary-foreground/70">
                        We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time. We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time. We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time.
                        </p>                    
                    {/* </div>  */}
                    </div>
                </div>
                <div className="w-full justify-between items-center gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col max-lg:text-center justify-start lg:items-start items-center gap-2 inline-flex">
                    {/* <div className="w-full flex flex-col justify-start lg:items-start items-center gap-1"> */}
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground mb-3">
                        Building Stronger Communities through Collaboration and Empowerment
                        </h2>
                        <p className="max-w-2xl mx-auto text-md text-primary-foreground/70">
                        We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time. We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time. We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time.
                        </p>                    
                    {/* </div>  */}
                    </div>
                    <div className="flex items-center justify-center relative z-0">
                        <img className="w-64 rounded-3xl object-cover aspect-4/3 ring-4 ring-primary" src="/assets/images/donet.webp" alt="about Us image" />
                        {/* <span className="hidden lg:block absolute -top-10 -right-10 w-full h-full bg-accent rounded-3xl -z-10"></span> */}
                    </div>
                </div>
            </div>
        </section>
        {/* Why choose Us*/}
        <WhyChooseUs btnNeed={false}/>
        {/* FAQ */}
        <Faq/>
        {/* CTA */}
        <Cta/>
        </>
    )
}

export default About