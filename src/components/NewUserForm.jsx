import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NewUserForm() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);
    const [show, setShow] = useState(false);
    const ip = "http://159.65.21.42:9000";
    const url = `${ip}/register`;
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            firstname === '' || lastname === '' || phone === '' | email === '' | password === ''
        ) {
            setErr(true);
            return;
        }
        const user = {
            first_name: firstname,
            last_name: lastname,
            email: email,
            phone: phone,
            password: password,
        }

        setFirstname('');
        setLastname('');
        setPhone('');
        setEmail('');
        setPassword('');
        console.log((user));

        const baseURL = "http://property.reworkstaging.name.ng/v1";
        const config = {
            headers: {
                "Authorization": `Bearer ${sessionStorage.getItem("admin-token")}`
            }
        }
        try {
            const resp = await axios.post(`${baseURL}/users`, user, config);
            console.log(resp);
            setShow(true);
            setTimeout(()=> {
                setShow(false);
                navigate("/dashboard");
            },2500);
            
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className=' w-full ml-64'>
                <div className="rounded-tl-xl pt-8 p-3 mb-10 bg-white sticky top-0 border-b-1 border-l-1 border-orange-600">
                    <h1 className="text-3xl font-bold ">Add User</h1>
                </div>

                <div className=' w-full  pr-8 mt-4 rounded-md  my-8 font-sans'>
                {
                    show === true ? (
                        <div className='flex align-middle justify-center bg bg-green-500 w-full h-10 text-white text-lg font-semibold text-center mb-4'>
                    <p className='my-auto'>User Created</p>
                </div>
                    ) : (null)
                }
                    <form className='w-full  bg-white p-10 rounded-xl text-left'>
                        <div>
                            <div className='my-4'>
                                <label htmlFor="" className='text-sm block font-semibold mb-0.5'>First Name</label>
                                <input type="text" placeholder='Full Name' className='bg-transparent w-full rounded-xl outline-none border-1 border-gray-300 text-sm text-black py-1 px-3 focus:border-orange-600 h-10' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                                {err === true && firstname === '' ? <span className='text-red-600'>First Name Required</span> : null}
                            </div>
                            <div className='my-4'>
                                <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Last Name</label>
                                <input type="text" placeholder='Full Name' className='bg-transparent w-full rounded-xl outline-none border-1 border-gray-300 text-sm text-black py-1 px-3 focus:border-orange-600 h-10' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                                {err === true && lastname === '' ? <span className='text-red-600'>Last Name Required</span> : null}
                            </div>
                            <div className='my-4'>
                                <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Phone Number</label>
                                <input type="text" placeholder="User's Phone Number" className='bg-transparent w-full rounded-xl outline-none border-1 border-gray-300 text-sm text-black py-1 px-3 focus:border-orange-600 h-10' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                {err === true && phone === '' ? <span className='text-red-600'>Phone Number Required</span> : null}
                            </div>

                            <div className='my-4'>
                                <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Password</label>
                                <input type="password" placeholder='Password' className='bg-transparent w-full rounded-xl outline-none border-1 border-gray-300 text-sm text-black p-1.5 px-3 h-10 focus:border-orange-600 ' value={password} onChange={(e) => setPassword(e.target.value)} />
                                {err === true && password === '' ? <span className='text-red-600'>Password Required</span> : null}
                            </div>

                            <div className='my-4'>
                                <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Email</label>
                                <input type="text" placeholder='Email' className='bg-transparent w-full rounded-xl outline-none border-1 border-gray-300 text-sm text-black py-1 px-3 focus:border-orange-600 h-10' value={email} onChange={(e) => setEmail(e.target.value)} />
                                {err === true && email === '' ? <span className='text-red-600'>Password Required</span> : null}
                            </div>
                        </div>
                        <button className=' w-full bg-orange-600 hover:bg-orange-900 text-white font-semibold text-sm mx-auto mt-2 my-2 py-2 rounded-md' onClick={handleSubmit}>Add User</button>
                    </form>

                </div>
            </div>
        </>
    )
}
export default NewUserForm