import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import CreateAccount from './features/authentication/pages/create-account/CreateAccount';
import Home from './features/movies/pages/Home';

function AppRoutes() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to="/create-account"
            replace
          />
        }
      />
      <Route
        path="/create-account"
        element={
          <CreateAccount
            onSubmit={() => {
              navigate('/home');
            }}
          />
        }
      />
      <Route
        path="/home"
        element={<Home />}
      />
    </Routes>
  );
}

const AppRouter = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default AppRouter;
