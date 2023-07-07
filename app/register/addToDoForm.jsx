
"use client";
 
import { Context } from '@/components/Client';
import { redirect, useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast';

const AddToDoForm = () => {

  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const { user } = useContext(Context);

  
  const router = useRouter();

  const submitHandler=async(e)=>{
    e.preventDefault();
    console.log("hii",user);

    try{
      const res =await fetch("/api/newtask",{
        method:"POST",
      
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
          }),
      
      });

      const data = await res.json();

      if(!data.success) return toast.error(data.message)
      toast.success(data.message);
      router.refresh();
      setTitle("");
      setDescription("");
    }catch(error){
      return toast.error(error);
    }
  };
  if (!user._id) return redirect("/login");

  return (
    <div className='login'>
      <section>
      <form onSubmit={submitHandler}>
            <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Task Title'/>
            <input type ='text' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder=' Task Description'/>
            <button type='Submit'>Add Task</button>
        </form>
        </section>
    </div>
  )
}

export default AddToDoForm;
