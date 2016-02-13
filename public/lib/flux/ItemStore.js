import AppDispatcher from "./AppDispatcher";
import { ReduceStore } from "flux/utils";

class ItemStore extends ReduceStore {
  getInitialState() {
    return {
      rawItems: [],
      items: []
    }
  }
  reduce(state, action) {
    switch (action.type) {
      case 'RECEIVE_ITEMS':
        return {
          rawItems: action.items,
          items: action.items
        };
      case 'RECEIVE_ONE_ITEM':
        return {
          rawItems: state.rawItems.concat(action.item),
          items: state.items.concat(action.item)
        };
      case 'SEARCH':
        return {
          rawItems: state.rawItems,
          items: state.rawItems.filter(item => item.title.indexOf(action.query) >= 0)
        }
      default:
        return state;
    }
  }
}

export default new ItemStore(AppDispatcher);
