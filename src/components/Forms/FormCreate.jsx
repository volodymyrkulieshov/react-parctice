import { Component } from "react";

class FormCreate extends Component {
  state = {
    email: "",
    password: "",
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
    this.props.sendUserData(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={this.state.email}
            onChange={this.handelChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={this.state.password}
            onChange={this.handelChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default FormCreate;
