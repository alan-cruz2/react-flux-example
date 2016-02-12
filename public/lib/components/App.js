import Search from "./Search";
import PlacesItems from "./PlacesItems";
import Detail from "./Detail";
import { get, post } from "jquery";

let _getAppState = () => {
  return {
    items: []
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = _getAppState();
    this.addItem = this.addItem.bind(this);
  }

  addItem(newItem) {
    newItem.id = Date.now();
    this.setState({
      items: this.state.items.concat(newItem)
    })
  }

  componentDidMount() {
    get("/api/data")
      .done(data => console.log(data));
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
