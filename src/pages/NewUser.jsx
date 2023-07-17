import AddProductForm from '../components/AddUserForm';
import SideBar from '../components/SideBar';

function NewUser() {
    return (
        <>
        <div className='flex gap-8'>
        <SideBar />
        <AddProductForm />
        </div>
        </>
    )
}
export default NewUser