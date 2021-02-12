import "./App.css";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import { Provider } from "react-redux";
import configureStore from "./store";

function App() {
  return (
    <Provider store={configureStore}>
      <div>
        <div>hello</div>
        <Login />
        <Register />
      </div>
    </Provider>
  );
}

export default App;
