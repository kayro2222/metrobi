import { render, screen } from '@testing-library/react';
import { Main } from './';

describe('Main component', () => {
  it('renders the component', () => {
    render(<Main />);
    expect(screen.getByTestId('main-component')).toBeInTheDocument();
  });

  it('renders the header with text "Main Content"', () => {
    render(<Main />);
    expect(screen.getByText('Main Content')).toBeInTheDocument();
  });

  it('renders the paragraph with text "**If things do not look right, make sure your browser is in "Experimental Mode"."', () => {
    render(<Main />);
    expect(screen.getByText('**If things do not look right, make sure your browser is in "Experimental Mode".')).toBeInTheDocument();
  });
});