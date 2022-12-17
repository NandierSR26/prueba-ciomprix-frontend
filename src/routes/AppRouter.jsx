import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuthStore } from '../hooks/useAuthStore'
import { EditProfile } from '../pages/EditProfile/EditProfile'
import { Home } from '../pages/HomeScreen/Home'
import { Login } from '../pages/LoginScreen/Login'
import { Profile } from '../pages/ProfileScreen/Profile'
import { Register } from '../pages/RegisterScreen/Register'

export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])



    if (status === 'checking') {
        return (
            <h3>Cargando...</h3>
        )
    }

    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    ? (
                        <>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/*' element={<Home />} />
                        </>
                    ) : (
                        <>
                            <Route path='/profile' element={<Profile />} />
                            <Route path='/edit-profile/:id' element={<EditProfile />} />
                            <Route path='/' element={<Home />} />
                            <Route path='/*' element={<Home />} />
                        </>

                    )
            }
        </Routes>
    )
}