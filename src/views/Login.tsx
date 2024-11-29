import './Login.css';
import { useState } from 'react';

const backend_url = import.meta.env.VITE_BACKEND_URL as string;

function Login() {
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleLogin = async () => {
    setDisabled(true);
    const url = `${backend_url}/api/account/log-in`;
    const data = getInputValues();

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await fetch(url, options);
      const text = await res.text();
      if (res.ok) {
        window.sessionStorage.setItem("token", text);
        setResponseMessage("Log in successful!");
      }
      else {
        setResponseMessage(text);
      }
    } catch(err: unknown) {
      console.error(err);
    } finally {
      resetLoginForm();      
    }
  }

  const handleSignUp = async () => {
    setDisabled(true);
    const url = `${backend_url}/api/account/create-account`;
    const data = getInputValues();

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await fetch(url, options);
      const text = await res.text();
      setResponseMessage(text);
    } catch(err: unknown) {
      console.error(err);
    } finally {
      resetLoginForm();
    }
  }

  const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  }

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  }

  const getInputValues = (): { username: string, password: string } => {
    return {
      username,
      password,
    };
  };

  const resetLoginForm = (): void => {
    setDisabled(false);
    setUsername("");
    setPassword("");
  }

  const submitButtonClasses = `mr-5 react1-clickable cursor-pointer border-solid border-2 p-2 border-slate-600 ${disabled ? "react1-login__disabled": ""}`;

  return <>
    <div>
      <label htmlFor="username">Username</label>
      <input className="w-full block text-black" id="username" type="text" placeholder="Username" onChange={handleUsernameInput} />
      <label htmlFor="password">Password</label>
      <input className="w-full block text-black" id="password" type="password" placeholder="Password" onChange={handlePasswordInput} />
      <div className="mt-5">
        <input type="submit" value="Log In" className={submitButtonClasses} onClick={handleLogin} />
        <input type="submit" value="Create Account" className={submitButtonClasses} onClick={handleSignUp} />
      </div>
    </div>
    <div className="mt-5 font-bold">
      { responseMessage }
    </div>
  </>
}

export default Login;
