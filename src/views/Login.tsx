import './Login.css';
import { BaseSyntheticEvent } from "react";
import { useState } from 'react';

const backend_url = import.meta.env.VITE_BACKEND_URL;

function Login() {
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };

    // @ts-ignore
    const action = e.nativeEvent.submitter.name;

    const data = {
      username: target.username.value,
      password: target.password.value
    };

    const options = {
      method: e.target.method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      setDisabled(true);
      if (action === "log_in") {
        const url = `${backend_url}/api/account/log-in`;
        const res = await fetch(url, options);
        const text = await res.text();
        if (res.ok) {
          window.sessionStorage.setItem("token", text);
          setResponseMessage("Log in successful!");
        }
        else {
          setResponseMessage(text);
        }
        setDisabled(false);
      } else if (action === "create_account") {
        const url = `${backend_url}/api/account/create-account`;
        const res = await fetch(url, options);
        const text = await res.text();
        setResponseMessage(text);
        setDisabled(false);
      }
    } catch(err: unknown) {
      console.error(err);
      setDisabled(false);
    } finally {
      target.username.value = "";
      target.password.value = "";
    }
  }

  return <>
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input className="w-full block text-black" id="username" type="text" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input className="w-full block text-black" id="password" type="password" placeholder="Password" />

        <div className="mt-5">
          <input type="submit" required value="Log In" name="log_in" className={`mr-5 react1-clickable cursor-pointer border-solid border-2 p-2 border-slate-600 ${disabled ? "react1-login__disabled": ""}`}/>
          <input type="submit" required value="Create Account" name="create_account" className={`react1-clickable cursor-pointer border-solid border-2 p-2 border-slate-600 ${disabled ? "react1-login__disabled": ""}`}/>
        </div>
      </form>
    </div>
    <div className="mt-5 font-bold">
      { responseMessage }
    </div>
  </>
}

export default Login;
