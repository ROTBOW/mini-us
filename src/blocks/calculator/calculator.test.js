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
    fireEvent.click(equalsButton);

    expect(screen.getByText('6'));
});


it('Performs division correctly', () => {
    render(<Calculator/>);
    const numButton1 = screen.getByText('6');
    const numButton2 = screen.getByText('3');
    const divideButton = screen.getByText('/');
    const equalsButton = screen.getByText('=');

    fireEvent.click(numButton1);
    fireEvent.click(divideButton);
    fireEvent.click(numButton2);
    fireEvent.click(equalsButton);

    expect(screen.getByText('2'));
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
    fireEvent.click(addButton);
    fireEvent.click(numButton2);
    fireEvent.click(equalsButton);

    expect(screen.getByText('5'));
});

it('Performs subtraction correctly', () => {
    render(<Calculator/>);
    const numButton1 = screen.getByText('5');
    const numButton2 = screen.getByText('2');
    const subtractButton = screen.getByText('-');
    const equalsButton = screen.getByText('=');

    fireEvent.click(numButton1);
    fireEvent.click(subtractButton);
    fireEvent.click(numButton2);
    fireEvent.click(equalsButton);

    expect(screen.getByText('3'));
});
