import React, { useState, useEffect } from "react";
import './calculator.scss';


const Calculator = () => {

    const [res, setRes] = useState('0');
    const [val1, setVal1] = useState('0');
    const [val2, setVal2] = useState('0');
    const [whichVal, setWhichVal] = useState(true);

    /**
     * The function "clear" resets the values of "res", "val1", "val2", and "whichVal" to '0' and true
     * respectively.
     */
    const clear = () => {
        setRes('0');
        setVal1('0');
        setVal2('0');
        setWhichVal(true);
    };

    /**
     * The function `add_num` takes a number as input and updates a value in state by adding the input
     * number to it.
     */
    const add_num = (num) => {
        let setVal = whichVal ? setVal1 : setVal2;
        setVal(val => {
            val = val+num
            val = Number(val)
            val = String(val)

            setRes(val)
            return val
        })
    };

    const handleClick = (e) => {
        // console.log(e.target.value);
        // perfect... I can make a func to handle all clicks with this.
        // Thank you propagation
        let targetValue = e.target.value;

        if (targetValue === 'clear') {
            clear()
            return
        } else if (targetValue === undefined) {
            return
        }

        if ('1234567890'.includes(targetValue)) {
            add_num(targetValue)
        } else {
            console.log(targetValue);
        }

    }

    return (
        <div className="calc">
            <div className="calc-body" onClick={handleClick}>
                <div className="calc-res">{res}</div>

                <button className="calc-row0" value='clear'>C</button>
                <button className="calc-div" value="/">/</button>

                <button className="calc-row1" value="7">7</button>
                <button className="calc-row1" value="8">8</button>
                <button className="calc-row1" value="9">9</button>
                <button className="calc-row1" value="*">*</button>

                <button className="calc-row2" value="4">4</button>
                <button className="calc-row2" value="5">5</button>
                <button className="calc-row2" value="6">6</button>
                <button className="calc-row2" value="-">-</button>

                <button className="calc-row3" value="1">1</button>
                <button className="calc-row3" value="2">2</button>
                <button className="calc-row3" value="3">3</button>
                <button className="calc-row3" value='+'>+</button>

                <button className="calc-row4" value="0">0</button>
                <button className="calc-row4" value=".">.</button>
                <button className="calc-row4" value="±">±</button>
                <button className="calc-row4" value="=">=</button>
            </div>
        </div>
    )

};

export default Calculator;