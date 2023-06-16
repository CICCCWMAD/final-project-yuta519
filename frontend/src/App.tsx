import { useState } from "react";

import { AuthContext, AuthUser } from "./context/AuthContext";
import { Routes } from "./Routes";

export const App = () => {
  const [authuser, setAuthUser] = useState(AuthUser);

  return (
    <AuthContext.Provider value={[authuser, setAuthUser]}>
      <Routes />
    </AuthContext.Provider>
  );
};
