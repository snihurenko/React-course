import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
  }

  *, 
  *::before,
  *::after{
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    font-size: 0px;
    color: black;
  }

  a {
    text-decoration: none;
    color: inherit
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3 {
    padding: 0;
    margin: 0;
    font-family: 'Pacifico', cursive;
  }
`;

function App() {
  return (
    <div>
      <div className="App">
        <GlobalStyle/>
        <p>Hello React</p>
        <h1>Here we are</h1>
      </div>
    </div>
  );
}

export default App;
