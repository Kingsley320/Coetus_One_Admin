
export default function PropertyRow(props) {

    return (
        <>
            <tr id={props.id}>
                <td>
                    <img src={props.image} alt="image" style={{ width: "50px", height: "auto" }} />
                </td>
                <td>{props.id}</td>
                <td>{props.city}</td>
                <td>{props.category}</td>
                <td>{props.price}</td>
                <td><button className="Table-deleteBtn" onClick={props.handleDelete}>Delete</button></td>
                <td><button className="Table-editBtn" onClick={props.handleEdit}>Edit</button></td>
            </tr>
        </>
    )
}