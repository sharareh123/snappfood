import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import historySlice from './historySlice';
import categorySlice from './categorySlice';
import { saveToLocalStorage, loadFromLocalStorage } from './middleware';


const preloadedState = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    history: historySlice,
    restaurantTypes: categorySlice
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorage) // اضافه کردن middleware
});
 