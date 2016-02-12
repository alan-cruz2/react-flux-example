import { get, post } from "jquery";

import ItemActions from "./ItemActions";

const API = {
  getAllItems() {
    get("/api/data")
      .done(serverData => ItemActions.receiveItems(serverData.items))
      .fail(error => console.error(error))
  },

  createItem(inputItem) {
    post("/api/new", inputItem)
      .done(serverItem => ItemActions.receiveOneItem(serverItem))
      .fail(error => console.error(error))
  }
};

export default API;
