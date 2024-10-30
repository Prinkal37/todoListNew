import React, { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
const Topbar = () => {
    const [time, setTime] = useState(new Date());
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const updateTime = () => {
        const currentTime = new Date();
        setTime(currentTime);

        const hour = currentTime.getHours();

        if (hour >= 5 && hour < 12) {
            setGreeting('Good Morning');
        } else if (hour >= 12 && hour < 17) {
            setGreeting('Good Afternoon');
        } else if (hour >= 17 && hour < 21) {
            setGreeting('Good Evening');
        } else {
            setGreeting('Good Night');
        }
        };

        const intervalId = setInterval(updateTime, 1000); // Update the time every second

        return () => clearInterval(intervalId); 
    }, []);


    return (
    <div className='border-b border-black py-2 px-3 flex justify-between items-center text-3xl select-none'>
        <div className=''>{greeting}</div>
        <CgProfile className='cursor-pointer' />
    </div>
    )
}

export default Topbar
