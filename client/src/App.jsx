import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import { Provider } from "react-redux";
import configureStore from "./store";
import ActivateAccount from "./components/activate_account/activate_account";

function App() {
  return (
    <Provider store={configureStore}>
      <Router>
        <Route path="/activate-account" component={ActivateAccount} />
        <Login />
        <Register />
      </Router>
    </Provider>
  );
}

export default App;
