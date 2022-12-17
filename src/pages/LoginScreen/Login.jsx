import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { AuthLayout } from '../../components/layout/AuthLayout'
import * as Yup from 'yup';
import { useAuthStore } from '../../hooks/useAuthStore';

export const Login = () => {

    const { startLogin } = useAuthStore()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid E-mail').required('The E-mail is required'),
            password: Yup.string().required('The password is required'),
        }),
        onSubmit: (data) => {
            startLogin(data)
        }
    })

    return (
        <AuthLayout title={'Sign In'}>
            <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                <TextField
                    type="email"
                    id="email"
                    label="email"
                    name='email'
                    placeholder='example@gmail.com'
                    onChange={ formik.handleChange }
                    value={ formik.values.email }
                    error={ formik.errors.email }
                    color='success'
                />

                <TextField
                    type="password"
                    id="password"
                    label="password"
                    name='password'
                    color='success'
                    onChange={ formik.handleChange }
                    value={ formik.values.password }
                    error={ formik.errors.password }
                />

                <Button
                    variant='contained'
                    type='submit'
                >
                    Sign In
                </Button>

            </form>
        </AuthLayout>
    )
}

function initialValues() {
    return {
        email: '',
        password: '',
    }
}