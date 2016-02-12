import Search from "./Search";
import PlacesItems from "./PlacesItems";
import Detail from "./Detail";

let _getAppState = () => {
  return {
    items: [
      { id: 1, title: 'Item 44' },
      { id: 2, title: 'Item 2' },
      { id: 3, title: '42' }
    ]
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
