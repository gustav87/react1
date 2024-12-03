import './Login.css';
import { useState } from 'react';

const backend_url = import.meta.env.VITE_BACKEND_URL as string;

type Credentials = {
  username: string;
  password: string;
}

function Login() {
  const emptyCredentials = { username: "", password: "" } satisfies Credentials;
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [credentials, setCredentials] = useState<Credentials>(getEmptyCredentials());
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleLogin = async () => {
    setDisabled(true);
    const url = `${backend_url}/api/account/log-in`;

    const options = {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await fetch(url, options);
      const text = await res.text();
      if (res.ok) {
        window.localStorage.setItem("token", text);
        window.localStorage.setItem("username", credentials.username);
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

    const options = {
      method: "POST",
      body: JSON.stringify(credentials),
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

  const handleSetCredentials = (credentials: Credentials): void => {
    setCredentials(credentials);
  }

  const resetLoginForm = (): void => {
    setDisabled(false);
    setCredentials(getEmptyCredentials());
  }

  function getEmptyCredentials(): Credentials {
    return { ...emptyCredentials };
  }

  const submitButtonClasses = `mr-5 react1-clickable cursor-pointer border-solid border-2 p-2 border-slate-600 ${disabled ? "react1-login__disabled": ""}`;

  return <>
    <div>
      <label htmlFor="username">Username</label>
      <input className="w-full block text-black" id="username" type="text" placeholder="Username" value={credentials.username} onChange={(e) => handleSetCredentials({ ...credentials, username: e.target.value })} />
      <label htmlFor="password">Password</label>
      <input className="w-full block text-black" id="password" type="password" placeholder="Password" value={credentials.password} onChange={(e) => handleSetCredentials({ ...credentials, password: e.target.value })} />
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
