import { AuthForm, InputGroup } from "@/components"
import { useSetFormFields } from "@/hooks/useSetFormFields"
import { Button } from "@/libs/shadcn/ui/button"
import { emailSignInStart, googleSignInStart } from "@/store/user/user.action"
import { selectLoading } from "@/store/user/user.selector"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { toast } from "sonner"

const FormLogin = () => {
  
  const {formFields, handleFieldChange } = useSetFormFields()
  const { email, password } = formFields
  
  const dispatch = useDispatch()
  const loading = useSelector(selectLoading)

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      dispatch(emailSignInStart(email, password))
    } catch(error) {
      if(error.code==='auth/user-not-found') {
        toast.error('user not found')
      }
      if(error.code==='auth/wrong-password') {
        toast.error('Wrong password')
      }
      else {
        toast.error('Auth Failed')
      }
      toast.error(error.message)
    }
  }

  const signInWithGoogle = () => dispatch(googleSignInStart())

  return (
    <AuthForm handleSubmit={handleSubmit}>
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
      <small>
        <Link to='forgot-password'>Forgot Password?</Link>
      </small>
      <div className="flex gap-3">
        <Button className="w-full" type="submit">Login</Button>
        <Button onClick={signInWithGoogle} className="w-full" variant={'outline'}>Sign in with Google</Button>
      </div>
    </AuthForm>
  )
}

export default FormLogin