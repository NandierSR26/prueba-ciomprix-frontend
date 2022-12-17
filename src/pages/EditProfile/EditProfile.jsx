import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useAuthStore } from '../../hooks/useAuthStore'
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import { AuthLayout } from '../../components/layout/AuthLayout';
import { useNavigate } from 'react-router-dom';

export const EditProfile = () => {

    const [picture, setPicture] = useState(null)
    const { startEditProfile } = useAuthStore()
    const navigate = useNavigate()

    const changeImage = (e) => {
        setPicture(e.target.files[0]);
    }

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            first_name: Yup.string().required('This field is required'),
            last_name: Yup.string().required('This field id required'),
            email: Yup.string().email('Invalid E-mail').required('The E-mail is required'),
            password: Yup.string().required('The password is required'),
        }),
        onSubmit: (data) => {
            const user = data;
            if(picture){
                user.avatar = picture;
            }
            console.log(user);
            startEditProfile(user)
            navigate('/edit-profile')
        }
    })

    return (
        <AuthLayout title={'Edit Profile'}>
            <form className="flex flex-col gap-5" onSubmit={ formik.handleSubmit }>
                <TextField
                    type="text"
                    id="first_name"
                    label="first_name"
                    name='first_name'
                    onChange={ formik.handleChange }
                    value={ formik.values.first_name }
                    error={ formik.errors.first_name }
                    color="success"
                    placeholder='your first name'
                />

                <TextField
                    type="text"
                    id="last_name"
                    label="last_name"
                    name='last_name'
                    onChange={ formik.handleChange }
                    value={ formik.values.last_name }
                    error={ formik.errors.last_name }
                    color="success"
                    placeholder='your last name'
                />

                <TextField
                    type="email"
                    id="email"
                    label="email"
                    name='email'
                    onChange={ formik.handleChange }
                    value={ formik.values.email }
                    error={ formik.errors.email }
                    color="success"
                    placeholder='example@gmai.com'
                />

                <TextField
                    type="password"
                    id="password"
                    label="password"
                    name='password'
                    onChange={ formik.handleChange }
                    value={ formik.values.password }
                    error={ formik.errors.password }
                    color="success"
                />

                <TextField
                    type="file"
                    id="avatar"
                    label="avatar"
                    name='avatar'
                    color="success"
                    onChange={ (e) => changeImage(e) }
                />

                <Button
                    variant='contained'
                    type='submit'
                >
                    Register
                </Button>

            </form>
        </AuthLayout>
    )
}

function initialValues() {
    return {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        avatar: null
    }
}