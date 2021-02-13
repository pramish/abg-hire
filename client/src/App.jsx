import { Provider } from "react-redux";
import configureStore from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import ActivateAccount from "./components/activate_account/activate_account";
import Navbar from "./components/navbar/navbar";
import Auth from "./components/auth/auth";

function App() {
  return (
    <Provider store={configureStore}>
      <Router>
        <Navbar />
        <Route path="/activate-account" component={ActivateAccount} />
        <Route exact path="/accounts" component={Auth} />
      </Router>
    </Provider>
  );
}

export default App;
