import Login from "./components/auth/login";
import Register from "./components/auth/register";
import { Provider } from "react-redux";
import configureStore from "./store";

function App() {
  return (
    <Provider store={configureStore}>
      <div>
        <Login />
        <Register />
      </div>
    </Provider>
  );
}

export default App;
