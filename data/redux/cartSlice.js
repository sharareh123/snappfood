
import { createSlice } from "@reduxjs/toolkit";
import Pizza from '../../public/images/fastfood_image/pitza-margarita.jpg'


const cartSlice = createSlice ({
  name: 'cart',
  initialState:{
    userId:1,
    cart: [] 
    },
  reducers:{
      addToCart : (state, action) => {
        const {payload} = action
        const index = state.cart.findIndex(item => item.id === payload.id)
        const isNotFound = index === -1
        if (isNotFound) {
          state.cart.push({... payload, count:1})
        } else {
          state.cart[index].count +=1
        }
      },
      decreaseItem : (state,action) => {
        const {payload} = action
        const index = state.cart.findIndex(item => item.id === payload)
        state.cart[index].count -=1
      },
      removeItem : (state,action) => {
        const {payload} = action
        const index = state.cart.findIndex(item => item.id === payload)
        state.cart.splice(index,1)
      },
      reset : (state) => {
        state.cart.length ===0
      }
  }
})

export const {addToCart,decreaseItem,removeItem,reset} = cartSlice.actions;
export default cartSlice.reducer