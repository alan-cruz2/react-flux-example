class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: ""
    };
  }
  updateTitleInput(event) {
    this.setState({ titleInput: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addItem({title: this.state.titleInput});
    this.setState({ titleInput: "" });
  }
  render() {
    return (
      <div className="add-item">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="title"> Title
            <input id="title" placeholder="Title..."
                   required
                   value={this.state.titleInput}
                   onChange={this.updateTitleInput.bind(this)} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddItem;
