import { Component } from "react";

class CreateTodo extends Component {
  state = {
    title: "",
    description: "",
  };
  handelChange = ({ target: { value, name } }) => {
    // console.log(value);
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log("state :>> ", this.state);
    this.props.createTodo(this.state);

    this.setState({
      title: "",
      description: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={this.state.title}
            onChange={this.handelChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={this.state.description}
            onChange={this.handelChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    );
  }
}

export default CreateTodo;
