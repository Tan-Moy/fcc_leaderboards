import axios from "axios";

export const RECENT_TOP = "RECENT_TOP";
export const ALL_TIME = "ALL_TIME";

export function recentTop() {
    const url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    const request = axios.get(url);

    return {
        type: RECENT_TOP,
        payload: request
    }
}

export function alltimeTop() {
    const url = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    const request = axios.get(url);

    return {
        type: ALL_TIME,
        payload: request
    }
}
