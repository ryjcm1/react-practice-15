import {createSlice} from '@reduxjs/toolkit'

const initialCartState = {title: 'Test Item' , quantity: 0, total: 0 , price: 6}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addOne(state){
            state.quantity ++
            state.total += 6
        },
        removeOne(state){
            state.quantity --
            state.total -= 6
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer