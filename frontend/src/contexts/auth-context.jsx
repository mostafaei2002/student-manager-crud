'use client';

import useLocalStorage from '@/hooks/useLocalStorage';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [jwt, setJWT] = useLocalStorage('jwt');

  const [authenticated, setAuthenticated] = useState();

  useEffect(() => {
    setAuthenticated(jwt ? true : false);
  }, [jwt]);

  return (
    <AuthContext.Provider value={{ jwt, setJWT, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('Context not provided');

  return context;
}

export { AuthProvider, useAuth };
