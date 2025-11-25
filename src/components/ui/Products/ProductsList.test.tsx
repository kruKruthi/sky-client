import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductsList from './ProductsList';
import { MemoryRouter } from 'react-router-dom';
import { NotificationContext } from '../../../context/NotificationContext';
import * as hooks from '../../../graphql/hooks';

const mockSetNotification = vi.fn();
const notificationValue = {
  notification: { title: 'Test Notification' },
  setNotification: mockSetNotification,
};

const productsMock = [
  { id: '1', title: 'Product 1', description: 'Desc 1', images: [] },
  { id: '2', title: 'Product 2', description: 'Desc 2', images: [] },
];

describe('ProductsList', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders loading state', () => {
  vi.spyOn(hooks, 'useProducts').mockReturnValue({ loading: true, error: undefined, products: [] });
    render(
      <MemoryRouter>
        <ProductsList />
      </MemoryRouter>
    );
    expect(screen.getByText(/Loading products/i)).toBeInTheDocument();
  });

  it('renders error state', () => {
  vi.spyOn(hooks, 'useProducts').mockReturnValue({ loading: false, error: new Error('Failed to load'), products: [] });
    render(
      <MemoryRouter>
        <ProductsList />
      </MemoryRouter>
    );
    expect(screen.getByText(/Error loading products/i)).toBeInTheDocument();
  });

  it('renders notification banner when notification is set', () => {
  vi.spyOn(hooks, 'useProducts').mockReturnValue({ loading: false, error: undefined, products: productsMock });
    render(
      <MemoryRouter>
        <NotificationContext.Provider value={notificationValue}>
          <ProductsList />
        </NotificationContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText(/Test Notification/i)).toBeInTheDocument();
  });

  it('renders ProductCard components for products', () => {
  vi.spyOn(hooks, 'useProducts').mockReturnValue({ loading: false, error: undefined, products: productsMock });
    render(
      <MemoryRouter>
        <NotificationContext.Provider value={notificationValue}>
          <ProductsList />
        </NotificationContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('calls setNotification on mount', () => {
  vi.spyOn(hooks, 'useProducts').mockReturnValue({ loading: false, error: undefined, products: productsMock });
    render(
      <MemoryRouter>
        <NotificationContext.Provider value={notificationValue}>
          <ProductsList />
        </NotificationContext.Provider>
      </MemoryRouter>
    );
    expect(mockSetNotification).toHaveBeenCalled();
  });
});
