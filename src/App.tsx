import { ApiProvider } from '@reduxjs/toolkit/query/react';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
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
import { companyApi } from './features/api/companyApi';
import { store } from './store';

function App() {
  let isAuthenticated =
    // false;
    true;

  const PrivateWrapper: FC<{ isAuthenticated: boolean }> = ({
    isAuthenticated,
  }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <ApiProvider api={companyApi}>
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateWrapper isAuthenticated={isAuthenticated} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Router>
        </Provider>
    </ApiProvider>
  );
}

export default App;
