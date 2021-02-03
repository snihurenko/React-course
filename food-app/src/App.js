import { Navbar } from './Components/Navbar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle';


function App() {
  return (
    <>
      <div className="App">
        <GlobalStyle/>
        <Navbar/>
        <Menu/>
      </div>
    </>
  );
}

export default App;
