import React, { useState } from "react";
import './calculator.scss';


const Calculator = () => {

    const [res, setRes] = useState('0');
    const [val1, setVal1] = useState('0');
    const [val2, setVal2] = useState('0');
    const [whichVal, setWhichVal] = useState('');

    /**
     * The function "clear" resets the values of "res", "val1", "val2", and "whichVal" to '0' and true
     * respectively.
     */
    const clear = () => {
        setRes('0');
        setVal1('0');
        setVal2('0');
        setWhichVal('');
    };

    /**
     * The function `addNum` takes a number as input and updates a value in state by adding the input
     * number to it.
     */
    const addNum = (num) => {
        let setVal = whichVal === '' ? setVal1 : setVal2;
        setVal(val => {
            val = val+num;
            val = String(Number(val));

            setRes(val);
            return val;
        });
    };

    /**
     * The flipPolarity function flips the sign of a value and updates the result.
     */
    const flipPolarity = () => {
        let setVal = whichVal === '' ? setVal1 : setVal2;
        setVal(val => {
            val = String(-1 * Number(val))
            setRes(val);
            return val;
        });
    };

    /**
     * The function "backspace" is used to delete the last digit of a number and update the result
     * accordingly.
     */
    const backspace = () => {
        let setVal = whichVal === '' ? setVal1 : setVal2;

        setVal(val => {
            setRes(Math.floor(val/10));
            return Math.floor(val/10);
        });
    };


    /**
     * The function "solve" evaluates an expression using the values "val1", "val2", and "whichVal",
     * updates "val1" and "val2" accordingly, and returns the result.
     * @returns The function `solve` returns the result of the evaluation of `val1 + whichVal + val2`.
     */
    const solve = () => {
        if (whichVal === '') { return null };
        setRes(() => {
            let val;

            switch(whichVal) {
                case '+':
                    val = Number(val1) + Number(val2)
                    break;

                case '-':
                    val = Number(val1) - Number(val2)
                    break;

                case '*':
                    val = Number(val1) * Number(val2)
                    break;

                case '/':
                    val = Number(val1) / Number(val2)
                    break;
            }
            
            setVal1(val);
            setVal2('0');

            return eval(val);
        });
    };


    /**
     * The handleClick function handles different button clicks and performs corresponding actions
     * based on the clicked button value.
     * @returns nothing (undefined) in most cases. However, if the targetValue is 'clear' or
     * 'backspace', the function will call the clear() or backspace() functions respectively and then
     * return.
     */
    const handleClick = (e) => {
        let targetValue = e.target.value;

        if (targetValue === 'clear') {
            clear()
            return
        } else if (targetValue === 'backspace') {
            backspace()
            return
        } else if (targetValue === undefined) {
            return
        }

        if ('1234567890'.includes(targetValue)) {
            addNum(targetValue);
        } else if ('±' === targetValue) {
            flipPolarity();
        } else if ('-+*/'.includes(targetValue)) {
            setWhichVal(targetValue);
        } else {
            solve()
        }

    }

    return (
        <div className="calc-block">
            <div className="calc-body" onClick={handleClick}>
                <div className="calc-res">{res}</div>

                <button className="calc-row0" value='clear'>C</button>
                <button className="calc-row0" value='backspace'>←</button>
                <button className={`calc-div ${whichVal === '/' ? 'active' : ''}`} value="/">/</button>

                <button className="calc-row1" value="7">7</button>
                <button className="calc-row1" value="8">8</button>
                <button className="calc-row1" value="9">9</button>
                <button className={`calc-row1 ${whichVal === '*' ? 'active' : ''}`} value="*">*</button>

                <button className="calc-row2" value="4">4</button>
                <button className="calc-row2" value="5">5</button>
                <button className="calc-row2" value="6">6</button>
                <button className={`calc-row2 ${whichVal === '-' ? 'active' : ''}`} value="-">-</button>

                <button className="calc-row3" value="1">1</button>
                <button className="calc-row3" value="2">2</button>
                <button className="calc-row3" value="3">3</button>
                <button className={`calc-row3 ${whichVal === '+' ? 'active' : ''}`} value='+'>+</button>

                <button className="calc-row4" value="0">0</button>
                <button className="calc-row4" value="±">±</button>
                <button className="calc-row4" style={{gridColumn: 4}} value="=">=</button>
            </div>
        </div>
    )

};

export default Calculator;