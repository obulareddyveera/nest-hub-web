// src/components/HelloWorld.test.tsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello, World! text', () => {
  render(<App />);
  expect(screen.getByText(/hello, world!/i)).toBeInTheDocument();
});