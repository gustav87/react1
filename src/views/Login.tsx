import { BaseSyntheticEvent } from "react";
const backend_url = import.meta.env.VITE_BACKEND_URL;

function Login() {

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
      if (action === "log_in") {
        const url = `${backend_url}/api/account/log-in`;
        const res = await fetch(url, options);
        const text = await res.text();
        console.log(text);
      } else if (action === "create_account") {
        const url = `${backend_url}/api/account/create-account`;
        const res = await fetch(url, options);
        const text = await res.text();
        console.log(text);
      }
    } catch(err: unknown) {
      console.error(err);
    }
  }

  return <>
    <h1 className="text-4xl mb-10">Log in!</h1>
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input className="w-full block text-black" id="username" type="text" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input className="w-full block text-black" id="password" type="password" placeholder="Password" />

        {/* <input type="submit" formAction="/action_one" value="Log In" name="log_in" className="mr-5 hover:text-blue-600 active:text-blue-900"/> */}
        <input type="submit" value="Log In" name="log_in" className="mr-5 hover:text-blue-600 active:text-blue-900"/>
        <input type="submit" value="Create Account" name="create_account" className="hover:text-blue-600 active:text-blue-900"/>
      </form>
    </div>
  </>
}

export default Login;
