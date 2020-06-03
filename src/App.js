import React from "react";
import "./styles.css";
import Child from "./child";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.xx = "";
    this.state = {
      filterText: "",
      inStockOnly: false
    };
  }

  render() {
    return (
      <div>
        i am father
        <Child>
          <div>test Portals</div>
        </Child>
      </div>
    );
  }
}

export default App;
