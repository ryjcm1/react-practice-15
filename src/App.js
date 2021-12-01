import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import { uiActions } from "./store/ui-slice";
import {sendCartData } from "./store/cart-slice"

let isInitial = true;

function App() {
  const toggleCart = useSelector((state) => state.ui.cartVisibility);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial){
      isInitial = false
      return;
    }
    dispatch(sendCartData(cart))
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {toggleCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
