import { useState } from "react";

export function useLocaal(key, insdata) {
    let [data, setkeys] = useState(insdata)
    
    useState(() => {
        const existing = JSON.parse(localStorage.getItem(key))
        if (existing) {
            setkeys(existing)
        } else {
             localStorage.setItem(key,JSON.stringify(insdata))
        }
    }, [])
    
    const update = (newdata) => {
        if (typeof newdata === "function") {
            localStorage.setItem(key, JSON.stringify(newdata(data)))
        }
        else {
            localStorage.setItem(key, JSON.stringify(newdata))
        }
        setkeys(newdata)
    }
    return [data,update]
}
