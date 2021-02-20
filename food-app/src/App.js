import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { Navbar } from './Components/Navbar/Navbar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/Modaltem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { useDB } from './Components/Hooks/useDB';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';

const firebaseConfig = {
  apiKey: "AIzaSyAe1mrxOlPGU7AbsoPvZG6HH_ZntKlzC8k",
  authDomain: "food-app-3fc7f.firebaseapp.com",
  databaseURL: "https://food-app-3fc7f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "food-app-3fc7f",
  storageBucket: "food-app-3fc7f.appspot.com",
  messagingSenderId: "423810949017",
  appId: "1:423810949017:web:1357bce3c978723f36bd08"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const database = firebase.database();
  const dbMenu = useDB(database);
  const orderConfirm = useOrderConfirm();

  useTitle(openItem.openItem);

  return (
    <Context.Provider value={{
      auth,
      openItem,
      dbMenu,
      orders,
      orderConfirm,
      database
    }}>
      <div className="App">
        <GlobalStyle/>
        <Navbar/>
        <Order/>
        <Menu/>
        { openItem.openItem && <ModalItem/> }
        { orderConfirm.openOrderConfirm && <OrderConfirm/> }
      </div>
    </Context.Provider>
  );
}

export default App;
