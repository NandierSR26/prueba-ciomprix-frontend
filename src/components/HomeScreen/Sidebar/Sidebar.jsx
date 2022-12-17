import { Drawer } from '@mui/material'
import React from 'react'
import { navLinks } from '../../../constants'
import { useUiStore } from '../../../hooks/useUiStore'

export const Sidebar = () => {

    const { isMenuOpen, closeMenu } = useUiStore()

    return (
        <Drawer
            open={isMenuOpen}
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
            onClose={ closeMenu }
        >
            <div className="w-full px-10 py-5 flex flex-col items-start">

                <ul className="flex flex-col gap-3.5 mx-5 mb-5">
                    {
                        navLinks.links.map(link => (
                            <li key={link.id}>
                                <a href="#" className="text-[0.8rem] font-semibold text-text tracking-widest">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>

                <ul className="flex flex-col gap-3.5 mx-5 mb-5">
                    {
                        navLinks.links_2.map(link => (
                            <li key={link.id}>
                                <a href="#" className="text-[0.8rem] font-semibold text-text tracking-widest">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Drawer>
    )
}
