import React, { useState } from 'react'
import { Bars3Icon } from  '@heroicons/react/24/solid'

export default function Header() {
    const [togglemenu, settogglemenu]= useState(false)

    return (
        <header className='h-40  fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-red-400/ '>
            <div className='flex justify-center items-center h-20 border-solid rounded-md border-2 border-bg-primary w-4/5 px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-bg-primary   '>
                <div className = ' flex justify-between w-full backdrop-blur-sm relative' >
                    <h5 className=' font-serif text-2xl '>Niyaaman</h5>
                    <nav className='hidden md:block'>
                        <ul className='flex  font-lobster pt-1 text-lg'>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                    </nav>

                    {togglemenu && <nav onClick={()=>settogglemenu(!togglemenu)} className='block md:hidden moblie_nav absolute'>
                        <ul className='flex  flex-col font-lobster pt-1 text-lg w-full'>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                    </nav>}
                    <h1 className='font-lobster text-xl pt-1 mr-10'>Contact Me</h1>
                    <button onClick={() => settogglemenu(!togglemenu)} className='md:hidden'>
                        <Bars3Icon className='h-6 w-6 text-black' /> 
                    </button>
                </div>
            </div>
        </header>
    )
}