"use client";
import { Context } from '@/components/Client';
import { redirect } from 'next/navigation';
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast';



const Login = () => {

const [email,setEmail]= useState("");
const [password,setPassword]= useState("");
const {user,setUser} = useContext(Context)

  const loginHandler=async(e)=>{
    e.preventDefault();
    try{
     const res=await fetch("/api/auth/login",{
        method:"POST",
        body:JSON.stringify({
          email,password
        }),
        headers:{
          "Content-Type":"application/json",
        }
      });
      const data=await res.json();

      if(!data.success) return toast.error(data.message);
        setUser(data.user);
        toast.success(data.message);
    }catch(error){return toast.error(error);
    }
  
  }

  if(user._id) return redirect("/")

  return (
    <div className='login'>
      <section>
        <form onSubmit={loginHandler}>
            <input type='email' onChange={(e)=>setEmail(e.target.value)} 
            value={email} placeholder='Enter email'/>
           
           
           <input  onChange={(e)=>setPassword(e.target.value)} 
            value={password}  type ='password' placeholder=' Enter password'/>
            <button type='submit'>submit</button>
            <p>OR</p>
            <Link href={"/register"}>New user</Link>
        
        </form>
      </section>
    </div>
  )
}

export default Login
