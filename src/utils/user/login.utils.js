import { useDispatch } from "react-redux";
import { defaultFormFields } from "../../constants";
import { signinAuthUserWithEmailAndPassword, signinWithGooglePopup } from "../firebase/firebase.user";
import { setCurrentUser } from "../../store/user/user.action";

const dispatch = useDispatch()

export const resetFormFields = (reset) => reset(defaultFormFields)

export const signinWithGoogle = async () => {
    const { user } = await signinWithGooglePopup()

    dispatch(setCurrentUser(user))
}

export const handleSubmit = async (event) => {
    event.preventDefault()

    try {
        const { user } = await signinAuthUserWithEmailAndPassword(email, password)
        resetFormFields(resetFormFields)
    }
    catch (error) {
        switch(error.code) {
            case 'auth/wrong-password':
                setErrorMessage('incorrect password !!')
                break
            case 'auth/user-not-found':
                setErrorMessage('there is no user with this email !!')
                break
            default:
                setErrorMessage(error)
        }
    }
}

export const handleChange = event => {
    const { name, value } = event.target

    
}