import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar: FC<{}> = () => {
  return (
    <nav className="bg-white">
      <div className="flex md:flex-row flex-col py-6 items-center font-medium md:justify-between shadow-md w-full md:px-8 px-7 gap-10">
        <p className="font-bold text-2xl cursor-pointer">MovieList.</p>
        <ul className="flex md:flex-row flex-col uppercase items-center gap-6">
          <Link to="/" className="px-8 inline-block">
            Home
          </Link>
          <Link to="/" className="px-8">
            About
          </Link>
          <Link to="/" className="px-8">
            Service
          </Link>
          <Link to="/" className="px-8">
            Contact
          </Link>
        </ul>
        {/*Mobile Navbar*/}
        {/* <ul className="md:hidden flex bg-white w-full flex-col gap-5">
          <Link to="/" className="px-3 inline-block">
            Home
          </Link>
          <Link to="/" className="px-3">
            About
          </Link>
          <Link to="/" className="px-3">
            Service
          </Link>
          <Link to="/" className="px-3">
            Contact
          </Link>
        </ul> */}

        <div className="text-3xl absolute cursor-pointer md:hidden right-7 top-7">
          <MenuIcon className="w-5"/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;