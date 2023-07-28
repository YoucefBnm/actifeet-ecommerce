import { useState } from "react"
import { CustomBtn, UserFormInputGroup } from "../../components"
import { defaultFormFields } from "../../constants"

import { useDispatch } from "react-redux"
import { setCurrentUser } from "../../store/user/user.action"

const Login = () => {
    const [errorMessage, setErrorMessage] = useState(null)
    const [formFields, setFormFields] = useState(defaultFormFields)

  return (
    <main className="login d--flex d--flex-col d--justify-center d--align-center pad--x-default pad--y-default">
        <div className="login__header d--flex d--flex-col d--align-center mar--b-3">
        <h1 className="heading heading--md">login</h1>
        {
            errorMessage && (
                <strong className="color--danger">{errorMessage}</strong>
            )
        }
        </div>

        <form onSubmit={handleSubmit} className="login__form mar--b-3">
           <div className="login__form-inputs mar--b-2 d--flex d--flex-col gap--1">
                <UserFormInputGroup
                    label='email'
                    name='email'
                    value={email}
                    type='email'
                    onChange={handleChange}
                    required
                />
                <UserFormInputGroup
                    label='password'
                    name='password'
                    type='password'
                    onChange={handleChange}
                    required
                    value={password}
                />
           </div>
            
            <div className="login__form-btns d--flex gap--1">
                <CustomBtn 
                    btnStlye='bg customBtn--bg--dark'
                    btnType='submit'
                    text='login'
                />
                <CustomBtn
                    btnStlye='shadow customBtn--shadow--primary'
                    text='continue with google'
                    handleClick={signinWithGoogle}
                />
            </div>
        </form>

        <div className="login__footer d--flex d--align-center gap--1">
            <span>
                <small>Not a member yet ?</small>
            </span>

            <CustomBtn
                btnStlye='link customBtn--link--warning'
                text='create account'
                route='/auth/register'
            />
        </div>
    </main>
  )
}

export default Login