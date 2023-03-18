import Home from '../Views/Home';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import ForgotPassword from '../Auth/ForgotPassword';
import Field from '../Views/Field';
import Error from './Error';
import { Routes, Route, Outlet } from "react-router-dom";
import ResetPassword from '../Auth/ResetPassword';
import Profile from '../Auth/Profile';
import Products from '../Views/Products';
import Services from '../Views/Services';
import Skeleton from './Skeleton';
import Finance from '../Finance/Finance';

const Routs = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Skeleton><Outlet/></Skeleton>}>
                    <Route path='' element={<Home />} />
                    <Route path='products' element={<Products />}/>
                    <Route path='services' element={<Services />} />
                    <Route path='field' element={<Field />} />
                </Route>
                <Route path="/auth" element={<Skeleton><Outlet /></Skeleton>}>
                    <Route index element={<Error />} />
                    <Route path='login' element={<Login />}/>
                    <Route path='signup' element={<Signup />}/>
                    <Route path='profile' element={<Profile />} />
                    <Route path='forgot-password' element={<ForgotPassword />} />
                    <Route path='reset-password' exact element={<ResetPassword />} />
                </Route>
                <Route path="/finance" element={<Skeleton><Outlet/></Skeleton>}>
                    <Route index element={<Finance />} />
                </Route>
                <Route path="*" element={<Skeleton><Error /></Skeleton>} />
            </Routes> 
        </>
    )
}

export default Routs;