import { Input } from "./Input"
import { Form } from "./Form"
import { Picture } from "./Picture"
import { useState } from "react"
import illustrationOne from "../assets/illustration-1.svg"
import illustrationTwo from "../assets/illustration-2.svg"
import arrow from "../assets/arrow.svg"
import quotes from "../assets/quotes.svg"
import user from "../assets/testimonial.jpg"


const Main = () => {


    return (
        <>
            <main className="w-90 mt-5 mx-auto">
                <section className="md:mb-56 md:grid md:items-center md:grid-cols-2 md:gap-x-2">
                    <img className="w-full sm:max-h-[40rem] sm:max-w-6xl sm:mx-auto md:order-1" src={illustrationOne} alt="hero image" />
                    <article className="mb-56 flex flex-col gap-y-3 text-center sm:max-w-5xl sm:mx-auto sm:gap-y-4 md:m-0 md:gap-y-2.5 md:text-start">
                        <h1 className="mt-4 text-blue-300 text-lg font-bold font-open sm:text-xl md:text-lg">All your files in one secure location, accessible anywhere.</h1>
                        <p className="text-blue-300 text-sm font-medium sm:text-md">
                            Fylo stores your most important files in one secure location. Access them wherever
                            you need, share and collaborate with friends, family, and co-workers.
                        </p>
                        <Form value="Get Started" classForm="md:ml-0 md:flex-row md:gap-x-1" classEmail="md:w-3/4" classSubtmit="md:w-1/4" />
                    </article>
                </section>
                <section className="md:mb-10 md:grid md:items-center md:grid-cols-2">
                    <img className="w-full sm:max-h-[40rem] sm:max-w-6xl sm:mx-auto md:order-1" src={illustrationTwo} alt="people picture" />
                    <section>
                        <article className="sm:max-w-5xl sm:mx-auto">
                            <h2 className="mt-8 mb-3 text-blue-300 text-md font-bold text-center sm:text-base md:m-0 md:mb-2 md:text-start md:text-lg">Stay productive, wherever you are</h2>
                            <div className="flex flex-col gap-y-2.5 text-sm text-blue sm:text-md md:text-sm">
                                <p>
                                    Never let location be an issue when accessing your files. Fylo has you
                                    covered for all of your file storage needs.
                                </p>
                                <p>
                                    Securely share files and folders with friends, family and colleagues for
                                    live collaboration. No email attachments required!
                                </p>
                            </div>
                            <a className="mt-6 mb-8 flex items-center justify-center gap-x-1 text-sm text-cyan underline underline-offset-8 decoration-cyan sm:text-md md:mt-1 md:mb-4 md:justify-start md:text-sm" href="#">
                                See how Fylo works
                                <img src={arrow} alt="arrow icon" />
                            </a>
                        </article>
                        <article className="w-3/4 mx-auto mb-10 md:m-0">
                            <figure>
                                <img src={quotes} alt="quote icon" />
                                <figcaption className="mt-0.5 mb-2 text-xs text-blue-300 leading-relaxed text-justify sm:mt-1.5 sm:mb-2.5 sm:text-sm md:text-xs md:my-1">
                                    Fylo has improved our team productivity by an order of magnitude. Since
                                    making the switch our team has become a well-oiled collaboration machine.
                                </figcaption>
                            </figure>
                            <figure className="flex items-center gap-x-1">
                                <img className="w-3.5 rounded-full sm:w-4 md:w-3.5" src={user} alt="user picture" />
                                <figcaption>
                                    <h3 className="text-blue-300 font-bold text-xs sm:text-sm md:text-xs">Kyle Burton</h3>
                                    <p className="text-blue text-[1rem] sm:text-xs md:text-[1rem]">Founder & CEO, Huddle</p>
                                </figcaption>
                            </figure>
                        </article>
                    </section>
                </section>
            </main>
            <section className="w-full py-5 px-3 flex items-center justify-center flex-col text-white text-center bg-blue md:py-8 md:px-4 md:flex-row md:justify-between md:gap-x-3 md:text-start">
                <div className="md:w-1/2">
                    <h2 className="text-base font-bold">Get early access today</h2>
                    <p className="mt-1.5 mb-3 text-sm sm:mt-2.5 sm:mb-4 sm:text-md md:m-0 md:mt-2 md:text-sm">
                        It only takes a minute to sign up and our free starter tier is extremely generous. 
                        If you have any questions, our support team would be happy to help you.
                    </p>
                </div>
                <Form value="Get Started For Free" classForm="md:w-1/2" classSubtmit="md:w-2/4"/>
            </section>
        </>
    )
}

export { Main }