import { ListItem } from "./ListItem"
import logo from "../assets/logo.svg"

const Header = () => {
    return (
        <header>
            <nav className="w-90 h-8 mx-auto flex items-center justify-between">
                <img className="h-3" src={logo} alt="logo icon" />
                <ul className="flex items-center gap-x-2">
                    <ListItem text="Features" color="text-blue-300" />
                    <ListItem text="Team" color="text-blue-300" />
                    <ListItem text="Sign In" color="text-blue-300" />
                </ul>
            </nav>
        </header>
    )
}

export { Header }