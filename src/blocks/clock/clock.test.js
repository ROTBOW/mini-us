import Clock from './clock';
import {render, screen} from '@testing-library/react';

it('displays the current time via digital screen', () => {
    render(<Clock/>)

    expect(screen.findByText(new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })))
});

it('has the second hand at the right angle', () => {
    render(<Clock/>);
    const secDeg = new Date().getSeconds() * 6;
    const secondHand = screen.getByTestId('clock-second');
    expect(secondHand.style.transform === `rotate(${secDeg}deg)`);
});

it('has the minute hand at the right angle', () => {
    render(<Clock/>);
    const minDeg = new Date().getMinutes() * 6;
    const minuteHand = screen.getByTestId('clock-minute');
    expect(minuteHand.style.transform === `rotate(${minDeg}deg)`);
});

it('has the hour hand at the right angle', () => {
    render(<Clock/>);
    const hourDeg = new Date().getHours() * 30;
    const hourHand = screen.getByTestId('clock-hour');
    expect(hourHand.style.transform === `rotate(${hourDeg}deg)`);
});
