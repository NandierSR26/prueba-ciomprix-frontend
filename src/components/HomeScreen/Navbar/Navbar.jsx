import React from 'react'
import { navLinks } from '../../../constants'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { useUiStore } from '../../../hooks/useUiStore';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../../hooks/useAuthStore';
import { useSelector } from 'react-redux';
import UserWithoutPicture from '../../../assets/blank-profile-picture.svg'

export const Navbar = () => {

    const { openMenu } = useUiStore()
    const { status } = useAuthStore()
    const { user } = useSelector(state => state.auth)

    return (
        <header className='flex justify-between items-center px-5 xs:px-10  sm:px-24 lg:px-40 py-4 w-full z-10'>
            <div className='flex gap-2 items-end'>
                <p className='text-2xl font-bold text-[#ffffff] font-anton tracking-widest'>Achoo</p>
                <p className='text-sm uppercase font-medium text-gray-300'>beta</p>
            </div>

            <nav className="hidden sm:flex">
                <ul className="flex gap-3.5 mx-5 nav__links items-center">
                    {
                        navLinks.links.map(link => (
                            <li key={link.id}>
                                <a href="#" className="uppercase text-[0.7rem] text-gray-100 tracking-widest">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>

                {
                    (status === 'not-authenticated')
                        ? (
                            <ul className="flex gap-3.5 mx-5 nav__links items-center">
                                <Link to={'/login'} className="uppercase text-[0.7rem] text-gray-100 tracking-widest">Login</Link>
                                <Link to={'/register'} className="uppercase text-[0.7rem] text-gray-100 tracking-widest">Sign Up</Link>
                            </ul>
                        ) : (
                            <Link to={'/profile'} className="w-[32px] rounded-[50%] mx-5">
                                {
                                    (user.avatar) ? (
                                        <img src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${user.avatar}`} alt="picture" className='rounded-[50%]' />
                                    ) : (
                                        <img src={UserWithoutPicture} alt="picture" className='rounded-[50%]' />
                                    )
                                }
                            </Link>
                        )
                }

            </nav>
            <IconButton sx={{ display: { xs: '', sm: 'none' }, color: 'white' }} onClick={openMenu}>
                <MenuIcon />
            </IconButton>
        </header>
    )
}
