//con questo noi riusciamo a raggiungere tutti i dati che immettiamo nell'intera app
//infatti in index.js ho wrappato App.js con <AuthContext.Provider>

import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = { //stato iniziale
    user: null,
    isFetching: false,
    error: false
}

//creo context
export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}>
            {children}
        </AuthContext.Provider>
    )
}