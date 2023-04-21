import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import DashBoard from './pages/DashBoard';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import { Private } from './components/auth/hoc/Private';
import BoardObj from './pages/ObgectPage';
import BoardSys from './pages/SystemPage';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route
            index
            element={
              <Private>
                <DashBoard />
              </Private>
            }
          />
          <Route
            path="/dashboard/:id"
            element={
              <Private>
                <BoardObj />
              </Private>
            }
          />
          <Route
            path="/dashboard/:id/:type"
            element={
              <Private>
                <BoardSys />
              </Private>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
