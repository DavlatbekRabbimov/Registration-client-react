import React, {useEffect} from 'react';
import {useProvider} from "../../provider/provider.jsx";

export const Email = () => {

    const {email, setEmail, handleChangeValue} = useProvider().get;

    useEffect(() => {
        setEmail("");
    }, []);

    return (
        <div className={`registration`}>
            <input className={`registration-input`}
                   type={`email`}
                   value={email}
                   onChange={(e) => handleChangeValue(e, setEmail, /[а-яА-Я!#$%&*+=]/g)}
                   placeholder={`E-mail`}
                   required
            />
        </div>
    );
}
