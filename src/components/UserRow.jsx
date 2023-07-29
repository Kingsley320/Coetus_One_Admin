
export default function UserRow(props) {
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.fullName}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td><button className="Table-deleteBtn" onClick={props.handleDelete}>Delete</button></td>
                <td><button className="Table-editBtn" onClick={props.handleEdit}>Edit</button></td>
            </tr>
        </>
    )
}