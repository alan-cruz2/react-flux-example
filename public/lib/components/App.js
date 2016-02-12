import Search from "./Search";
import PlacesItems from "./PlacesItems";
import Detail from "./Detail";

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
