import { ToDoItem } from '@/components/ServerComponent'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'


const FetchTodo=async(token)=>{
    try{
      const res = await fetch(`${process.env.URL}/api/mytask`,{
        cache:"no-cache",
        headers:{
          cookie:`token=${token}`,
        },
      });
  
      const data =await res.json();
      if(!data.success) return[];
  
      return data.tasks;
  
    }catch(error){
      return [];
  
    }
  }
const Todos = async() => {

    const token =cookies().get("token")?.value;
  if(!token)  return redirect("/login");
  const tasks= await FetchTodo(token);


  return (
    <section className='todosContainer'>
      {
        tasks?.map((i)=>(
          <ToDoItem
           title={i.title} 
       description={i.description}
      id={i._id}
      key={i._id}
      completed={i.isCompleted}
      />
        ))}
      
      </section>
  );
};

export default Todos
