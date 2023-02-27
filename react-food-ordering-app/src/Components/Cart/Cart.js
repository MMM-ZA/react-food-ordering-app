import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
 const cartCtx = useContext(CartContext)

 const cartItemAddHandler = (item) => {};

 const cartItemRemoveHandler = (id) => {};

   const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
  const cartItems = (
    <ul className={classes['cart-items']}>
     {cartCtx.map((item) => (
      <CartItem key={item.id}
       name={item.name}
        amount={item.amount}
         price={item.price}
         onRemove={cartItemRemoveHandler.bind(null,item)}
         onAdd={cartItemAddHandler.bind(null,item)}/>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
