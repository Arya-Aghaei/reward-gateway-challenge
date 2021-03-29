import logo from "./logo.svg";
import "./App.css";
import { ToastProvider } from "react-toast-notifications";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../Pages/Home";

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ToastProvider>
  );
}

export default App;
