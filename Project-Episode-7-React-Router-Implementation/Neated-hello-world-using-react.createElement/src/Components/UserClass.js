import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/harsh9534");
    const json = await data.json();
    this.setState({
      userInfo: {
        name: json.name,
        location: json.location,
        avatar_url: json.avatar_url,
      },
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component is unmounted");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact: @harsh.jpg</h4>
      </div>
    );
  }
}
export default UserClass;
