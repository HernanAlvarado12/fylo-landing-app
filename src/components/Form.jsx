import { useState } from "react"
import { Input } from "./Input"

const Form = ({ value }) => {
    const [email, setEmail] = useState('')

    const handleEmail = (event) => setEmail(event.target.value)
    const handleSubmit = (event) => event.preventDefault();

    return (
        <form className="w-full max-w-3xl mx-auto flex flex-col gap-y-1">
            <Input type="email" color="gray" value={email} placeholder="Enter your email" handleChange={handleEmail} />
            <Input type="submit" color="blue" value={value} handleClick={handleSubmit} />
        </form>
    )
}

export { Form }