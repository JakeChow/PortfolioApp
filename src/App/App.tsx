import "./App.css";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import AboutView from "../AboutView";
import HomeView from "../HomeView";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" render={() => <HomeView />} />
          <Route exact path="/about" render={() => <AboutView />} />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
