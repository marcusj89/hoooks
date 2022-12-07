import React, { useContext, useEffect } from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#ff0044',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext(themes.light);

const Subscribe = () => {
  return (
    <>
      <h1>useContext</h1>
      <p>
        Accepts a context object and returns the current context value. A
        component calling useContext will always re-render when the context
        value changes. If re-rendering is expensize you can optimize it using
        memoization. useContext(MyContext) only lets you read the context and
        subscribe to its changes.
      </p>

      <ThemeContext.Provider value={themes.dark}>
        <Button />
      </ThemeContext.Provider>
    </>
  );
};

export default Subscribe;

function Button() {
  const theme = useContext(ThemeContext);
  return (
    <button
      style={{
        background: theme.background,
        color: theme.foreground,
      }}
    >
      button
    </button>
  );
}
