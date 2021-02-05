import React from 'react';
import { Navbar } from './Components/Navbar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle';
import { ModalItem } from './Components/Modaltem';
import { Order } from './Components/Order';

function App() {

  const [openItem, setOpenItem] = React.useState(null);

  return (
    <>
      <div className="App">
        <GlobalStyle/>
        <Navbar/>
        <Order/>
        <Menu setOpenItem={setOpenItem}/>
        <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
      </div>
    </>
  );
}

export default App;
