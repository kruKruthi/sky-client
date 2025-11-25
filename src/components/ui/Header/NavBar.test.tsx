import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
// (no React import required with the automatic JSX runtime in this setup)

const mockOnItemChange = vi.fn();

// Mock the NavItem component so we can inspect labels and trigger onItemChange easily.
// Vitest requires the factory to return an object; include a `default` key for the default export.
vi.mock('./NavItem', () => ({
  default: (props: any) => {
    const { item, onItemChange } = props;
    return (
      <button data-testid={`navitem-${item.label}`} onClick={() => onItemChange(item)}>
        {item.label}
      </button>
    );
  },
}));

// Mock the hook module that NavBar uses
vi.mock('../../../graphql/hooks', () => ({
  useHeaderMenus: vi.fn(),
}));

import NavBar, { navItems } from './NavBar';
import { useHeaderMenus } from '../../../graphql/hooks';

describe('NavBar', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders static navItems when headerMenus is undefined', () => {
  (useHeaderMenus as any).mockReturnValue({ headerMenus: undefined });
    render(<NavBar openItem={null} onItemChange={mockOnItemChange} />);

    // Static items such as "Watch" and "TV" should be present
    expect(screen.getByText('Watch')).toBeInTheDocument();
    expect(screen.getByText('TV')).toBeInTheDocument();

    // Number of rendered nav items should equal exported navItems length
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(navItems.length);
  });

  it('renders headerMenus provided by the hook', () => {
    const headerMenus = [{ label: 'Custom', href: '/custom' }];
  (useHeaderMenus as any).mockReturnValue({ headerMenus });
    render(<NavBar openItem={null} onItemChange={mockOnItemChange} />);

    expect(screen.getByText('Custom')).toBeInTheDocument();
    // Ensure a static menu item is not shown
    expect(screen.queryByText('Watch')).not.toBeInTheDocument();
  });

  it('calls onItemChange with the clicked item', () => {
  (useHeaderMenus as any).mockReturnValue({ headerMenus: undefined });
    render(<NavBar openItem={null} onItemChange={mockOnItemChange} />);

    const watchButton = screen.getByTestId('navitem-Watch');
    fireEvent.click(watchButton);

    expect(mockOnItemChange).toHaveBeenCalledWith(navItems[0]);
  });
});
