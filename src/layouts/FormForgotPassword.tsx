import { AuthForm, InputGroup } from "@/components"
import { useSetFormFields } from "@/hooks/useSetFormFields"
import { Button } from "@/libs/shadcn/ui/button"
import { resetPasswordStart } from "@/store/user/user.action"
import { useDispatch } from "react-redux"

const FormForgotPassword = () => {

    const { formFields, handleFieldChange } = useSetFormFields()
    const { email } = formFields
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(resetPasswordStart(email))
    }

  return (
    <AuthForm handleSubmit={handleSubmit}>
        <InputGroup 
            label='email'
            type='email'
            required
            handleChange={handleFieldChange}
            value={email}
            id='email'
            name='email'
        />
        <Button className='w-full' type='submit'>Reset Password</Button>
    </AuthForm>
  )
}

export default FormForgotPassword