import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
// import ProfilesPage from './pages/Profiles/Profiles';
import DashboardPage from './pages/Dashboard/Dashboard';
import LoginPage from './pages/Login/Login';
import ErrorPage from './pages/Error/Error';
import HomePage from './pages/Home/Home';
import PrivateRoute from './routes/PrivateRoute';
import Auth0Wrapper from './components/Auth/Auth0Wrapper';

const App = () => {
  return (
    <Auth0Wrapper>
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <PrivateRoute path="/dashboard">
            <DashboardPage />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </Auth0Wrapper>
  );
};

export default App;
