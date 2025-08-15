import { Button } from "@/components/ui/button"
import { PhoneIcon } from "lucide-react"
import Link from "next/link"

const Cta = () => {

    return (
        <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <div className="my-28 mx-auto max-w-7xl h-[30vh] flex max-md:flex-col justify-center items-center gap-5 md:gap-24  bg-primary border rounded-xl">
                <div className="max-w-md flex-col text-center justify-center items-center inline-flex">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground">
                    Start A New Project With Us
                    </h2>                    
                </div>
                <Link
                href="https://wa.me/9894596902?text=Hey!%20I%20saw%20your%20collection%20and%20loved%20it.%20Can%20you%20help%20me%20with%20sizes%20and%20pricing?"
                target="_blank"
                // className="px-5 py-2.5 rounded-full bg-primary text-on-primary hover:bg-primary/90 transition-colors font-medium text-sm shadow-xs hover:shadow-sm flex items-center gap-1.5"
                >
                    <Button size="lg" variant="secondary"><PhoneIcon/>Call Now</Button>
                </Link>
            </div>
        </section>
    )
}

export default Cta