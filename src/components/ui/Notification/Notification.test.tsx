// src/components/__tests__/NotificationBanner.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import NotificationBanner from './Notification';
import { describe, it, expect, vi } from 'vitest';

describe('NotificationBanner', () => {
  const title = 'This is a test banner';

  it('renders the banner with the provided title', () => {
    render(<NotificationBanner title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders the close (X) button', () => {
    render(<NotificationBanner title={title} />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onCloseMock = vi.fn();
    render(<NotificationBanner title={title} onClose={onCloseMock} />);

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('does not crash when onClose is not provided', () => {
    render(<NotificationBanner title={title} />);

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    // No error should occur and button should still be in the document
    expect(closeButton).toBeInTheDocument();
  });
});
