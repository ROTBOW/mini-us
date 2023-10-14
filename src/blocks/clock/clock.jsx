import React, {useState, useEffect} from 'react';
import './clock.scss';


const getTime = () => {
    let date = new Date();
    return [date.getHours(), date.getMinutes(), date.getSeconds()];
};


const Clock = () => {

    const [curTime, setCurTime] = useState(new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))

    useEffect(() => {
        const clockInterval = setInterval(() => {
            let t = getTime()

            setCurTime(new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
        }, 1000);

        return () => clearInterval(clockInterval);
    }, [])

    const hourMarkers = () => {
        let markers = [];
        for (let i = 0; i < 160; i += 30 ) {
            markers.push(
                <div className='clock-hour-marker' style={{ transform: `rotate(${i}deg)` }}><div/></div>
            );
        };
        return markers;
    };

    return (
        <div className='clock-container'>
            <div className='clock-back-block'>
                <div className='clock-face'>
                    {hourMarkers()}
                    <div className='clock-digital'>{curTime}</div>
                    <div className='clock-hand clock-second'/>
                    {/* <div className='clock-minute'/>
                    <div className='clock-hour'/> */}

                    <div className='clock-cap'/>
                </div>
            </div>
        </div>
    );
};

export default Clock;