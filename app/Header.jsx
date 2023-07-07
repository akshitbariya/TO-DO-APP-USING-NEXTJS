import React from 'react'
import Link from 'next/link'
// import '../styles/header.scss'
import {LogoutBtn} from  "../components/Client"
const Header = () => {
  return (
    <div className='header'>
    <div>
        <h2> TO DO</h2>
    </div>
      <article>
        <Link href={"/"}>Home</Link>
        <Link href={"/profile"}>Profile</Link>
        <LogoutBtn/>

      </article>
    </div>
  )
}

export default Header
