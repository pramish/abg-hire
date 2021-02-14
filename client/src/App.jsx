import { Provider } from "react-redux";
import configureStore from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ActivateAccount from "./components/activate_account/activate_account";
import Navbar from "./components/navbar/navbar";
import Auth from "./components/auth/auth";
import VehicleList from "./components/vehicle/vehicle_list";
import VehicleDetail from "./components/vehicle/vehicle_detail";

function App() {
  return (
    <Provider store={configureStore}>
      <Router>
        <Navbar />
        <Route exact path="/accounts" component={Auth} />
        <Route exact path="/" component={VehicleList} />
        <Route path="/:vehicleID" component={VehicleDetail} />
        <Route path="/activate-account" component={ActivateAccount} />
      </Router>
    </Provider>
  );
}

export default App;
