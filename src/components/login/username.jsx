import React, {useEffect} from 'react';
import {useProvider} from "../../provider/provider.jsx";

export const Username = () => {

    const {username, setUsername, handleChangeValue} = useProvider().get;

    useEffect(() => {
        setUsername("");
    }, []);

    return (
        <div className={`registration`}>
            <input className={`registration-input`}
                   value={username}
                   onChange={(e) => handleChangeValue(e, setUsername, /[!#$%&*+=]/g)}
                   placeholder={`Username`}
                   required
            />
        </div>
    );
}
