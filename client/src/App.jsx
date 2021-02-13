import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import { Provider } from "react-redux";
import configureStore from "./store";
import ActivateAccount from "./components/activate_account/activate_account";

function App() {
  // const searchURL = useLocation().search;
  // const myURL = new URLSearchParams(searchURL);
  // console.log(myURL);
  return (
    <Provider store={configureStore}>
      <Router>
        <Route path="/activate-account" component={ActivateAccount} />
        <Switch>
          <Login />
          <Register />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
