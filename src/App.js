import React from "react";
 
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "./DxComponent.css";
 
import { Drawer } from "devextreme-react/drawer";
import { Toolbar, Item } from "devextreme-react/toolbar";
import NavigationList from "./NavigationList";
 
import { Router, Route } from "react-router-dom";
 
import Home from "./Home";
import About from "./About";

 
import history from "./history";

class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          isDrawerOpen: false
      };
      this.buttonOptions = {
          icon: "menu",
          onClick: () => {
              this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
          }
      };
  }

  renderList = () => {
      const stateHandler = (newState) => this.setState(newState);
      return (
          <NavigationList stateHandler={stateHandler} />
      );
  }

  render() {
      return (
          <React.Fragment>
              <Toolbar id="toolbar">
                  <Item 
                      widget="dxButton" 
                      options={this.buttonOptions} 
                      location="before" />
              </Toolbar>
              <Drawer
                  minSize={37}
                  height={250}
                  revealMode="expand"
                  openedStateMode="overlap"
                  render={this.renderList}
                  opened={this.state.isDrawerOpen} >
                  <div id="view">
                      <Router history={history}>
                          <div>
                              <Route exact path="/home" component={Home} />
                              <Route exact path="/about" component={About}/>
                          </div>
                      </Router>
                  </div>
              </Drawer>
          </React.Fragment>
      );
  }
}
export default App;