import AppDispatcher from "./AppDispatcher";
import API from "./API";

const ItemActions = {
  receiveItems(items) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ITEMS',
      items
    });
  },
  receiveOneItem(item) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_ITEM',
      item
    });
  },
  getAllItems() {
    API.getAllItems();
  },
  createItem(inputItem) {
    API.createItem(inputItem);
  }
};

export default ItemActions;
