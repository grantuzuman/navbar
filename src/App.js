import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch,
Route} from 'react-router-dom';
import dashboard from './pages/dashboard'
import employerdetails from './pages/employerdetails'
import UpdateProfile from './pages/updateprofile'
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <switch>
        <Route path='/' exact component={dashboard} />
        <Route path='/employerdetails'component={employerdetails} />
        <Route path='/updateprofile'component={UpdateProfile} />

      </switch>
    </Router>

    </>
  );
}

export default App;
