// reducers/cartReducer.js
export const initialState = {
  items: [],
  total: 0,
  isCorrect: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.payload;
      // Check if the item is already in the cart
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If the item is already in the cart, update its quantity
        const updatedItems = state.items.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          total: state.total + newItem.price * newItem.quantity,
        };
      } else {
        // If the item is not in the cart, add it
        return {
          ...state,
          items: [...state.items, newItem],
          total: state.total + newItem.price * newItem.quantity,
        };
      }

    case "REMOVE_FROM_CART":
      // Handle removing item from the cart
      const itemIdToRemove = action.payload;
      const updatedItems = state.items.filter(
        (item) => item.id !== itemIdToRemove
      );
      const updatedTotal = updatedItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return {
        ...state,
        items: updatedItems,
        total: updatedTotal,
      };

    case "CREATE_PRODUCT":
      return {
        ...state,
        isCorrect: action.payload.isCorrect,
      };
    default:
      return state;
  }
};

export default cartReducer;
