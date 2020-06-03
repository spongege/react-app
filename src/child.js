import React from "react";
import ThemeContext from "./theme-context";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  // static contextType = ThemeContext;
  // render() {
  //   const { background, color } = this.context;
  //   return (
  //     <div>
  //       {background}
  //       {color}
  //       <div>222</div>i am child
  //     </div>
  //   );
  // }
  render() {
    console.log("render");
    const { children } = this.props;
    return (
      <ThemeContext.Consumer>
        {value => (
          <div>
            {value.background}
            <br />
            {value.color}
            <div>222</div>i am child
            {children}
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Child;
