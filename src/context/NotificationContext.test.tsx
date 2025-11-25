import { render, screen, waitFor, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { NotificationContextProvider, NotificationContext } from './NotificationContext';
import { useContext } from 'react';

const TestComponent = () => {
  const context = useContext(NotificationContext);

  if (!context) return <div>No context</div>;

  const { notification, setNotification } = context;

  return (
    <div>
      <div data-testid="notification">{notification}</div>
      <button onClick={() => setNotification('Test Notification')}>Update Notification</button>
    </div>
  );
};

describe('NotificationContextProvider', () => {
  it('provides default notification value as null', () => {
    render(
      <NotificationContextProvider>
        <TestComponent />
      </NotificationContextProvider>
    );

    const notificationDiv = screen.getByTestId('notification');
    expect(notificationDiv).toHaveTextContent(''); // because null renders as empty string
  });

  it('updates notification value when setNotification is called', async () => {
    render(
      <NotificationContextProvider>
        <TestComponent />
      </NotificationContextProvider>
    );

    const button = screen.getByRole('button', { name: 'Update Notification' });

    // Ensure state update happens inside act
    await act(async () => {
      button.click();
    });

    await waitFor(() => {
      const notificationDiv = screen.getByTestId('notification');
      expect(notificationDiv).toHaveTextContent('Test Notification');
    });
  });

  it('returns undefined context if used outside provider', () => {
    const TestWithoutProvider = () => {
      const context = useContext(NotificationContext);
      return <div>{context ? 'Has context' : 'No context'}</div>;
    };

    render(<TestWithoutProvider />);
    expect(screen.getByText('No context')).toBeInTheDocument();
  });
});
