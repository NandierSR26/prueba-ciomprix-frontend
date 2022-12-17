import { Box } from '@mui/material'
import React from 'react'

export const AuthLayout = ({ children, title }) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
                backgroundColor: '#ff6c9e',
                width: '100%',
                height: '100vh'
            }}
        >
            <div className="form__container bg-white px-5 py-10 flex flex-col gap-4 rounded-md">
                <h2 className="text-2xl text-text font-semibold">{title}</h2>
                {children}
            </div>
        </Box>
    )
}
