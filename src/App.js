import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Poiret One', cursive;
  }
`

function App() {
  return (
    <>
    <GlobalStyle />
      <h1>The Bakes!</h1>
      <div>Hello The Bakes</div>
    </>
  );
}

export default App;
