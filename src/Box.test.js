import { render, screen } from '@testing-library/react';
import Box from './Box';

it("renders without crashing", () => {
    render(<Box />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});