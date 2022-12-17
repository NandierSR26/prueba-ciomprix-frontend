import { Button } from '@mui/material'
import React from 'react'
import { Navbar } from '../Navbar'
import './heroStyles.css'

export const Hero = () => {
    return (
        <section className='hero flex flex-col items-center relative'>
            <div className="layer"></div>
            <Navbar />

            <div className="banner py-[14rem] flex flex-col items-center gap-6 z-10">
                <h1 className="text-5xl text-center w-[65%] text-primary">A Powerful Influencer Marketing Platform For Advertisers</h1>
                <Button
                    variant='contained'
                    color='info'
                    sx={{
                        color: 'white',
                        borderRadius: '20px',
                        padding: '.5rem 1.5rem'
                    }}
                >
                    start your free trial
                </Button>
            </div>
        </section>
    )
}
