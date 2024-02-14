import React, {useEffect} from 'react';
import {useProvider} from "../../provider/provider.jsx";
export const Position = () => {

    const {position, setPosition, positions, setPositions} = useProvider().get;

    React.useLayoutEffect(() => {
        setPosition('');
    }, [location.pathname]);

    useEffect(() => {
        fetch('positions-list.json')
            .then(response => response.json())
            .then(data => {
                Array.isArray(data.positions)
                    ? setPositions(data.positions)
                    : console.error('data.positions is not an array');
            });
    }, []);

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
