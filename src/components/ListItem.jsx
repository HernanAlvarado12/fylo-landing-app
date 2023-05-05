const ListItem = ({ text, color }) => {
    return <li className={`text-sm font-normal capitalize cursor-pointer ${color}`}>{text}</li>
}

export { ListItem }