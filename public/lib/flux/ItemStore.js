import { EventEmitter } from "events";
import AppDispatcher from "./AppDispatcher";

class ItemStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      console.log("3. Action dispatched", action);
    });
  }
  getAll() {

  }
}

export default new ItemStore();
