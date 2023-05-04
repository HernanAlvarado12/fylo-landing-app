import illustrationOne from "../assets/illustration-1.svg"
import illustrationTwo from "../assets/illustration-2.svg"
import arrow from "../assets/arrow.svg"
import quotes from "../assets/quotes.svg"
import user from "../assets/testimonial.jpg"
import { Input } from "./Input"
import { Form } from "./Form"
import { Picture } from "./Picture"
import { useState } from "react"

const Main = () => {

    const [email, setEmail] = useState('')

    const handleEmail = (event) => setEmail(event.target.value)

    return (
        <>
            <main className="w-90 mt-5 mx-auto">
                <section>
                    <img className="w-full sm:max-h-[40rem] sm:max-w-5xl sm:mx-auto" src={illustrationOne} alt="hero image" />
                    <article className="mb-56 flex flex-col gap-y-3 text-center sm:max-w-4xl sm:mx-auto sm:gap-y-4">
                        <h1 className="mt-4 text-blue-300 text-lg font-bold font-open sm:text-xl">All your files in one secure location, accessible anywhere.</h1>
                        <p className="text-blue-300 text-sm font-medium sm:text-md">
                            Fylo stores your most important files in one secure location. Access them wherever
                            you need, share and collaborate with friends, family, and co-workers.
                        </p>
                        <Form value="Get Started" />
                    </article>
                </section>
                <section>
                    <img className="w-full sm:max-h-[40rem] sm:max-w-5xl sm:mx-auto" src={illustrationTwo} alt="people picture" />
                    <article className="sm:max-w-4xl sm:mx-auto">
                        <h2 className="mt-8 mb-3 text-blue-300 text-md font-bold text-center sm:text-base">Stay productive, wherever you are</h2>
                        <div className="flex flex-col gap-y-2.5 text-sm text-blue sm:text-md">
                            <p>
                                Never let location be an issue when accessing your files. Fylo has you
                                covered for all of your file storage needs.
                            </p>
                            <p>
                                Securely share files and folders with friends, family and colleagues for
                                live collaboration. No email attachments required!
                            </p>
                        </div>
                        <a className="mt-6 mb-8 flex items-center justify-center gap-x-1 text-sm text-cyan underline underline-offset-8 decoration-cyan sm:text-md" href="#">
                            See how Fylo works
                            <img src={arrow} alt="arrow icon" />
                        </a>
                    </article>
                    <article className="w-3/4 mx-auto mb-10">
                        <figure>
                            <img src={quotes} alt="quote icon" />
                            <figcaption className="mt-0.5 mb-2 text-xs text-blue-300 leading-relaxed text-justify sm:mt-1.5 sm:mb-2.5 sm:text-sm">
                                Fylo has improved our team productivity by an order of magnitude. Since
                                making the switch our team has become a well-oiled collaboration machine.
                            </figcaption>
                        </figure>
                        <figure className="flex items-center gap-x-1">
                            <img className="w-3.5 rounded-full sm:w-4" src={user} alt="user picture" />
                            <figcaption>
                                <h3 className="text-blue-300 font-bold text-xs sm:text-sm">Kyle Burton</h3>
                                <p className="text-blue text-[1rem] sm:text-xs">Founder & CEO, Huddle</p>
                            </figcaption>
                        </figure>
                    </article>
                </section>
            </main>
            <section className="w-full py-5 px-3 flex items-center justify-center flex-col text-white text-center bg-blue">
                <h2 className="text-base font-bold">Get early access today</h2>
                <p className="mt-1.5 mb-3 text-sm sm:mt-2.5 sm:mb-4 sm:text-md">
                    It only takes a minute to sign up and our free starter tier is extremely generous. 
                    If you have any questions, our support team would be happy to help you.
                </p>
                <Form value="Get Started For Free" />
            </section>
        </>
    )
}

export { Main }