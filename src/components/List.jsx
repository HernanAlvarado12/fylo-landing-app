import { ListItem } from "./ListItem"

const List = ({ classList, items = [], color }) => {
    return (
        <ul className={classList}>
            {items.map((item, key) => <ListItem key={key} text={item} color={color} />)}
        </ul>
    )
}   

export { List }