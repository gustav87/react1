import { useState } from 'react';

const backend_url = import.meta.env.VITE_BACKEND_URL as string;

function Paypal() {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const getTransactions = async (): Promise<void> => {
    const url = `${backend_url}/api/paypal/transactions`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const transactions = await response.json() as unknown;
        console.log(transactions);
      }
      else {
        const errorMessage = await response.text();
        setErrorMessage(errorMessage);
      }
    } catch (e: unknown) {
      console.error(e);
    }
  }

  const getBalance = async (): Promise<void> => {
    const url = `${backend_url}/api/paypal/balance`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const balance = await response.json() as unknown;
        console.log(balance);
        
      }
      else {
        const errorMessage = await response.text();
        setErrorMessage(errorMessage);
      }
    } catch (e: unknown) {
      console.error(e);
    }
  }

  return <>
    <div>
      <div className="flex">
        <button className="border p-1 mr-5" onClick={getTransactions}>Get transactions</button>
      </div>
      <div className="flex mt-5">
        <button className="border p-1 mr-5" onClick={getBalance}>Get balance</button>
      </div>
      <div className="mt-5">{ errorMessage }</div>
    </div>
  </>
}

export default Paypal;
