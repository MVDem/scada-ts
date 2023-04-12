import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../auth/firebase';
import { setUser } from '../auth/userSlice';
import { getDataUser } from '../lib';
import { createSystems } from '../product';
import { user } from '../../pages/HomePage';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            userId: user.uid,
          })
        );
        getDataUser();
        navigate('/dashboard', { replace: true });
      })
      .catch((error) => {
        alert(error);
      });
  };
  createSystems(user.products!.obj);

  return (
    <div className="formAuth">
      <div className="formAuth__box">
        <input
          type="text"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>Email</span>
        <i></i>
      </div>
      <div className="formAuth__box">
        <input
          type="password"
          required={true}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <span>Password</span>
        <i></i>
      </div>
      <button
        className="formAuth__btn"
        onClick={() => handleLogin(email, pass)}
      >
        Sign in
      </button>
    </div>
  );
};

export default SignIn;
