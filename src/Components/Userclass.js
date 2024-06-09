import React, { useId } from "react";
class Userclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "udii",
        location: "India",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/udayshankar24");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }
  render() {
    return (
      <div className="User-Card">
        <h1>Name: {this.state.userInfo.name}</h1>
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          update
        </button> */}
        <h2>Location:Fairfax,{this.state.userInfo.location}</h2>
        <h3>Masters in Computer Science</h3>
        <h4>{this.state.userInfo.bio}</h4>
      </div>
    );
  }
}
export default Userclass;
