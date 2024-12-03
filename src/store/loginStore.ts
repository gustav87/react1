import { create } from 'zustand';

interface LoginState {
  userToken: string;
  username: string;
  setUserToken: (token: string) => void;
  setUsername: (username: string) => void;
  resetLogin: () => void;
}

const useLoginStore = create<LoginState>()((set) => ({
  userToken: "",
  username: "",
  setUserToken: (userToken: string) => set({ userToken }),
  setUsername: (username: string) => set({ username }),
  resetLogin: () => set({
    userToken: "",
    username: "",
  }),
}))

export default useLoginStore;
