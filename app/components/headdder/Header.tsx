import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='sticky top-0 bg-white z-50 py-5 shadow-lg' >
       <div className='container grid grid-cols-3 relative' >

            <Link href="/" className='relative flex items-center h-10 my-auto' >
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                        alt="logo"
                        fill
                        className='object-contain object-left'
                    />
            </Link>

            <SearchBar />

            <NavBar />
       </div>
    </header>
  )
}

export default Header