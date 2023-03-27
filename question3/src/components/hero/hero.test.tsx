import { render, screen } from '@testing-library/react';
import { Hero } from './';

describe('Hero component', () => {
  it('renders the component', () => {
    render(<Hero />);
    expect(screen.getByTestId('hero-component')).toBeInTheDocument();
  });

  it('renders the component with text "Hero"', () => {
    render(<Hero />);
    expect(screen.getByText('Hero')).toBeInTheDocument();
  });
});