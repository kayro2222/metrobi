import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders the header', () => {
    render(<App />);
    expect(screen.getByTestId('header-component')).toBeInTheDocument();
  });

  it('renders the main content', () => {
    render(<App />);
    expect(screen.getByTestId('main-component')).toBeInTheDocument();
    expect(screen.getByTestId('extra-component')).toBeInTheDocument();
    expect(screen.getByTestId('hero-component')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar-component')).toBeInTheDocument();
  });

  it('renders the related content', () => {
    render(<App />);
    expect(screen.getByTestId('images-component')).toBeInTheDocument();
    expect(screen.getByTestId('posts-component')).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<App />);
    expect(screen.getByTestId('footer-component')).toBeInTheDocument();
  });
});