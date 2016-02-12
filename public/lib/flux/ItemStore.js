import { EventEmitter } from "events";
import AppDispatcher from "./AppDispatcher";

let _items = [];

class ItemStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_ITEMS':
          _items = action.items;
          this.emit("change");
          break;
        case 'RECEIVE_ONE_ITEM':
          _items.push(action.item);
          this.emit("change");
          break;
        default:
          // do nothing
      }
    });
  }
  getAll() {
    return _items;
  }
}

export default new ItemStore();
