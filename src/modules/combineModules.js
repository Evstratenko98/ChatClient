import { Container } from "./container.module";
import Chat from "./Chat/chat.module";

export const combineModules = new Container().subsctibe(Chat);

export const routes = [
    {
        path: "/",
        module: "Chat",
        name: "Главная",
    },
    {
        path: "/chat",
        module: "Chat",
        name: "Чат",
    },
    {
        path: "/profile",
        module: "Chat",
        name: "Профиль",
    },
];
