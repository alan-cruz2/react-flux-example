import Search from "./Search";
import PlacesItems from "./PlacesItems";
import Detail from "./Detail";

import ItemStore from "../flux/ItemStore";
import ItemActions from "../flux/ItemActions";

let _getAppState = () => {
  return {
    items: ItemStore.getAll()
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = _getAppState();
    this.addItem = this.addItem.bind(this);
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  addItem(inputItem) {
    ItemActions.createItem(inputItem);
  }

  componentDidMount() {
    ItemActions.getAllItems();
    ItemStore.on("change", this.onStoreChange);
  }

  componentWillUnmount() {
    ItemStore.removeListener("change", this.onStoreChange);
  }

  onStoreChange() {
    this.setState(_getAppState());
  }

  render() {
    return (
      <div>
        <h3>GoPlaces</h3>
        <Search />
        <PlacesItems items={this.state.items} />
        <Detail addItem={this.addItem} />
        {this.state.items.length} Items
      </div>
    );
  }
}

export default App;
