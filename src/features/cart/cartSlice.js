import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    // cart: [],
    cart: [
      {
        pizzaId: 12,
        name: 'Mediterranean',
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
      },
      {
        pizzaId: 6,
        name: 'Vegetale',
        quantity: 1,
        unitPrice: 13,
        totalPrice: 13,
      },
      {
        pizzaId: 11,
        name: 'Spinach and Mushroom',
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
      },
    ],
  },
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const foundItem = state.cart.find((i) => i.pizzaId === item.pizzaId);
      if (foundItem) {
        foundItem.quantity += item.quantity;
        foundItem.totalPrice = foundItem.quantity * foundItem.unitPrice;
      } else {
        state.cart.push({
          ...item,
          totalPrice: item.unitPrice * item.quantity,
        });
      }
    },
    deleteItem(state, action) {
      const pizzaId = action.payload;
      const foundItem = state.cart.find((i) => i.pizzaId === pizzaId);
      if (foundItem) {
        state.cart = state.cart.filter((i) => i.pizzaId !== pizzaId);
      }
    },
    increaseItemQuantity(state, action) {
      const pizzaId = action.payload;
      const foundItem = state.cart.find((i) => i.pizzaId === pizzaId);
      if (foundItem) {
        foundItem.quantity++;
        foundItem.totalPrice = foundItem.quantity * foundItem.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      const pizzaId = action.payload;
      const foundItem = state.cart.find((i) => i.pizzaId === pizzaId);
      if (foundItem) {
        foundItem.quantity--;
        if (foundItem.quantity === 0) {
          cartSlice.caseReducers.deleteItem(state, action);
        } else {
          foundItem.totalPrice = foundItem.quantity * foundItem.unitPrice;
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

// useSelectors can cause performance issues so you can use reselect library to create memoized selectors
export const getTotalCartPrice = (state) => {
  return state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);
};

export const getTotalCartQuantity = (state) => {
  return state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);
};

export const getCart = (state) => {
  return state.cart.cart;
};

export const getCurrentQuantity = (id) => (state) => {
  const cart = state.cart.cart;
  return cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};
