import axios from "axios";
import backendUrl from "../backendUrl";
import { token } from "./auth";

const baseUrl = `${backendUrl}/api/messages`;

const setConfig = () => {
    return {
        headers: { "x-auth-token": token },
    };
};

const getConversations = async (user) => {
    try {
        const res = await fetch(baseUrl + "api/messages", setConfig());
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

const getMessages = async (user, conversationId) => {
    try {
        const res = await fetch(baseUrl + "api/messages/" + conversationId, setConfig());
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

const sendMessage = async (user, message, recipientId) => {
    try {
        const res = await fetch(baseUrl + "api/messages/" + recipientId, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-auth-token": token,
            },
            body: JSON.stringify(message),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

export { getConversations, getMessages, sendMessage };
