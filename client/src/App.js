
import "./App.css";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar"

const store = configureStore();



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/saved">
        <Saved />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
