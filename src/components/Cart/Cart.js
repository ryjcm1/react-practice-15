import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector } from 'react-redux'

const Cart = (props) => {

  const currentCart = useSelector((state) => state.cart)


  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {currentCart.quantity >= 1 && <CartItem
          item={{ title: currentCart.title, quantity: currentCart.quantity, total: currentCart.total, price: currentCart.price}}
        />}
        {currentCart.quantity < 1 && <p>No items in the cart currently</p>}
      </ul>
    </Card>
  );
};

export default Cart;
