import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [clock, setClock] = useState(0);

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClock(date.toLocaleTimeString());
        }, 1000);
    }, [])


    return (
        <div><h1>{clock}</h1></div>
    );
};

export default Clock;