import { render, screen, within } from '@testing-library/react';
import HeroBanner from './HeroBanner';
import { describe, it, expect } from 'vitest';

describe('HeroBanner', () => {
  it('renders desktop text content correctly', () => {
    render(<HeroBanner />);

    const desktopContent = screen.getByTestId('desktop-content');
    
    expect(within(desktopContent).getByText(/Sky, Netflix and discovery/i)).toBeInTheDocument();
    expect(within(desktopContent).getByText(/500Mbps Full Fibre Broadband/i)).toBeInTheDocument();
    
    expect(within(desktopContent).getByRole('button', { name: /buy now/i })).toBeInTheDocument();
    expect(within(desktopContent).getByRole('button', { name: /see all deals/i })).toBeInTheDocument();
  });

  it('renders mobile text content correctly', () => {
    render(<HeroBanner />);

    const mobileContent = screen.getByTestId('mobile-content');
    
    expect(within(mobileContent).getByText('Our lowest price is back')).toBeInTheDocument();
    expect(within(mobileContent).getByText('Sky Essential TV & Sky Full Fibre')).toBeInTheDocument();
    expect(within(mobileContent).getByText(/300Mbps Full Fibre Broadband/i)).toBeInTheDocument();
    
    expect(within(mobileContent).getByRole('button', { name: /buy now/i })).toBeInTheDocument();
    expect(within(mobileContent).getByRole('button', { name: /see all deals/i })).toBeInTheDocument();
  });
});
