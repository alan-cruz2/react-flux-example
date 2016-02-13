import Search from "./Search";
import PlacesItems from "./PlacesItems";
import Detail from "./Detail";

import ItemStore from "../flux/ItemStore";
import ItemActions from "../flux/ItemActions";
import { Container } from "flux/utils";

class App extends React.Component {
  static getStores() {
    return [ItemStore];
  }

  static calculateState(prevState) {
    return {
      items: ItemStore.getState().items,
      total: ItemStore.getState().rawItems.length
    };
  }

  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
  }

  addItem(inputItem) {
    ItemActions.createItem(inputItem);
  }

  componentDidMount() {
    ItemActions.getAllItems();
  }

  render() {
    return (
      <div>
        <h3>GoPlaces</h3>
        <Search />
        <PlacesItems items={this.state.items} />
        <Detail addItem={this.addItem} />
        {this.state.total} Items
      </div>
    );
  }
}

export default Container.create(App);
