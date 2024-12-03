export const handleLogout = (): void => window.localStorage.clear();
export const getLocalStorageToken = (): string | null => window.localStorage.getItem("userToken");
export const getLocalStorageUsername = (): string | null => window.localStorage.getItem("username");
