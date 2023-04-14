import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import DashBoard from './pages/DashBoard';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import { Private } from './components/auth/hoc/Private';

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
        </Route>
      </Routes>
    </>
  );
};

export default App;
