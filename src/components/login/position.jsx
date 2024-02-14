import React, {useEffect} from 'react';
import {useProvider} from "../../provider/provider.jsx";
import axios from "axios";
export const Position = () => {

    const {position, setPosition, positions, setPositions, serverUrl} = useProvider().get;

    React.useLayoutEffect(() => {
        setPosition('');
    }, [location.pathname]);

    useEffect(() => {
        const data = async () => {
            try {
                const res = await axios.get(`${serverUrl}/positions`);
                setPositions(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        data();
    }, [positions]);

    return (
        <div className={`registration`}>
            <select className={`selector`} value={position}
                    onChange={(e) => setPosition(e.target.value)}
            >
                <option value="" disabled>Position</option>
                {positions.map((pos, index) => (
                    <option key={index} value={pos}>{pos}</option>
                ))}
            </select>
        </div>
    );
}
