import React from 'react';
import {useNavigate} from "react-router-dom";
import {Email} from "../components/login/email.jsx";
import {Password} from "../components/login/password.jsx";
import {useProvider} from "../provider/provider.jsx";
import {Button} from "../tools/button.jsx";
import axios from "axios";
import {ErrorMsg, SuccessMsg} from "../notification/custom-notification.jsx";
import {Title} from "../tools/title.jsx";

export const SignIn = () => {

    const {password, setPassword, isShowPassword, setIsShowPassword,
        serverUrl, email, setIsUserPage, setAuthUser} = useProvider().get;
    const data = {password, email};
    const navigate = useNavigate();
    const clickSignUp = () => {
        navigate('/sign-up');
    }
    const clickSignIn = async () => {
        try {
            const response = await axios.post(`${serverUrl}/sign-in`, {...data});
            const message = response.data.message
            if (response.status >= 400 && response.status < 500) ErrorMsg(message);
            if (response.status === 200 || response.status === 201) SuccessMsg(message);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.username);
            setIsUserPage(true);
            setAuthUser(response.data.username);
            navigate('/users');
        } catch (error) {
            ErrorMsg(error.response.data.message);
            console.error(error.response.data.message);
        }
    }

    return (
        <div className={`box`}>
            <div className={`box-container`}>
                <div className={`col-container text-[20px]`}>
                    <Title name={`LOGIN PAGE`}/>
                    <div className={`input-container`}>
                        <Email/>
                        <Password name={`Password`}
                                  value={password}
                                  setValue={setPassword}
                                  show={isShowPassword}
                                  setShow={setIsShowPassword}
                        />
                        <div className={`flex flex-row w-full`}>
                            <Button name={`Sign in`} onClick={clickSignIn}/>
                            <Button name={`Sign up`} onClick={clickSignUp}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
