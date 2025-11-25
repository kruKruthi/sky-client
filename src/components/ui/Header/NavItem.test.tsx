import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import NavItem from './NavItem';
import type { NavItem as NavItemType } from './types';

// ✅ Mock NavItem data
const mockItem: NavItemType = {
  label: 'Products',
  submenus: [
    { label: 'Laptops' },
    { label: 'Phones' },
  ],
};

describe('NavItem component', () => {
  it('renders the item label', () => {
    render(<NavItem item={mockItem} openItem={null} onItemChange={() => {}} />);
    expect(screen.getByText('Products')).toBeInTheDocument();
  });

  it('shows ChevronDown when item is closed', () => {
    render(<NavItem item={mockItem} openItem={null} onItemChange={() => {}} />);
    expect(screen.getByTestId('chevron-down')).toBeInTheDocument();
  });

  it('shows ChevronUp when item is open', () => {
    render(<NavItem item={mockItem} openItem={mockItem} onItemChange={() => {}} />);
    expect(screen.getByTestId('chevron-up')).toBeInTheDocument();
  });

  it('calls onItemChange(item) when clicking ChevronDown', async () => {
    const user = userEvent.setup();
    const onItemChange = vi.fn();

    render(<NavItem item={mockItem} openItem={null} onItemChange={onItemChange} />);

    const chevron = screen.getByTestId('chevron-down');
    await user.click(chevron);

    expect(onItemChange).toHaveBeenCalledWith(mockItem);
  });

  it('calls onItemChange(null) when clicking ChevronUp', async () => {
    const user = userEvent.setup();
    const onItemChange = vi.fn();

    render(<NavItem item={mockItem} openItem={mockItem} onItemChange={onItemChange} />);

    const chevron = screen.getByTestId('chevron-up');
    await user.click(chevron);

    expect(onItemChange).toHaveBeenCalledWith(null);
  });
});
