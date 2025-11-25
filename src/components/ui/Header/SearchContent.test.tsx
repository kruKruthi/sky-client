import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchContent from './SearchContent';
import { vi, describe, expect, it } from 'vitest';

describe('SearchContent', () => {
  it('renders search input and buttons', () => {
    const mockClose = vi.fn();
    render(<SearchContent onClose={mockClose} />);

    // Input
    expect(screen.getByPlaceholderText('Enter your search')).toBeInTheDocument();

    // Buttons
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();

    // You can skip the SVG check, or optionally:
    // expect(screen.getByText('Close').closest('button')).toContainElement(screen.getByTestId('icon-x'));
  });

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup();
    const mockClose = vi.fn();

    render(<SearchContent onClose={mockClose} />);

    const closeBtn = screen.getByRole('button', { name: /close/i });
    await user.click(closeBtn);

    expect(mockClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose if search button is clicked', async () => {
    const user = userEvent.setup();
    const mockClose = vi.fn();

    render(<SearchContent onClose={mockClose} />);

    const searchBtn = screen.getByRole('button', { name: /search/i });
    await user.click(searchBtn);

    expect(mockClose).not.toHaveBeenCalled();
  });
});
