import axios from 'axios'

//prendo come input le credenziali dell'utente e la funzione dispatch 
export const loginCall = async (userCredential, dispatch) => {
    dispatch({type: "LOGIN_START"})
    try {
        const res = await axios.post("auth/login", userCredential)
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        return res.data; // ritornare i dati dell'utente
    } catch (error)  {
        dispatch({type: "LOGIN_FAILURE", payload: error})
    }
}
