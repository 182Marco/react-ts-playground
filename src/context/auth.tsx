import { createContext, ReactNode, useState } from "react";

export const AuthContext = createContext<Record<string, any>>({
    isLog: false,
    setIsLog: (bool: boolean) => null
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLog, setIsLog] = useState(false);
  return (
    <AuthContext.Provider value={{ isLog, setIsLog }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
