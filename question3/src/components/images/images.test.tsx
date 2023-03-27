import { render, screen } from '@testing-library/react';
import { Images } from './';

describe('Images component', () => {
  it('renders the component', () => {
    render(<Images />);
    expect(screen.getByTestId('images-component')).toBeInTheDocument();
  });

  it('renders the component with text "Related Images"', () => {
    render(<Images />);
    expect(screen.getByText('Related Images')).toBeInTheDocument();
  });
});