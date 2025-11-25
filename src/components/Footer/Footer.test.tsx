import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { describe, it, expect } from 'vitest';

describe('Footer component', () => {
  it('renders Sky logo with correct alt text', () => {
    render(<Footer />);
    const logo = screen.getByAltText('Sky');
    expect(logo).toBeInTheDocument();
  });

  it('renders the copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 Sky UK/i)).toBeInTheDocument();
  });

  it('renders all the footer links', () => {
    render(<Footer />);
    const linkTexts = [
      'Privacy options',
      'Terms & conditions',
      'Privacy & cookies notice',
      'Accessibility',
      'Site map',
      'Contact us',
      'Complaints',
      'Sky Group',
      'Store locator'
    ];

    linkTexts.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('renders the desktop country dropdown', () => {
    render(<Footer />);
    const label = screen.getAllByText(/Country:/i);
    const dropdowns = screen.getAllByRole('combobox');
    
    // There are 2 country dropdowns (mobile and desktop)
    expect(label.length).toBe(2);
    expect(dropdowns.length).toBe(2);

    dropdowns.forEach(dropdown => {
      expect(dropdown).toBeInTheDocument();
      expect(dropdown).toHaveDisplayValue('UK');
    });
  });

  it('has country options: UK, US, India', () => {
    render(<Footer />);
    const options = screen.getAllByRole('option');
    const optionValues = options.map(opt => opt.textContent);

    expect(optionValues).toEqual(expect.arrayContaining(['UK', 'US', 'India']));
  });
});
