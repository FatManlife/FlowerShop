import { useEffect, useState } from "react";
import { useToken } from "../hooks/useToken";
import { AuthContext } from "./AuthContext";
import { jwtDecode } from "jwt-decode";

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useToken();

    let [authId, setAuthId] = useState(null);

    useEffect(() => {
        if (!token) {
            setAuthId(null);
            return;
        }

        const decode = jwtDecode(token);
        setAuthId(decode.sub);
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, authId, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};
