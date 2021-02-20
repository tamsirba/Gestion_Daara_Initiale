import './App.css';
import LoginPage from "./pages/login/login";
import Dashbord from "./pages/admin/admin-dashbord";
import Modul from "./pages/admin/modul";
import NotFoundPage from "./pages/admin/404";
import adminPage from './pages/admin/admin';
import teacherPage from './pages/admin/teacher';
import studentPage from './pages/admin/student';
import classPage from './pages/admin/class';
import './components/FontawesomeIcons';

import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/dashbord" component={Dashbord} />
        <Route exact path="/modul" component={Modul} />
        <Route exact path="/admin" component={adminPage} />
        <Route exact path="/teacher" component={teacherPage} />
        <Route exact path="/student" component={studentPage} />
        <Route exact path="/class" component={classPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="404" />
      </Switch>
    </Router>
  );
}

export default App;
