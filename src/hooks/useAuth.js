import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useAuth = () => {
    const [token, setToken] = useState(Cookies.get("userId") || "");
    useEffect(() => {
        const localToken = Cookies.get("userId");
        if (localToken) {
            setToken(localToken);
        }
    }, []);

    return { token };
};
