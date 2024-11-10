const backend_url = import.meta.env.VITE_BACKEND_URL;
import { useState } from 'react';

function Paypal() {
  // const token = window.sessionStorage.getItem("token");
  const [transactions, setTransactions] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [balance, setBalance] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const getToken = async (): Promise<void> => {
    const url = `${backend_url}/api/paypal/token`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const token: string = await response.text();
        setToken(token);
      }
      else {
        const errorMessage = await response.text();
        setErrorMessage(errorMessage);
      }
    } catch (e: unknown) {
      console.error(e);
    }
  }

  const getTransactions = async (): Promise<void> => {
    const url = `${backend_url}/api/paypal/transactions`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const transactions: string = await response.json();
        // setTransactions(transactions);
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
        const balance: string = await response.json();
        // setBalance(balance);
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
        <button className="border p-1 mr-5" onClick={getToken}>Get token</button>
        <div>Token: { token }</div>
      </div>
      <div className="flex">
        <button className="border p-1 mr-5" onClick={getTransactions}>Get transactions</button>
        <div>Transactions: { balance }</div>
      </div>
      <div className="flex mt-5">
        <button className="border p-1 mr-5" onClick={getBalance}>Get balance</button>
        <div>Balance: { transactions }</div>
      </div>
      <div className="mt-5">{ errorMessage }</div>
    </div>
  </>
}

export default Paypal;
