import ItemActions from "../flux/ItemActions";

class Search extends React.Component {
  setSearchQuery(event) {
    ItemActions.search(event.target.value);
  }
  render() {
    return (
      <div>
        <input placeholder="Search" onChange={this.setSearchQuery} />
      </div>
    )
  }
}

export default Search;
