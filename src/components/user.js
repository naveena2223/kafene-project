import React from "react";
import "../css/user.css";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchTerm: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  handleSearch(e) {
    e.preventDefault();
    const searchTerm = e.target.elements.searchTerm.value;
    if (searchTerm.length >= 2) {
      fetch(
        `https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=${searchTerm}`
      )
        .then((response) => response.json())
        .then((data) => this.setState({ users: data }));
    } else {
      alert("Please enter at least 2 characters!");
    }
  }

  handleReset() {
    fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    const { users } = this.state;
    return (
      <div id="users">
        <form id="form-search" onSubmit={this.handleSearch}>
          <label>
            <input  id="input-search" type="text" name="searchTerm" placeholder="Search by Name" />
          </label>
          <button id="search-btn" type="submit">Search</button>
          <button id="reset-btn" type="button" onClick={this.handleReset}>
            Reset
          </button>
        </form>
        <table id="table">
          <thead class="table-heading-row">
            <tr class="table-heading">
              <th class="table-heading">Order ID</th>
              <th class="table-heading">User Avatar</th>
              <th class="table-heading">User Name</th>
              <th class="table-heading">Date of Birth</th>
              <th class="table-heading">Gender</th>
              <th class="table-heading">Location</th>
            </tr>
          </thead>
          <tbody  id="table-body">
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img src={user.profilePic} alt="profile pic" />
                </td>
                <td>{user.fullName}</td>
                <td>{user.dob}</td>
                <td>{user.gender}</td>
                <td>{`${user.currentCity}, ${user.currentCountry}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default User;
