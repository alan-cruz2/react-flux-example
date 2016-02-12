import AppDispatcher from "./AppDispatcher";
import { ReduceStore } from "flux/utils";

class ItemStore extends ReduceStore {
  getInitialState() {
    return [];
  }
  reduce(state, action) {
    switch (action.type) {
      case 'RECEIVE_ITEMS':
        return action.items;
      case 'RECEIVE_ONE_ITEM':
        return state.concat(action.item);
      default:
        return state;
    }
  }
}

export default new ItemStore(AppDispatcher);
