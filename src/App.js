import Navbar from './layouts/Navbar'
import Sidebar from './layouts/Sidebar'
import Footer from './layouts/Footer'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
