import Calculator from "./calculator";
import {render, screen, fireEvent} from '@testing-library/react';

it('Res div to start with two 0s', () => {
    render(<Calculator/>);

    expect(screen.findAllByText('0').length === 2);
});


it('Calculator has all its buttons', () => {
    const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', 'C', '±'];
    render(<Calculator/>);

    expect(screen.findAllByText('0').length === 2);
    buttons.forEach(button => expect(screen.getByText(button)));
});

it('Clears the calculator', () => {
    render(<Calculator/>);
    const numButton = screen.getByText('6');
    const clearButton = screen.getByText('C');

    fireEvent.click(numButton);
    fireEvent.click(clearButton);

    expect(screen.findAllByText('0').length === 2);
});

it('Flips between positive and negative', () => {
    render(<Calculator/>);
    const flipButton = screen.getByText('±');
    const numButton = screen.getByText('1');
    fireEvent.click(numButton);
    fireEvent.click(flipButton);
    expect(screen.getByText('-1'));
    fireEvent.click(flipButton);
    expect(screen.findByText('1'));
});

it('Performs multiplication correctly', () => {
    render(<Calculator/>);
    const numButton1 = screen.getByText('2');
    const numButton2 = screen.getByText('3');
    const multiplyButton = screen.getByText('*');
    const equalsButton = screen.getByText('=');

    fireEvent.click(numButton1);
    fireEvent.click(multiplyButton);
    fireEvent.click(numButton2);
    fireEvent.click(numButton2);
    fireEvent.click(equalsButton);

    expect(screen.findByText('66'));
});


it('Performs division correctly', () => {
    render(<Calculator/>);
    const numButton1 = screen.getByText('6');
    const numButton2 = screen.getByText('3');
    const divideButton = screen.getByText('/');
    const equalsButton = screen.getByText('=');

    fireEvent.click(numButton1);
    fireEvent.click(numButton1);
    fireEvent.click(divideButton);
    fireEvent.click(numButton2);
    fireEvent.click(equalsButton);

    expect(screen.findByText('22'));
});

it('Handles division by zero', () => {
    render(<Calculator/>);
    const numButton = screen.getByText('6');
    const zeroButton = screen.getAllByText('0')[1];
    const divideButton = screen.getByText('/');
    const equalsButton = screen.getByText('=');

    fireEvent.click(numButton);
    fireEvent.click(divideButton);
    fireEvent.click(zeroButton);
    fireEvent.click(equalsButton);

    expect(screen.findByText('Infinity'));
});

it('Performs addition correctly', () => {
    render(<Calculator/>);
    const numButton1 = screen.getByText('2');
    const numButton2 = screen.getByText('3');
    const addButton = screen.getByText('+');
    const equalsButton = screen.getByText('=');

    fireEvent.click(numButton1);
    fireEvent.click(numButton1);
    fireEvent.click(addButton);
    fireEvent.click(numButton2);
    fireEvent.click(equalsButton);

    expect(screen.findByText('25'));
});

it('Performs subtraction correctly', () => {
    render(<Calculator/>);
    const numButton1 = screen.getByText('5');
    const numButton2 = screen.getByText('2');
    const subtractButton = screen.getByText('-');
    const equalsButton = screen.getByText('=');

    fireEvent.click(numButton2);
    fireEvent.click(numButton1);
    fireEvent.click(subtractButton);
    fireEvent.click(numButton2);
    fireEvent.click(equalsButton);

    expect(screen.findByText('23'));
});

it('Confirms the backspace function', () => {
    render(<Calculator/>);
    const button6 = screen.getByText('6');
    const button7 = screen.getByText('7');
    const button8 = screen.getByText('8');
    const backspaceButton = screen.getByText('←');

    fireEvent.click(button6);
    fireEvent.click(button7);
    fireEvent.click(button8);
    fireEvent.click(backspaceButton);

    expect(screen.findByText('67'));
});

it('Performs chained calculations correctly', () => {
    render(<Calculator/>);
    const numButton1 = screen.getByText('2');
    const numButton2 = screen.getByText('3');
    const addButton = screen.getByText('+');
    const equalsButton = screen.getByText('=');
    const subtractButton = screen.getByText('-');
    const multiplyButton = screen.getByText('*');
    const divideButton = screen.getByText('/');
    
    fireEvent.click(numButton1);
    fireEvent.click(numButton1);
    fireEvent.click(addButton);
    fireEvent.click(numButton2);
    fireEvent.click(equalsButton);
    fireEvent.click(subtractButton);
    fireEvent.click(numButton1);
    fireEvent.click(numButton1);
    fireEvent.click(multiplyButton);
    fireEvent.click(numButton2);
    fireEvent.click(equalsButton);
    fireEvent.click(divideButton);
    fireEvent.click(numButton2);
    fireEvent.click(equalsButton);

    expect(screen.findByText('5.5'));
});

it('can backspace a negative number', () => {
    render(<Calculator/>);
    const button6 = screen.getByText('6');
    const button7 = screen.getByText('7');
    const button8 = screen.getByText('8');
    const backspaceButton = screen.getByText('←');
    const flipPolarityButton = screen.getByText('±');
    
    fireEvent.click(flipPolarityButton);
    fireEvent.click(button6);
    fireEvent.click(button7);
    fireEvent.click(button8);
    fireEvent.click(backspaceButton);
    
    expect(screen.findByText('-67'));
});

it('can minus a negative number left side', () => {
    render(<Calculator/>);
    const button6 = screen.getByText('6');
    const button7 = screen.getByText('7');
    const subtractButton = screen.getByText('-');
    const equalsButton = screen.getByText('=');
    const flipPolarityButton = screen.getByText('±');
    
    fireEvent.click(button6);
    fireEvent.click(flipPolarityButton);
    fireEvent.click(subtractButton);
    fireEvent.click(button7);
    fireEvent.click(equalsButton);
    
    expect(screen.findByText('-13'));
});

it('can minus a negative number right side', () => {
    render(<Calculator/>);
    const button6 = screen.getByText('6');
    const button7 = screen.getByText('7');
    const subtractButton = screen.getByText('-');
    const equalsButton = screen.getByText('=');
    const flipPolarityButton = screen.getByText('±');
    
    fireEvent.click(button6);
    fireEvent.click(subtractButton);
    fireEvent.click(button7);
    fireEvent.click(flipPolarityButton);
    fireEvent.click(equalsButton);
    
    expect(screen.findByText('13'));
});
