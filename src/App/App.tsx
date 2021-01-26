import logo from "./logo.svg";
import "./App.css";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/home" render={() => <HomeView />} />
      <Route exact path="/about" render={() => <AboutView />} />
      <Redirect from="/" to="/home" />
    </Switch>
  );
}

export default App;
