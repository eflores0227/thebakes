import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from './Navbar/navbar';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
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
      <Navbar/>
      <div>Hello The Bakes</div>
    </>
  );
}

export default App;
