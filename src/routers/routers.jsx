import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavLinkBox} from "../components/navLinkBox.jsx";
import {SignUp} from "../pages/sign-up.jsx";
import {PrivacyPolicy} from "../pages/privacy-policy.jsx";
import {SignIn} from "../pages/sign-in.jsx";
import {useProvider} from "../provider/provider.jsx";
import {User} from "../pages/user.jsx";
import {NotFoundPage} from "../pages/not-found.jsx";

export const Routers = () => {

    const {setIsUserPage} = useProvider().get;

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) setIsUserPage(true);
    }, []);

    const {isUserPage} = useProvider().get;
    return (
        <BrowserRouter>
            <NavLinkBox/>
            <Routes>
                {isUserPage ? (<Route path={'/users'} element={<User/>}/>)
                    : (
                    <>
                        <Route path={'/'} element={<SignIn/>}/>
                        <Route path={'/sign-up'} element={<SignUp/>}/>
                        <Route path={'/sign-up/privacy-policy'} element={<PrivacyPolicy/>}/>
                        <Route path={`*`} element={<NotFoundPage/>}/>
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
}
