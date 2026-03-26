import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "Home"
    };
  }

  render() {
    return (
      <div className="container">
        <h1>🌐 My Website</h1>

        <div className="nav">
          <button onClick={() => this.setState({ page: "Home" })}>
            Home
          </button>

          <button onClick={() => this.setState({ page: "Content" })}>
            Content
          </button>

          <button onClick={() => this.setState({ page: "About" })}>
            About
          </button>
        </div>

        <div className="content">
          {this.state.page === "Home" && <h2>🏠 Welcome to Home Page</h2>}
          {this.state.page === "Content" && <h2>📄 Here is some content</h2>}
          {this.state.page === "About" && <h2>ℹ️ About us page</h2>}
        </div>
      </div>
    );
  }
}

export default App;
