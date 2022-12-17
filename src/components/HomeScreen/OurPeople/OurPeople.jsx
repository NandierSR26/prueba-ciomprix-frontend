import { Divider } from '@mui/material'
import React from 'react'
import { ourPeopleCards } from '../../../constants'
import './ourPeopleStyles.css';

export const OurPeople = () => {
    return (
        <section className="bg-light_grey w-full flex flex-col items-center gap-10 my-0 mx-auto py-[5rem]">
            <h2 className="text-3xl text-text">Our People</h2>
            <p className="text-center text-text2 w-full ss:w-[65%] px-5 lg:px-12">
                Behind Achoo is a dedicated team of digital marketing experts,
                úllentfocused relationship managers, data nerds and bloggers
                whose ambition is helping clients achieve awesome influencer
                marketing results.
            </p>

            <div className="flex flex-col justify-between gap-10 w-fit sm:w-[80%] px-5 sm:px-0 sm:flex-row">
                {
                    ourPeopleCards.map(card => (
                        <div key={card.id} className="card flex flex-col gap-2 justify-between rounded-md border border-[#d9d9d9]">
                            <div className="relative w-full h-[300px] sm:h-[300px]">
                                <div className="background__photo absolute bg-[#D9D9D9] top-0 left-0 w-[100%] h-[100%] z-0"></div>
                                <div className="photo absolute z-10 bottom-0 left-0 w-[100%] h-[90%]"></div>
                            </div>

                            <div className="card__content p-2 flex flex-col gap-2 justify-between">
                                <h5 className="text-sm text-text">{card.name}</h5>
                                <p className="text-xs text-text2">{card.description}</p>

                                <Divider />

                                <a href="#">{card.link}</a>

                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}
