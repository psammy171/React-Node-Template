import Home from '../Views/Home';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import ForgotPassword from '../Auth/ForgotPassword';
import Field from '../Views/Field';
import Error from '../Views/Error';
import { Routes, Route, Outlet } from "react-router-dom";
import ResetPassword from '../Auth/ResetPassword';
import Footer from '../Global/Footer';
import Header from '../Global/Header';
import Profile from '../Auth/Profile';
import Products from '../Views/Products';
import Services from '../Views/Services';

const Routs = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<><Header/><Outlet/><Footer/></>}>
                    <Route path='' element={<Home />} />
                    <Route path='products' element={<Products />}/>
                    <Route path='services' element={<Services />} />
                    <Route path='field' element={<Field />} />
                </Route>
                <Route path="/auth" element={<><Outlet /><Footer/></>}>
                    <Route index element={<Error />} />
                    <Route path='login' element={<Login />}/>
                    <Route path='signup' element={<Signup />}/>
                    <Route path='profile' element={<Profile />} />
                    <Route path='forgot-password' element={<ForgotPassword />} />
                    <Route path='reset-password' exact element={<ResetPassword />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes> 
        </>
    )
}

export default Routs;