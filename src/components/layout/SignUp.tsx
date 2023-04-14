import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../auth/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../auth/userSlice';
import { getDataUser } from '../lib';
import { IUser } from '../type';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setStoreData = (options: IUser): void => {
    dispatch(
      setUser({
        name: options.name,
        phone: options.phone,
        city: options.city,
        products: options.products,
      })
    );
  };

  const handleSignUp = (email: string, password: string) => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            userId: user.uid,
          })
        );
        getDataUser(user.uid, setStoreData);
        navigate('/dashboard', { replace: true });
      })
      .catch(console.error);
  };

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
        onClick={() => handleSignUp(email, pass)}
      >
        Sign up
      </button>
    </div>
  );
};

export default SignUp;
