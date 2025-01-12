import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

describe('Counter', () => {
  it('renders the counter and increments correctly', () => {
    render(<Counter />);
    
    // Check initial state
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
    
    // Click button and verify increment
    const button = screen.getByText('Increment');
    fireEvent.click(button);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});