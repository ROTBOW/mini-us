import Header from './header.jsx';
import {render, screen} from '@testing-library/react';

it('Renders correct text', () => {
    render(<Header/>);
    expect(screen.getByText('Created by'));
});


it('Has a hyperlink to my github', () => {
    render(<Header/>);

    expect(screen.findByText('Josiah Leon').href === 'https://github.com/ROTBOW');
});