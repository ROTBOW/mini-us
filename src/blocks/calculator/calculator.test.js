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
