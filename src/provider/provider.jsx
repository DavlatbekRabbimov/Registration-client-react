import React, {createContext, useContext, useState} from "react";

const Context = createContext();
export const Provider = ({children}) => {

    const serverUrl = 'https://registration-server-2pfl.onrender.com';

    const [username, setUsername] = useState("");
    const [position, setPosition] = useState("");
    const [positions, setPositions] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
    const [checked, setChecked] = useState(false);
    const [isUserPage, setIsUserPage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [authUser, setAuthUser] = useState('');

    const handleChangeValue = (e, setValue, regex) => {
        let value = e.target.value;
        if (value !== "") value = value.replace(regex, "");
        setValue(value);
    }

    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        return new Date(dateString).toLocaleString('en-US', options);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);


    const get = {
        password, confirmPassword, setPassword, setConfirmPassword,
        isShowPassword, isShowConfirmPassword, setIsShowPassword, setIsShowConfirmPassword,
        username, setUsername, position, setPosition, positions, setPositions, serverUrl,
        email, setEmail, checked, setChecked, isUserPage, setIsUserPage, loading, setLoading,
        data, setData, selectedUsers, setSelectedUsers, authUser, setAuthUser, currentPage, setCurrentPage,
        rowsPerPage, currentRows, handleChangeValue, formatDate

    }

    return (
        <Context.Provider value={{get}}>
            {children}
        </Context.Provider>
    )
}

export function useProvider() {
    return useContext(Context);
}
