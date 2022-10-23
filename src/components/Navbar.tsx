import React, {FC} from 'react'

import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar: FC<{}> = () => {
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadlow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">MovieList.</h1>
          <nav>
            <ul className="hidden md:flex">
              <li>Home</li>
              <li>About</li>
              <li>MovieList</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">Sign In</button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </div>
      <MenuIcon className="w-5"/>
    </div>
  )
}

export default Navbar;