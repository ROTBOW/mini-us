import React, {useState, useEffect} from 'react';
import './clock.scss';


const getTime = () => {
    let date = new Date();
    return [date.getHours(), date.getMinutes(), date.getSeconds()];
};


const Clock = () => {

    const [curTime, setCurTime] = useState(new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
    const [secDeg, setSecDeg] = useState(getTime()[2] * 6);
    const [minDeg, setMinDeg] = useState(getTime()[1] * 6);
    const [hourDeg, setHourDeg] = useState((getTime()[0] % 12) * 30);

    useEffect(() => {
        const clockInterval = setInterval(() => {
            let [h, m, s] = getTime()
            setSecDeg(s * 6);
            setMinDeg(m * 6);
            setHourDeg((h % 12) * 30);

            setCurTime(new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
        }, 1000);

        return () => clearInterval(clockInterval);
    }, [])

    const hourMarkers = () => {
        let markers = [];
        for (let i = 0; i < 160; i += 30 ) {
            markers.push(
                <div className='clock-hour-marker' style={{ transform: `rotate(${i}deg)` }} key={i}><div/></div>
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
                    <div className={`clock-hand clock-second ${[0, 360].includes(secDeg) ? "disable" : ""}`} style={{rotate: `${secDeg}deg`}}/>
                    <div className={`clock-hand clock-minute ${[0, 360].includes(minDeg) ? "disable" : ""}`} style={{rotate: `${minDeg}deg`}}/>
                    <div className={`clock-hand clock-hour ${[0, 360].includes(hourDeg) ? "disable" : ""}`} style={{rotate: `${hourDeg}deg`}}/>

                    <div className='clock-cap'/>
                </div>
            </div>
        </div>
    );
};

export default Clock;