import { render, screen } from '@testing-library/react';
import { Posts } from './';

describe('Posts component', () => {
  it('renders the component', () => {
    render(<Posts />);
    expect(screen.getByTestId('posts-component')).toBeInTheDocument();
  });

  it('renders the header with text "Related Posts"', () => {
    render(<Posts />);
    expect(screen.getByText('Related Posts')).toBeInTheDocument();
  });
});
