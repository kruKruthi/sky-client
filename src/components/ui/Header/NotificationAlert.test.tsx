import { render, screen } from '@testing-library/react';
import NotificationAlert from './NotificationAlert';
import { describe, it, expect } from 'vitest';

describe('NotificationAlert', () => {
  it('renders the main message', () => {
    const message = 'Primary message';
    render(<NotificationAlert message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('does not render subMessage when not provided', () => {
    const message = 'Only primary';
    render(<NotificationAlert message={message} />);

    // subMessage text should not be present when not provided
    expect(screen.queryByText(/secondary|details/i)).toBeNull();
  });

  it('renders subMessage when provided', () => {
    const message = 'Primary';
    const subMessage = 'Secondary details';
    render(<NotificationAlert message={message} subMessage={subMessage} />);

    expect(screen.getByText(subMessage)).toBeInTheDocument();
  });
});
