import { ListItem } from "./ListItem"
import { List } from "./List"
import logo from "../assets/logo.svg"

const items = ['Features', 'Team', 'Sign In']

const Header = () => {
    return (
        <header>
            <nav className="w-90 h-8 mx-auto flex items-center justify-between">
                <img className="h-3" src={logo} alt="logo icon" />
                <List classList="flex items-center gap-x-2" items={items} color="text-blue-300" />
            </nav>
        </header>
    )
}

export { Header }