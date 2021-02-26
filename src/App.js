// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import EmployeeList from "./components/employee-list.component";
import EmployeeCreate from "./components/employee-create.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={EmployeeList} />
      <Route path="/create" component={EmployeeCreate} />
    </Router>
  );
}

export default App;
