import React, { useState, useEffect } from "react";
import './calculator.scss';


const Calculator = () => {

    const [res, setRes] = useState(0);
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);

    const handleClick = (e) => {
        // console.log(e.target.value);
        // perfect... I can make a func to handle all clicks with this.
        // Thank you propagation
    }

    return (
        <div className="calc">
            <div className="calc-body" onClick={handleClick}>
                <div className="calc-res">{res}</div>

                <button className="calc-c" value='clear'>C</button>
                <button className="calc-plus" value='+'>+</button>
                <button className="calc-minus" value="-">-</button>
                <button className="calc-times" value="*">*</button>
                <button className="calc-div" value="/">/</button>
                <button className="calc-equals" value="=">=</button>

                <button className="calc-num-row1" value="7">7</button>
                <button className="calc-num-row1" value="8">8</button>
                <button className="calc-num-row1" value="9">9</button>

                <button className="calc-num-row2" value="4">4</button>
                <button className="calc-num-row2" value="5">5</button>
                <button className="calc-num-row2" value="6">6</button>

                <button className="calc-num-row3" value="1">1</button>
                <button className="calc-num-row3" value="2">2</button>
                <button className="calc-num-row3" value="3">3</button>
            </div>
        </div>
    )

};

export default Calculator;