import {  useState } from "react";
import { initialSate } from "./notificationContext";

export default function useNotification() {
    const [notice, setNotice] = useState(initialSate)

    return {
        notice, setNotice
    }
}