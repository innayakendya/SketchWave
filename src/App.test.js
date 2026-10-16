// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SketchWave title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SketchWave/i);
    expect(titleElement).toBeInTheDocument();
});
