import { Divider } from '@mui/material'
import React from 'react'

export const Footer = () => {
    return (
        <footer className="w-[80%] py-20 px-30 my-0 mx-auto">
            <div className="w-full flex flex-col ss:flex-row items-start ss:justify-start mb-10">
                <div className="column mr-32 flex flex-col gap-5">
                    <h5 className="text-sm font-bold">Achoo</h5>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <a href="#" className="text-sm font-medium text-text2">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-medium text-text2">Features</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-medium text-text2">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-medium text-text2">About Us</a>
                        </li>
                    </ul>
                </div>
                <div className="column mr-32 flex flex-col gap-5">
                    <h5 className="text-sm font-bold">Support</h5>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <a href="#" className="text-sm font-medium text-text2">Help & Support</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-medium text-text2">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-medium text-text2">Contact Us</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-medium text-text2">Sign Up</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-medium text-text2">Login</a>
                        </li>
                    </ul>
                </div>
                <div className="column mr-32 flex flex-col gap-5">
                    <h5 className="text-sm font-bold">Contact Us</h5>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <a href="#" className="text-sm font-medium text-text2">Achoo ApS</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-medium text-text2">
                                Danneskiold-Samsoes Alle 41<br />
                                1434 Copenhagen K<br />
                                Denmark
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-medium text-text2">Tel: +45 24 47 48 58</a>
                        </li>
                        <li>
                            <div className="social__networks">
                                <a href="#"></a>
                                <a href="#"></a>
                                <a href="#"></a>
                                <a href="#"></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <Divider />

            <div className="copyright flex items-center justify-between mt-5">
                <h5 className="text-xl text-text font-bold">Achoo</h5>
                <p className="text-sm text-text2 font-normal">Achoo ApS @ 2015</p>
            </div>
        </footer>
    )
}
