import { useState, useEffect } from "react"

const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        let value = JSON.parse(localStorage.getItem(key) || defaultValue);
        return value;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

export {useLocalStorage}; 
