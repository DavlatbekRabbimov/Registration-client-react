import React from 'react';
import {Checkbox} from "../tools/checkbox.jsx";
import {Link, useNavigate} from "react-router-dom";
import {Password} from "../components/login/password.jsx";
import {Email} from "../components/login/email.jsx";
import {Username} from "../components/login/username.jsx";
import {useProvider} from "../provider/provider.jsx";
import {Title} from "../tools/title.jsx";
import {Button} from "../tools/button.jsx";
import {Position} from "../components/login/position.jsx";
import {ErrorMsg, SuccessMsg} from "../notification/custom-notification.jsx";
import axios from "axios";

export const SignUp = () => {

    const navigate = useNavigate();

    const {
        password, confirmPassword, checked, username, email, position, serverUrl,
        setPassword, setConfirmPassword, setIsShowPassword, setIsShowConfirmPassword,
        isShowPassword, isShowConfirmPassword
    } = useProvider().get;

    const data = {username, position, email, password, confirmPassword};

    const clickRegisterButton = async () => {
        const errorCheck = (condition, message) => condition ? ErrorMsg(message) : false;
        if (errorCheck(password !== confirmPassword, 'Error: Passwords do not match!')) return;
        if (errorCheck(!checked, 'Error: Please agree to the terms and conditions!')) return;
        try {
            const response = await axios.post(`${serverUrl}/sign-up`, {...data});
            const message = response.data.message
            if (response.status >= 400 && response.status < 500) ErrorMsg(message);
            if (response.status === 200 || response.status === 201) SuccessMsg(message);
            navigate('/');
        } catch (error) {
            ErrorMsg(error.response.data.message);
            console.error(error.response.data.message);
        }
    };

    return (
        <div className={`box`}>
            <div className={`box-container`}>
                <div className={`col-container text-[20px]`}>
                    <Title name={`USER REGISTRATION`}/>
                    <div className={`input-container`}>
                        <Username/>
                        <Position/>
                        <Email/>
                        <div className={`col-container`}>
                            <Password name={`Password`}
                                      value={password}
                                      setValue={setPassword}
                                      show={isShowPassword}
                                      setShow={setIsShowPassword}
                            />
                            <Password name={`Confirm password`}
                                      value={confirmPassword}
                                      setValue={setConfirmPassword}
                                      show={isShowConfirmPassword}
                                      setShow={setIsShowConfirmPassword}
                            />
                        </div>
                        <div className={`flex w-full ml-32 pt-4 space-x-1 text-[15px] 
                        text-blue-500 hover:text-blue-300`}>
                            <Checkbox/>
                            <Link to={`/sign-up/privacy-policy`} target={"_blank"}>Privacy policy</Link>
                        </div>
                        <Button name={`Register`}
                                onClick={clickRegisterButton}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

