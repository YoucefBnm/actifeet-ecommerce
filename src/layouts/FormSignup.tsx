import { AuthForm, InputGroup } from "@/components"
import { useSetFormFields } from "@/hooks/useSetFormFields"
import { Button } from "@/libs/shadcn/ui/button"
import { signUpStart } from "@/store/user/user.action"
import { selectLoading } from "@/store/user/user.selector"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "sonner"

const FormSignup = () => {
    const dispatch = useDispatch()
    
    const { formFields, handleFieldChange } = useSetFormFields()
    const { displayName, email, password, confirmPassword } = formFields
    const loading = useSelector(selectLoading)

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(password !== confirmPassword) {
            toast.error('Passwords do not match!!')
            return 
        }
        try {
            dispatch(signUpStart(email, password, displayName))
        } catch(error) {
            
            if(error.code==='auth/email-already-in-use') {
                toast.error('email already in use')
              } 
              if(error.code==='auth/weak-password') {
                toast.error('weak password, password should be at least 6 characters.')
              } else {
                toast.error(error.message)
              }
        }
    }


  return (
    <AuthForm handleSubmit={handleSubmit}>
        <InputGroup     
            label={'display name'}
            type='text'
            required
            disabled={loading}
            handleChange={handleFieldChange}
            value={displayName}
            id='display name'
            name='displayName'
        />
        <InputGroup     
            label={'email'}
            type='email'
            required
            disabled={loading}
            handleChange={handleFieldChange}
            value={email}
            id='email'
            name='email'
        />
        <InputGroup     
            label={'password'}
            type='password'
            required
            disabled={loading}
            handleChange={handleFieldChange}
            value={password}
            id='password'
            name='password'
        />
        <InputGroup     
            label={'confirm password'}
            type='password'
            required
            disabled={loading}
            handleChange={handleFieldChange}
            value={confirmPassword}
            id='confirm password'
            name='confirmPassword'
        />

        <Button type="submit">Signup</Button>
    </AuthForm>
  )
}

export default FormSignup