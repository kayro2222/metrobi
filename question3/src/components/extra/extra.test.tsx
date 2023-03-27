import { render, screen } from '@testing-library/react';
import { Extra } from './';

describe('Extra component', () => {
  it('renders the component', () => {
    render(<Extra />);
    expect(screen.getByTestId('extra-component')).toBeInTheDocument();
  });

  it('renders the header with text "Extra Content"', () => {
    render(<Extra />);
    expect(screen.getByText('Extra Content')).toBeInTheDocument();
  });
});