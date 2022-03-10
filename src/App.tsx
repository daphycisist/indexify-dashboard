import React, { FC } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes
} from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import NotFound from './components/pages/NotFound';
import { RootState } from './store';

function App() {
  const { token } = useSelector((state: RootState) => state.companies);
  let isAuthenticated = !!token;

  const PrivateWrapper: FC<{ isAuthenticated: boolean }> = ({
    isAuthenticated,
  }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  };

  return (
 <>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              element={<PrivateWrapper isAuthenticated={isAuthenticated} />}
            >
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        </>
  );
}

export default App;
