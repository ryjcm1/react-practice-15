
import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cart'
import toggleCartReducer from './toggleCart'

const store = configureStore({
    reducer: {toggleCart: toggleCartReducer, cart: cartReducer }
})

export default store