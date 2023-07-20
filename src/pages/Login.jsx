import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Login() {
    const baseURL = "http://property.reworkstaging.name.ng/v1/auth/login";
    const [err, setErr] = useState(false);
    const password = 'rework';
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (pass === '' || email === '') {
            setErr(true);
        }
        else{
            const auth = {
                "email": email,
                "password": pass
            }
            try{
                const login = await axios.post(baseURL, auth)
                const token = login.data.data.token;
                sessionStorage.setItem("admin-token", token );
                console.log(login.data.data.token);
                if(login.data){
                    navigate("/dashboard");
                }
            }catch (err){
                console.log(err);
            }
           }
    }


    return (
        <>
            <div className=' mb-28 text-center h-[67vh] pt-20 mx-80 bg-transparent'>
                <div className='border-1 border-gray-400 text-left w-85 mx-auto mt-4 rounded-md px-6 py-5 my-8 font-sans'>
                    <h1 className='text-center text-3xl font-Arial font-bold mb-10'>Admin Sign in</h1>
                    <form action="">
                        <div className='my-2'>
                            <label className='text-sm flex justify-between font-semibold mb-0.5'>Email <a href="#" className='text-sky-600 font-normal hover:underline underline-offset-4'>Forgot your email?</a></label>
                            <input type="text" className='w-full rounded xl outline-none border-2 border-orange-300 text-sm text-black py-1 px-3 focus:border-orange-600 bg-transparent' value={email} onChange={(e) => setEmail(e.target.value)} />
                            {err === true && email === '' ? <span className='text-red-600'>Email Required</span> : null}
                        </div>
                        <div className='my-2'>
                            <label className='text-sm flex justify-between font-semibold mb-0.5'>Password <a href="#" className='text-sky-600 font-normal hover:underline underline-offset-4'>Forgot your password?</a></label>
                            <input type="password" className='w-full rounded xl outline-none border-2 border-orange-300 text-sm text-black py-1 px-3 focus:border-orange-600 bg-transparent' value={pass} onChange={(e) => setPass(e.target.value)} />
                            {err === true && pass === '' ? <span className='text-red-600'>Password Required</span> : null}
                        </div>
                        <button className=' w-full bg-orange-500 text-white font-semibold text-sm mx-auto mt-2 my-2 py-1.5 rounded-md hover:bg-orange-600' onClick={handleSubmit}>Sign in</button>
                    </form>

                </div>
            </div>

        </>
    )
}
export default Login