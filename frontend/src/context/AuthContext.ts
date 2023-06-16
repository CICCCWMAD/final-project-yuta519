import { createContext, useContext, useState } from "react";


export const AuthUser = {
    id: null,
    name: '',
    email: ''
};



export const AuthContext = createContext<any>(undefined);
export const useAuthContext = () => useContext(AuthContext);
