import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import DashBoard from './pages/DashBoard';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="signIn" element={<SignInPage />} />
        <Route path="signUp" element={<SignUpPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<DashBoard />} />
          {/* <Route
            path="tests"
            element={
              <RequireAuth>
                <TestsList />
              </RequireAuth>
            }
          /> */}
          {/* <Route path="signUp/register" element={<Register />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
