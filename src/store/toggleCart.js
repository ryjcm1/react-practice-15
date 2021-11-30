import {createSlice} from '@reduxjs/toolkit'

const toggleCartSlice = createSlice({
    name: 'cartVisibility',
    initialState: {cartVisibility : false},
    reducers: {
        toggle(state){
            state.cartVisibility = !state.cartVisibility
        }
    }
})

export const toggleCartActions = toggleCartSlice.actions

export default toggleCartSlice.reducer