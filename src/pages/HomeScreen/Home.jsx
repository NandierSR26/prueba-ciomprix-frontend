import React from 'react'
import { Hero } from '../../components/HomeScreen/Hero/Hero'
import { OurMision } from '../../components/HomeScreen/OurMision/OurMision'
import { OurPeople } from '../../components/HomeScreen/OurPeople'

export const Home = () => {
    return (
        <>
            <Hero />
            <OurMision />
            <OurPeople />
        </>
    )
}