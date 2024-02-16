import {TbLockCancel, TbLockOpen} from "react-icons/tb";
import {MdDelete} from "react-icons/md";
import axios from "axios";
import {useProvider} from "../provider/provider.jsx";
import React, {useEffect} from "react";
import {Pagination} from "../components/pagination.jsx";

export const User = () => {

    const {formatDate, data, setData, selectedUsers, setSelectedUsers, serverUrl, currentRows} = useProvider().get;

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
                    await axios.post(url, {userId, status});
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

    return (
        <div className={`box`}>
            <div className={`first-level-box`}>
                <div className={`second-level-box`}>
                    <div className={`table-box`}>
                        <div className={`icon-container`}>
                            <div className={`icons`}
                                 onClick={clickBlocked}><TbLockCancel/></div>
                            <div className={`icons`}
                                 onClick={clickUnblock}><TbLockOpen/></div>
                            <div className={`icons`}
                                 onClick={clickDelete}><MdDelete/></div>
                        </div>
                        <div className={`table-container`}>
                            <table className={`table`}>
                                <thead>
                                <tr className={`bg-slate-900`}>
                                    <th className={`table-header-checkbox`}>
                                        <input className={`w-6 h-6 mt-4`}
                                               type="checkbox"
                                               onChange={handleSelectAll}/>
                                    </th>
                                    <th className={`table-header`}>Name<br/>Position</th>
                                    <th className={`table-header`}>Email</th>
                                    <th className={`table-header`}>Last login</th>
                                    <th className={`table-header`}>Status</th>
                                </tr>
                                </thead>
                                <tbody className={`table-body`}>
                                {currentRows.length > 0 ? (
                                    currentRows.map((items, index) => {
                                        return (
                                            <tr className={`table-row`}
                                                key={index}>
                                                <th className={`table-body-header-checkbox`}>
                                                    <input className={`w-4 h-4`}
                                                           type="checkbox"
                                                           checked={selectedUsers[index]}
                                                           onChange={() => handleUserSelect(index)}/>
                                                </th>
                                                <td>{items.username}<br/>{items.position}</td>
                                                <td>{items.email}</td>
                                                <td>{formatDate(items.lastLogin)}</td>
                                                <td>{items.status}</td>
                                            </tr>)
                                    })
                                ) : (
                                    <tr className={`table-row`}>
                                        <td colSpan={5} className={`p-1`}>Not data</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                        <Pagination/>
                    </div>
                </div>

            </div>
        </div>);
};

