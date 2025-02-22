import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Test />
      </Provider>
    </div>
  );
}

export default App;
