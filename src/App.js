import React from "react";

class App extends React.Component {
  render() {
    console.log(process.env.REACT_APP_MY_NAME);
    return <h1>Ganesh</h1>;
  }
}
export default App;
