import { useState, useEffect } from "react";

export const useToken = () => {
    const [token, setTokenState] = useState(() => {
        return sessionStorage.getItem("token") || null;
    });

    const setToken = (newToken) => {
        setTokenState(newToken);
        if (newToken) {
            sessionStorage.setItem("token", newToken);
        } else {
            sessionStorage.removeItem("token");
        }
    };

    useEffect(() => {
        if (!token) return;

        try {
            const payload = JSON.parse(atob(token.split(".")[1]));
            const expireTime = payload.exp * 1000;
            const timeout = expireTime - Date.now();

            if (timeout <= 0) {
                setToken(null);
            } else {
                const timer = setTimeout(() => setToken(null), timeout);
                return () => clearTimeout(timer);
            }
        } catch {
            setToken(null);
        }
    }, [token]);

    return [token, setToken];
};
