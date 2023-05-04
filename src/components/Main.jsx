import heroMobile from "../assets/illustration-1.svg"
import heroDesktop from "../assets/curve-desktop.svg"
import { Input } from "./Input"
import { useState } from "react"

const Main = () => {

    const [email, setEmail] = useState('')

    const handleEmail = (event) => setEmail(event.target.value)

    return (
        <main className="w-90 mt-5 mx-auto">
            <picture>
                <source media="(min-width: )" srcSet={heroDesktop} />
                <img className="w-full" src={heroMobile} alt="hero image" />
            </picture>
            <article className="mb-56 flex flex-col gap-y-3 text-center">
                <h1 className="text-blue-300 text-lg font-bold font-open">All your files in one secure location, accessible anywhere.</h1>
                <p className="text-blue-300 text-sm font-medium">
                    Fylo stores your most important files in one secure location. Access them wherever 
                    you need, share and collaborate with friends, family, and co-workers.
                </p>
                <form className="flex flex-col gap-y-2">
                    <Input type="email" color="gray" value={email} placeholder="Enter your email" handleChange={handleEmail} />
                    <Input type="submit" color="blue" value="Get Started" />
                </form>
            </article>
        </main>
    )
}

export { Main }