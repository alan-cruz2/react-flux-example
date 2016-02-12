import AddItem from "./AddItem";

class Detail extends React.Component {
  render() {
    return (
      <div>
        <AddItem addItem={this.props.addItem} />
      </div>
    )
  }
}

export default Detail;
