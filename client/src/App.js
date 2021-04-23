import logo from "./logo.svg";
import "./App.css";
import configureStore from "./store/configureStore";
import { getNewDogs } from "./store/newdogs";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const store = configureStore();



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/liked">
        <Saved />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
