import React from 'react';
import HomePage from './components/HomePage';
import { ThemeContextProvider } from './themeContext.jsx';

function App() {
  return (
    <ThemeContextProvider>
      <HomePage />
    </ThemeContextProvider>
  );
}

export default App;
