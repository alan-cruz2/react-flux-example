import { get, post } from "jquery";

import ItemActions from "./ItemActions";

const API = {
  getAllItems() {
    console.log("1. In API");
    get("/api/data")
      .done(serverData => ItemActions.receiveItems(serverData))
      .fail(error => console.error(error))
  },

  createNewItem(inputItem) {
    post("/api/new", inputItem)
      .done(serverItem => console.log())
      .fail(error => console.error(error))
  }
};

export default API;
