import { render, screen } from '@testing-library/react';
import { Footer } from './';

describe('Footer component', () => {
  it('renders the component', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer-component')).toBeInTheDocument();
  });

  it('renders the header with text "Footer"', () => {
    render(<Footer />);
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});