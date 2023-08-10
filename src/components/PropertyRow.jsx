
export default function PropertyRow(props) {

    return (
        <>
            <tr id={props.id} className="w-full border border-t-gray-500  pt-2 border-t-1 mt-2 h-10">
                <td>{props.id}</td>
                <td>
                    <img src={props.image} alt="image" />
                </td>
                <td>{props.city}</td>
                <td>{props.category}</td>
                <td>{props.price}</td>
                <td><button className="text-white bg-red-600 hover:bg-red-700 py-1 px-2 rounded-lg" onClick={props.handleDelete}>Delete</button></td>
                <td><button className="text-white bg-sky-600 hover:bg-sky-700 py-1 px-2 rounded-lg" onClick={props.handleEdit}>Edit</button></td>
            </tr>
        </>
    )
}