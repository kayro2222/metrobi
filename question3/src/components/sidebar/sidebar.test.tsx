import { render, screen } from '@testing-library/react';
import { Sidebar } from './';

describe('Sidebar component', () => {
  it('renders the component', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar-component')).toBeInTheDocument();
  });

  it('renders the header with text "Sidebar"', () => {
    render(<Sidebar />);
    expect(screen.getByText('Sidebar')).toBeInTheDocument();
  });
});