import React from "react";

class Userclass extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {
        name: "dummy",
        location: "dummy",
        url: "https://www.google.com",
        avatar_url: "dummy",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/darling7429");
    const json_data = await data.json();
    console.log(json_data);
    this.setState({
      data: json_data,
    });
  }
  componentDidUpdate() {}

  render() {
    const { login, location, url, avatar_url } = this.state.data;
    return (
      <div className="profilecard_container">
        <div className="card">
          <p>name:{login}</p>
          <p>
            avatar_url:
            <img className="api_image" src={avatar_url} />
          </p>
          <p>location:{location}</p>
          <p>url:{url}</p>
        </div>
      </div>
    );
  }
}

export default Userclass;
