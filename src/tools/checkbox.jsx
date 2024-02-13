import React from 'react';
import {useProvider} from "../provider/provider.jsx";

export const Checkbox = () => {
    const {checked, setChecked} = useProvider().get;
    return (
        <div className={`w-4 h-4 mt-1 ml-2 border-2 ${checked ? 'bg-red-950' : 'bg-white'}`}
             onClick={() => setChecked(!checked)}></div>
    );
}
