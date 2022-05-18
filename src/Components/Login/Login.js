import React, {useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, ] = useSignInWithEmailAndPassword(auth);
    useState(() => {
        if (gUser || user) {
            navigate('/')
            toast.success('Login SuccessFully')
        }
    },[])
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email,data.password)
    };
    
    return (
<div className='flex justify-center items-center h-screen'>
<div className="card w-96 bg-base-100 shadow-xl">
<div className="card-body">
    <h2 className="text-center text-secondary font-bold text-2xl">Login</h2>
    <form onSubmit={handleSubmit(onSubmit)}>

    <div className="form-control w-full max-w-xs">
<label className="label">
    <span className="label-text">Email</span>
</label>
            <input type="Email"  placeholder="Your Email" className="input input-bordered w-full max-w-xs"{...register("email",{
                pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Invalid Email'
                }
            , 
                required: {
                    value: true,
                    message:"Provied Email"
                },
              
            })}
            />
            <label className="label">
                {
                    errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>
                }
                {
                    errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>
                }
        
        </label>
</div>
<div className="form-control w-full max-w-xs">
<label className="label">
    <span className="label-text">Password</span>
</label>
            <input type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs"{...register("password",{
                minLength: {
                    value: 6,
                    message: 'Password Should Be 6 Charecter'
                }, 
                required: {
                    value: true,
                    message:"Provied Password"
                }
            })} />
               
            <label className="label">
                {
                    errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>
                }
                {
                    errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>
                }
        
            </label>
            
        </div>
        <input type="submit" className="btn w-full max-w-xs" />
        <p className='mt-2'>New to Task Manger?<Link to='/register' className=' text-secondary'>Create new account</Link></p>
</form>
    <div className="divider">OR</div>
    <button onClick={()=>signInWithGoogle()} className="btn btn-outline flex gap-5"><FontAwesomeIcon className='text-secondary' icon={faGoogle}></FontAwesomeIcon> CONTINUE WITH GOOGLE</button>
</div>
</div>
</div>
    );
};

export default Login;