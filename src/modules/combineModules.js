import { Container } from "./container.module";
import Chat from "./Chat/chat.module";

export const combineModules = new Container().subsctibe(Chat);

export const routes = [
    {
        path: "/",
        name: "Chat",
    },
];
