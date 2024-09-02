import { createSlice } from "@reduxjs/toolkit";
import Pizza from '../../public/images/fastfood_image/pitza-margarita.jpg'


const historySlice = createSlice({
  name: 'history',
  initialState:[
    {
      userId:1,
      historyCart: []
    }
  ],
  reducers:{
    addToHistory : (state, action) => {
      const {payload} = action
      const {item,totalPrice,userId}= payload
      const index = state.findIndex(user => user.userId === userId)
      state[index].historyCart.push({
        id: Math.floor(Math.random()*1000),
        item,
        totalPrice,
        status:'در حال ارسال'
      })
    },
    clearHistory: (state) => {
      state.historyCart = [];
    }

  }
})

export const {addToHistory, clearHistory} = historySlice.actions;
export default historySlice.reducer