import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";
import Footer from "./layouts/Footer";
import Dashboard from "./components/Dashboard";
import Photos from "./components/Photos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    
    <Router>
      <div className="wrapper">
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/photos">
          <Photos />
        </Route>
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
