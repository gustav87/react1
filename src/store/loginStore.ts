import { LoginData } from '@/models/login';
import { create } from 'zustand';

interface LoginState {
  userToken: string;
  username: string;
  setUserToken: (token: string) => void;
  setUsername: (username: string) => void;
  resetLogin: () => void;
  onLoginSuccess: (loginData: LoginData) => void;
}

const useLoginStore = create<LoginState>()((set) => ({
  userToken: "",
  username: "",
  setUserToken: (userToken: string) => set({ userToken }),
  setUsername: (username: string) => set({ username }),
  resetLogin: () => {
    set({ userToken: "", username: "" });
    document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  },
  onLoginSuccess: (loginData: LoginData) => {
    set({ userToken: loginData.userToken });
    set({ username: loginData.username });
    document.cookie = `userToken=${loginData.userToken}`;
    document.cookie = `username=${loginData.username}`;
  },
}))

export default useLoginStore;
