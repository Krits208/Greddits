import * as io from "socket.io-client";
import backendUrl from "../backendUrl";
import storageService from "./localStorage";

export let socket;

export const initiateSocketConnection = () => {
    const user = storageService.loadUser();
    console.log(io);

    socket = io(backendUrl, {
        auth: {
            token: user && user.token,
        },
    });

    console.log(socket);
};

export const disconnectSocket = () => {
    if (socket) socket.disconnect();
};
