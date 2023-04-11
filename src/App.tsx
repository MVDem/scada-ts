import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import DashBoard from './pages/DashBoard';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        {/* <Route index element={<HomePage />} /> */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<DashBoard />} />
          {/* <Route
            path="tests"
            element={
              <RequireAuth>
                <TestsList />
              </RequireAuth>
            }
          />
          <Route path="signIn" element={<SingIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="signUp/register" element={<Register />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
