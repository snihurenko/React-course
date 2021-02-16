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
  useTitle(openItem.openItem);

  return (
    <>
      <div className="App">
        <GlobalStyle/>
        <Navbar {...auth}/>
        <Order {...orders} {...openItem} {...auth} firebaseDatabase={firebase.database}/>
        <Menu {...openItem}/>
        { openItem.openItem && <ModalItem {...openItem} {...orders}/> }
      </div>
    </>
  );
}

export default App;
