import React, {useEffect} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import logo from '../assets/logo.png';
import {useProvider} from "../provider/provider.jsx";

export const NavLinkBox = () => {

    const {isUserPage, setIsUserPage, authUser, setAuthUser} = useProvider().get;
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) setAuthUser(storedUsername);
    }, [setIsUserPage]);

    const clickLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setAuthUser('');
        setIsUserPage(false);
        navigate("/");
    }

    return (
        <div className="absolute flex justify-between w-full p-6 bg-black
        border-t-red-600 border-b-red-600 border-t-2 border-b-2">
            <img className={`pl-10 w-[100px] h-[60px]`} src={logo} alt={`logo`}/>
            <div className="flex space-x-6 pr-10 mt-3 text-2xl font-extralight">

                {
                    isUserPage
                        ? (<>
                            <span className={`mt-2 text-yellow-400`}>{authUser}</span>
                            <button className={`nav-links`}
                                    onClick={clickLogout}>Logout</button>
                        </>)
                        : <NavLink to="/" className={`nav-links`}>Login</NavLink>
                }
            </div>
        </div>
    );
}
