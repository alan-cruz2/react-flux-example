import Search from "./Search";
import PlacesItems from "./PlacesItems";
import Detail from "./Detail";

let _getAppState = () => {
  return {
    items: [
      { id: 1, title: 'Item 44' },
      { id: 2, title: 'Item 2' }
    ]
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = _getAppState();
  }

  render() {
    return (
      <div>
        <h3>GoPlaces</h3>
        <Search />
        <PlacesItems items={this.state.items} />
        <Detail />
      </div>
    );
  }
}

export default App;
