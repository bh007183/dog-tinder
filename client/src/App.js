import logo from './logo.svg';
import './App.css';
import configureStore from "./store/configureStore"
import {getNewDogs} from "./store/newdogs"

const store = configureStore()

store.dispatch(getNewDogs())

function App() {
  return (
    <></>
  );
}

export default App;
