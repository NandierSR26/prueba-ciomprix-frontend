import React from 'react'
import { navLinks } from '../../../constants'

export const Navbar = () => {
    return (
        <header className='flex justify-between items-center px-5 xs:px-10  sm:px-24 lg:px-40 py-4 w-full z-10'>
            <div className='flex gap-2 items-end'>
                <p className='text-2xl font-bold text-[#ffffff] font-anton tracking-widest'>Achoo</p>
                <p className='text-sm uppercase font-medium text-gray-300'>beta</p>
            </div>

            <nav className="flex">
                <ul className="flex gap-3.5 mx-5 nav__links">
                    {
                        navLinks.links.map(link => (
                            <li key={link.id}>
                                <a href="#" className="uppercase text-[0.7rem] text-gray-100 tracking-widest">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>

                <ul className="flex gap-3.5 mx-5 nav__links">
                    {
                        navLinks.links_2.map(link => (
                            <li key={link.id}>
                                <a href="#" className="uppercase text-[0.7rem] text-gray-100 tracking-widest">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}
