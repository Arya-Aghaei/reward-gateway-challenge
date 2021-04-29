import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../Pages/Home";
import ErrorPage from "../../Components/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route render={() => <ErrorPage type="404" />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
