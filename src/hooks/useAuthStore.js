import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { clienteAxios } from "../config/axios"
import { onChecking, onLogin, onLogout } from "../store/auth/authSlice"

export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const startRegister = async (user) => {
        dispatch(onChecking())
        try {
            await clienteAxios.post('/auth/register', user)
            toast.success('Registered Successfully')
            dispatch(onLogout)
        } catch (error) {
            console.log(error);
            let errors = error.response.data.errors
            errors.forEach(err => {
                toast.error(err.msg)
            });
        }

    }

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking())
        try {
            const { data } = await clienteAxios.post('/auth/login', { email, password })
            const { user } = data;
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin(user));
            toast.success('Authenticated successfully')
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.msg)
            dispatch( onLogout() )
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( onLogout() );

        try {
            const { data } = await clienteAxios.get('auth/renew');
            const { user } = data
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin(user) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    const startEditProfile = async({first_name, last_name, username, email, avatar}) => {
        const {_id} = user

        const formData = new FormData()
        formData.append('first_name', first_name)
        formData.append('last_name', last_name)
        formData.append('username', username)
        formData.append('email', email)
        formData.append('avatar', avatar)
        
        try {
            const { data } = await clienteAxios.put(`/users/${ _id }`, formData)
            dispatch( onLogin( data.user ) )
            toast.success(`${data.msg}`)
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong, Try again')
            navigate('/')
        }
    }

    const startDeleteProfile = async(id) => {
        const {_id} = user;

        try {
            const { data } = await clienteAxios.delete(`/users/${ _id }`)
            toast.success(data.msg)
            dispatch( onLogout() )
        } catch (error) {
            console.log(error);
            toast.success('Something went wrong, try again')
        }

    }

    return {
        status,
        user,
        errorMessage,
        startRegister,
        startLogin,
        checkAuthToken,
        startEditProfile,
        startDeleteProfile
    }

}