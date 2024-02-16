import React, {useEffect} from 'react';
import {RiEyeFill} from "react-icons/ri";
import {PiEyeClosedBold} from "react-icons/pi";
import {useProvider} from "../../provider/provider.jsx";

export const Password = ({name, value, setValue, show, setShow}) => {

    useEffect(() => {
        setValue('');
        setShow(false);
    }, []);

    return (
        <div className={`registration relative`}>
            <input className={`registration-input`}
                   type={show ? "text" : "password"}
                   placeholder={`${name}`}
                   value={value}
                   onChange={(e) => setValue(e.target.value.replace(/[\s]+/g, ''))}
                   required
            />
            <div className={`password-icon`}
                 onClick={() => setShow(!show)}
            >
                {show ? <RiEyeFill/> : <PiEyeClosedBold/>}
            </div>
        </div>
    );
}


