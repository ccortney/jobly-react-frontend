import { useState, useEffect } from "react"

/**
 * Custom hook to use localStorage with React state. 
 * The hook obtains the initial value for state (the token) from local storage, 
 * updating localStorage whenever state updates
 */

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
