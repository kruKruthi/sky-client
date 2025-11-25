import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Logo from './Logo';

describe('Logo component', () => {
  it('renders the logo image', () => {
    render(<Logo />);
    const img = screen.getByAltText('Sky');
    expect(img).toBeInTheDocument();
  });

  it('has the correct image source', () => {
    render(<Logo />);
    const img = screen.getByAltText('Sky') as HTMLImageElement;
    expect(img.src).toContain('sky-logo'); // The built path will contain this name
  });

  it('is wrapped in a link to "/"', () => {
    render(<Logo />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });
});
