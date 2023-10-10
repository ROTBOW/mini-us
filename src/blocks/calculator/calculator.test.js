import Calculator from "./calculator";
import {render, screen} from '@testing-library/react';

it('Res div to start with two 0s', () => {
    render(<Calculator/>);

    expect(screen.findAllByText('0').length === 2);
});

// it('')