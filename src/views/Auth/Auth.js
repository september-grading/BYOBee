import './Auth.css';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useState } from 'react';
import { signInUser, signupUser } from '../../services/users';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('signin');
  const [errorMsg, setErrorMsg] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'signin') {
        resp = await signInUser(email, password);
      } else {
        resp = await signupUser(email, password);
      }
      setCurrentUser(resp);
    } catch {
      setErrorMsg('Oops, something went wrong. Please try again!');
    }
  };

  return (
    <div className="Auth">
      <AuthForm
        errorMsg={errorMsg}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        type={type}
        setType={setType}
      />
    </div>
  );
}
