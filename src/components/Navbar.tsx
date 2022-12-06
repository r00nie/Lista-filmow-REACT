import React, {FC, useState} from 'react'
import {Link} from 'react-router-dom'
import {MenuIcon} from '@heroicons/react/outline'

const Navbar: FC<{}> = () => {

  const [navbarOpen, setNavbarOpen] = useState<boolean>(true);

  const handleClick = (event : any) => {
    event.preventDefault();
    setNavbarOpen(!navbarOpen);
    console.log(navbarOpen);
  }

  return (
    <nav className="bg-white">
      <div className="flex md:flex-row flex-col py-6 items-center font-medium md:justify-between shadow-md w-full md:px-8 px-7 gap-10">
        <p className="font-bold text-2xl cursor-pointer">MovieList.</p>
        <ul className={"md:flex md:flex-row items-center gap-6 mx-2" + (navbarOpen===true ? " flex flex-col " : " hidden ")}>
          <Link to="#" className="mx-6 hover:font-bold">
            About
          </Link>
          <Link to="#" className="mx-6 hover:font-bold">
            Contact
          </Link>
          <button className="sign-in-button">Sign In</button>
          <button className="sign-up-button">Sign Up</button>
        </ul>
        <div className="text-3xl absolute cursor-pointer md:hidden right-5 top-5">
          <button onClick={() => {setNavbarOpen(!navbarOpen)}}>
            <MenuIcon className="w-5"/>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;