import React, {useEffect} from 'react';
import {TbLockCancel, TbLockOpen} from "react-icons/tb";
import {MdDelete} from "react-icons/md";
import {Table, TableBody, TableBodyRow, TableData, TableHead, TableHeader,
    TableHeaderCheckbox, TableHeaderDouble, TableHeadRow,
} from "../table-style.jsx";
import axios from "axios";
import {useProvider} from "../provider/provider.jsx";

export const User = () => {

    const {formatDate, data, setData, selectedUsers, setSelectedUsers, serverUrl} = useProvider().get;

    useEffect(() => {
        fetch(`${serverUrl}/table`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, []);

    const updateData = async (url, status) => {
        try {
            for (let i = 0; i < selectedUsers.length; i++) {
                if (selectedUsers[i]) {
                    const userId = data[i].id;
                    await axios.post(url, {
                        userId,
                        status
                    });
                }
            }
            const response = await axios.get(`${serverUrl}/table`);
            setData(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const clickBlocked = () => updateData(`${serverUrl}/update-status`, 'Blocked');
    const clickUnblock = () => updateData(`${serverUrl}/update-status`, 'Active');
    const clickDelete = () => updateData(`${serverUrl}/delete-user`);

    const handleUserSelect = (index) => {
        const newSelectedUsers = [...selectedUsers];
        newSelectedUsers[index] = !newSelectedUsers[index];
        setSelectedUsers(newSelectedUsers);
    };

    const handleSelectAll = (e) => {
        const newSelectedUsers = data.map(() => e.target.checked);
        setSelectedUsers(newSelectedUsers);
    };

    return (<div className={`flex justify-center w-full h-screen`}>
        <div className={`absolute flex flex-row top-[140px] left-[350px] space-x-12 text-[35px]`}>
            <div className={`icons`} onClick={clickBlocked}><TbLockCancel/></div>
            <div className={`icons`}><TbLockOpen onClick={clickUnblock}/></div>
            <div className={`icons`}><MdDelete onClick={clickDelete}/></div>
        </div>
        <div className="box">
            <div className="flex justify-center w-[850px] h-[500px] mt-40 bg-black border-2
            border-red-600 rounded-lg">
                <Table>
                    <TableHead>
                        <TableHeadRow>
                            <TableHeaderCheckbox>
                                <input className={`w-6 h-6 mt-6`}
                                       type="checkbox"
                                       onChange={handleSelectAll}/>
                            </TableHeaderCheckbox>
                            <TableHeaderDouble nameOne={`Name`} nameTwo={`Position`}/>
                            <TableHeader name={`Email`}/>
                            <TableHeader name={`Last login`}/>
                            <TableHeader name={`Status`}/>
                        </TableHeadRow>
                    </TableHead>
                    <TableBody>
                        {data.map((items, index) => {
                            return (<TableBodyRow key={index}>
                                <TableHeaderCheckbox>
                                    <input className={`w-4 h-4`}
                                           type="checkbox"
                                           checked={selectedUsers[index]}
                                           onChange={() => handleUserSelect(index)}/>
                                </TableHeaderCheckbox>
                                <TableData>{items.username}<br/>{items.position}</TableData>
                                <TableData>{items.email}</TableData>
                                <TableData>{formatDate(items.lastLogin)}</TableData>
                                <TableData>{items.status}</TableData>
                            </TableBodyRow>)
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    </div>);
};
