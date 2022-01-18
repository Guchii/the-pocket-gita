import { createContext, useState } from 'react'

export const GlobalStore = createContext()

export const Provider = ({ children }) => {
    const [state, setState] = useState({
        chap: null,
        verse: null,
    })
    return (
        <GlobalStore.Provider value={{ state, setState }}>
            {children}
        </GlobalStore.Provider>
    )
}
