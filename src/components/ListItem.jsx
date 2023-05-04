const ListItem = ({ text, color }) => {
    return <li className={`text-sm font-normal capitalize ${color}`}>{text}</li>
}

export { ListItem }