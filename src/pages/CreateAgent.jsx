import NewAgentForm from '../components/NewAgentForm';
import SideBar from '../components/SideBar';

function CreateAgent() {
    return (
        <>
        <div className='flex gap-8'>
        <SideBar />
        <NewAgentForm />
        </div>
        </>
    )
}
export default CreateAgent