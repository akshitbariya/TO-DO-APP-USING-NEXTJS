"use client";

import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { Context } from '@/components/Client';
import { redirect } from 'next/navigation';
import { toast } from 'react-hot-toast';
const Page = () => {

  const [name,setName]= useState("");

  const [email,setEmail]= useState("");
const [password,setPassword]= useState("");
const {user,setUser} = useContext(Context)
const registerHandler =async(e)=>{
  e.preventDefault();

  try{
const res=await fetch("api/auth/register",{
  method:"POST",
  headers:{
    "Content-type":"application/json",
  },
  "body":JSON.stringify({
    name,email,password
  }),
});

const data=await res.json();
if(!data.success) return toast.error(data.message);
setUser(data.user);
toast.success(data.message);
  }catch(error){
    return toast.error(error);
  }
}

if(user._id) return redirect("/");

  return (
    <div className='login'>
    <section>
      <form onSubmit={registerHandler}>
          <input type='name' onChange={(e)=>setName(e.target.value)} 
            value={name } placeholder='Enter name'/>
          <input type='email' onChange={(e)=>setEmail(e.target.value)} 
            value={email} placeholder='Enter email'/>
           
           
           <input  onChange={(e)=>setPassword(e.target.value)} 
            value={password}  type ='password' placeholder=' Enter password'/>
             <button type='submit'>sign up</button>
          <p>OR</p>
          <Link href={"/login"}>Log in</Link>
      
      </form>
    </section>
  </div>
  )
}




export default Page
