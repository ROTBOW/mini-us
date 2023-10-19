import React, {useState, useRef} from "react";
import './redButton.scss';


const RedButton = () => {

    const [countDown, setCountDown] = useState(10);
    const [counting, setCounting] = useState(false);
    const [countClass, setCountClass] = useState('');

    const countRef = useRef(countDown);
    countRef.current = countDown;

    /**
     * The handleClick function is a timer that counts down from a specified number and updates the
     * countdown display until it reaches 1, at which point it displays a message.
     */
    const handleClick = (e) => {
        e.preventDefault();
        if (counting !== false) { return }
        setCounting(true);
        e.target.classList.add('redbutton-actived')

        const tick = () => {
            setTimeout(() => {
                
                setCountDown(count => count-1)

                if (countRef.current > 1) { 
                    tick();
                } else {
                    e.target.classList.add('redbutton-poof')
                    setCountDown('Silly Goose');
                    setCountClass('redButton-blaring');
                }
            }, 1000);
        }
        tick();
    };


    return (
        <div className="redbutton-block">
            
            <div className="redbutton-base">
                <div/>
                <button onClick={handleClick}></button>
            </div>
            
            <div className={`redbutton-counter ${countClass}`}>{countDown}</div>
        </div>
    )

};


export default RedButton;