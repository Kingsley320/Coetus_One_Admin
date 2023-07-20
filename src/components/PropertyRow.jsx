
export default function PropertyRow(props) {
    return (
        <>
            <tr>
                <td>
                    <img src={props.image} alt="image" style={{ width: "50px", height: "auto" }} />
                </td>
                <td>{props.id}</td>
                <td>{props.city}</td>
                <td>{props.category}</td>
                <td>{props.price}</td>
                <td><button className="Table-deleteBtn">Delete</button></td>
                <td><button className="Table-editBtn">Edit</button></td>
            </tr>
        </>
    )
}