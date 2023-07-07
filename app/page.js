import React, { Suspense } from 'react'
import Form from './register/addToDoForm'
import Todos from './todos';


const Page = async() => {

  
  return (
    <div className='container'>
      
      <Form/>
      <Suspense fallback={<div>loading...</div>}>

      <Todos/></Suspense>
      
    </div>
  )
}

export default Page
