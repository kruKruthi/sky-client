import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubMenuPanel from './SubMenuPanel';
import { describe, expect, it } from 'vitest';

// Mock menu data
const mockMenu = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

describe('SubMenuPanel', () => {
  it('renders without crashing', () => {
    const { container } = render(<SubMenuPanel menu={[]} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders all menu items when provided', () => {
    render(<SubMenuPanel menu={mockMenu} />)

    mockMenu.forEach(item => {
      const link = screen.getByText(item.label)
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', item.href)
    })
  })

  it('does not render any links if menu is empty', () => {
    render(<SubMenuPanel menu={[]} />)
    const links = screen.queryAllByRole('link')
    expect(links.length).toBe(0)
  })

  it('renders custom content when provided', () => {
    render(
      <SubMenuPanel
        menu={[]}
        content={<div data-testid="custom-content">Hello World</div>}
      />
    )
    const content = screen.getByTestId('custom-content')
    expect(content).toBeInTheDocument()
    expect(content).toHaveTextContent('Hello World')
  })

  it('applies additional containerClassName', () => {
    const { container } = render(
      <SubMenuPanel menu={[]} containerClassName="my-custom-class" />
    )
    expect(container.firstChild).toHaveClass('my-custom-class')
  })
})
