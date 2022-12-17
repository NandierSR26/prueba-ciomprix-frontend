import { Button } from '@mui/material'
import React from 'react'
import { Footer } from '../../components/HomeScreen/footer'
import { Hero } from '../../components/HomeScreen/Hero/Hero'
import { OurMision } from '../../components/HomeScreen/OurMision/'
import { OurPeople } from '../../components/HomeScreen/OurPeople'
import { Sidebar } from '../../components/HomeScreen/Sidebar/'

export const Home = () => {
    return (
        <>
            <Hero />
            <Sidebar />
            <OurMision />
            <OurPeople />

            <section className="bg-[#FF6C9E] flex justify-center">
                <div className="w-full px-5 ss:w-[80%] flex flex-col sm:flex-row items-center justify-between py-10">
                    <p className="text-sm text-white">No obligations or contacts. Achoo influencer platform is available to all advertisers</p>
                    <Button
                        variant='contained'
                        sx={{
                            color: 'white',
                            borderRadius: '20px',
                            padding: '.5rem 1.5rem',
                            backgroundColor: '#E65584'
                        }}
                    >
                        start your free trial
                    </Button>
                </div>
            </section>

            <Footer />
        </>
    )
}