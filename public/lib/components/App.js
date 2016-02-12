import Search from "./Search";
import PlacesItems from "./PlacesItems";
import Detail from "./Detail";

import ItemStore from "../flux/ItemStore";

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
    // post("/api/new", inputItem)
    //   .done(serverItem => {
    //     this.setState({
    //       items: this.state.items.concat(serverItem)
    //     })
    //   });
  }

  componentDidMount() {
    // get("/api/data")
    //   .done(data => this.setState(data));
    ItemStore.on("change", this.onStoreChange);
  }

  componentWillUnmount() {
    ItemStore.removeListener("change", this.onStoreChange);
  }

  onStoreChange() {
    console.log("4. In the view CB");
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
