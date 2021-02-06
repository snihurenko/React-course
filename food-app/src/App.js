import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/Modaltem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';

function App() {

  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <div className="App">
        <GlobalStyle/>
        <Navbar/>
        <Order {...orders}/>
        <Menu {...openItem}/>
        { openItem.openItem && <ModalItem {...openItem} {...orders}/> }
      </div>
    </>
  );
}

export default App;
