import { render, screen } from '@testing-library/react';
import { Header } from './';

describe('Header component', () => {
  it('renders the component', () => {
    render(<Header />);
    expect(screen.getByTestId('header-component')).toBeInTheDocument();
  });

  it('renders the component with text "Header"', () => {
    render(<Header />);
    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});