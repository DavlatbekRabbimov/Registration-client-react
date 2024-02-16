import React, {useEffect} from 'react';
import {RiEyeFill} from "react-icons/ri";
import {PiEyeClosedBold} from "react-icons/pi";
<<<<<<< HEAD
=======
import {useProvider} from "../../provider/provider.jsx";
>>>>>>> c8f99f312a02c889f7ba7458ed4e4c05af1086c6

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


