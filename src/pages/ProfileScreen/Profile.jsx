import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import UserWithoutPicture from '../../assets/blank-profile-picture.svg'
import { useAuthStore } from '../../hooks/useAuthStore'


export const Profile = () => {

    const { startDeleteProfile } = useAuthStore()
    const { user } = useSelector(state => state.auth)
    const navigate = useNavigate();

    const deleteProfile = (id) => {
        startDeleteProfile(id)
    }

    return (
        <main className="flex flex-col items-center justify-center py-24">
            <div className='w-[200px] rounded-[50%] mb-2'>
                {
                    (user.avatar) ? (
                        <img src={`${user.avatar}`} alt="picture" className='rounded-[50%]' />
                    ) : (
                        <img src={UserWithoutPicture} alt="picture" className='rounded-[50%]' />
                    )
                }
            </div>
            <p className='text-2xl text-text mb-10'>{user.first_name} {user.last_name}</p>

            <div className='flex justify-center items-center gap-5'>
                <Button
                    variant='contained'
                    color='success'
                    onClick={() => navigate(`/edit-profile/${user._id}`)}
                >
                    Edit Profile
                </Button>

                <Button
                    variant='contained'
                    color='error'
                    onClick={() => {
                        deleteProfile(user._id)
                    }}
                >
                    Delete Profile
                </Button>
            </div>
        </main>
    )
}
