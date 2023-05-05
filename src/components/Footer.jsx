import { List } from "./List"


const terms = ['Contact Us', 'Terms', 'Privacy']
const about = ['About Us', 'Jobs', 'Press', 'Blog']
const contact = ['Phone: +1-543-123-4567', 'example@fylo.com']


const Footer = () => {
    return (
        <footer className="w-full bg-blue-300">
            <section className="w-90 mx-auto py-6 px-2 flex items-start flex-col gap-y-4 md:flex-row">
                <List classList="flex flex-col gap-y-1 gap-x-2 md:w-1/3 md:pl-4" items={contact} color="text-white hover:text-blue-100" />
                <List classList="flex flex-col gap-y-1 gap-x-2 md:w-1/3 md:pl-4" items={about} color="text-white hover:text-blue-100" />
                <List classList="flex flex-col gap-y-1 gap-x-2 md:w-1/3 md:pl-4" items={terms} color="text-white hover:text-blue-100" />
            </section>
        </footer>
    )
}

export { Footer }