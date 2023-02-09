import { Fragment, useState } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {
 const [cartIsShown, setCardIsShown] = useState(false);

 const showCartHandler = () => {
  setCardIsShown(true);
 };

 const hideCartHandler = () => {
  setCardIsShown(false);
 };


  return (
    <Fragment>
     {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
    <main>
      <Meals/>
    </main>
    </Fragment>

  );
}

export default App;
