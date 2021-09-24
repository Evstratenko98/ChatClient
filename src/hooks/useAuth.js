import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { combineModules } from "../modules/combineModules";

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

export const useAuthorize = (routes) => {
    const [allowedModules, setAllowedModules] = useState([]);
    const { role } = useSelector((state) => state.user);
    useEffect(() => {
        setAllowedModules(
            routes.map((route) => {
                const module = combineModules.activeModule(route.name);
                const permission = module.roles.includes(role);
                if (!permission) route.name = "Unavailable";
                return route;
            })
        );
    }, [routes, role]);

    return allowedModules;
};
