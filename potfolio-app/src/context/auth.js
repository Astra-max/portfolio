import { useState } from "react"

export default function useAuth() {
    const getToken = () => {
        const tokenStr = localStorage.getItem('auth')
        const token = JSON.parse(tokenStr)
        return token
    }

    const [token, setToken] = useState(getToken())

    const saveToken = (userToken) => {
        localStorage.setItem('auth', JSON.stringify(userToken))
        setToken(userToken.auth)
    }

    return {
        token,
        setToken: saveToken
    }
}