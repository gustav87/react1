import { BadRequestObjectResult, SignUpValidationErrors } from '@/models/backend';
import { SignUpData } from '@/models/login';
import { useState } from 'react';

const backend_url = import.meta.env.VITE_BACKEND_URL as string;

function SignUp() {
  const emptySignUpData = { username: "", password: "", favoriteAnimal: "", favoriteColor: "", favoriteNumber: 0 } satisfies SignUpData;
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [credentials, setCredentials] = useState<SignUpData>(getEmptySignUpData());
  const [disabled, setDisabled] = useState<boolean>(false);
  const [signUpValidationErrors, setSignUpValidationErrors] = useState<SignUpValidationErrors>({} as SignUpValidationErrors);

  const handleSignUp = async () => {
    setDisabled(true);
    const url = `${backend_url}/api/account/sign-up`;

    const options = {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await fetch(url, options);
      if (res.ok) {
        const text = await res.text();
        setResponseMessage(text);
      }
      else {
        const json = await res.json() as BadRequestObjectResult;
        if (json.title === "One or more validation errors occurred.") {
          setSignUpValidationErrors(json.errors);
        }
      }
    } catch(err: unknown) {
      console.error(err);
      setResponseMessage("Something went wrong.");
    } finally {
      resetForm();
    }
  }

  const renderSignUpValidationErrors = (validationErrors: Array<string> | undefined): JSX.Element => {
    if (!validationErrors) return <div></div>;
    return <div className="text-red-500 text-lg">
      {validationErrors.map((errorText) => <div key={errorText}>{errorText}</div>)}
    </div>;
  }

  const handleSetCredentials = (credentials: SignUpData): void => {
    setCredentials(credentials);
  }

  const resetForm = (): void => {
    setDisabled(false);
    setCredentials({ ...credentials, password: "" });
  }

  function getEmptySignUpData(): SignUpData {
    return { ...emptySignUpData };
  }

  const disabledClasses =  "pointer-events-none cursor-default text-gray-600";
  const submitButtonClasses = `react1-clickable cursor-pointer border-solid border-2 p-2 border-slate-600 ${disabled ? disabledClasses : ""}`;

  return <>
    <div>
      <label htmlFor="username">Username</label>
      <input className="w-full block text-black" id="username" type="text" placeholder="Username" value={credentials.username} onChange={(e) => handleSetCredentials({ ...credentials, username: e.target.value })} />
      <div>{renderSignUpValidationErrors(signUpValidationErrors.Username)}</div>

      <label htmlFor="password">Password</label>
      <input className="w-full block text-black" id="password" type="password" placeholder="Password" value={credentials.password} onChange={(e) => handleSetCredentials({ ...credentials, password: e.target.value })} />
      <div>{renderSignUpValidationErrors(signUpValidationErrors.Password)}</div>

      <label htmlFor="password">Favorite animal</label>
      <input className="w-full block text-black" id="favoriteAnimal" type="text" placeholder="Favorite animal" value={credentials.favoriteAnimal} onChange={(e) => handleSetCredentials({ ...credentials, favoriteAnimal: e.target.value })} />
      <div>{renderSignUpValidationErrors(signUpValidationErrors.FavoriteAnimal)}</div>

      <label htmlFor="password">Favorite color</label>
      <input className="w-full block text-black" id="favoriteColor" type="text" placeholder="Favorite color" value={credentials.favoriteColor} onChange={(e) => handleSetCredentials({ ...credentials, favoriteColor: e.target.value })} />
      <div>{renderSignUpValidationErrors(signUpValidationErrors.FavoriteColor)}</div>

      <label htmlFor="password">Favorite number</label>
      <input className="w-full block text-black" id="favoriteNumber" type="number" placeholder="Favorite number" value={credentials.favoriteNumber} onChange={(e) => handleSetCredentials({ ...credentials, favoriteNumber: parseInt(e.target.value) })} />
      <div>{renderSignUpValidationErrors(signUpValidationErrors.FavoriteNumber)}</div>

      <div className="mt-5 flex justify-around">
        <input type="submit" value="Sign Up" className={submitButtonClasses} onClick={handleSignUp} />
        <input type="submit" value="Reset" className={submitButtonClasses} onClick={() => setCredentials(getEmptySignUpData())} />
      </div>
    </div>
    <div className="mt-5 font-bold">
      { responseMessage }
    </div>
  </>
}

export default SignUp;
