import AppDispatcher from "./AppDispatcher";

const ItemActions = {
  receiveItems(items) {
    console.log("2. In Actions");
    console.log(items);
    AppDispatcher.dispatch({
      type: 'RECEIVE_ITEMS',
      items
    });
  }
};

export default ItemActions;
