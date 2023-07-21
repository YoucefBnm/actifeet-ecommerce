import React, { useState } from 'react'
import { CustomBtn, UserFormInputGroup } from '../../components'
import { defaultFormFields } from '../../constants'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const Register = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const [errorMessage, setErrorMessage] = useState(null)

    const resetFormFields = () => setFormFields(defaultFormFields)

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(password!==confirmPassword) {
            setErrorMessage('password do not match !!')
            return 
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
        } catch (error) {
            if(error.cod === 'auth/email-already-in-use') {
                setErrorMessage('Cannot create user, email already exists.')
            } else {
                setErrorMessage(`user creation encounter an error: ${error}`)
            }
        }
        
    }

    const handleChange = event => {
        const { name, value } = event.target
        setFormFields({...formFields, [name]: value })
    }

  return (
    <div className="register d--flex d--flex-col d--justify-center d--align-center">
        <div className="register__header mar--b-3">
            <h1 className="heading heading--md">create account</h1>
            {
                errorMessage && (
                    <p className="color--danger">{errorMessage}</p>
                )
            }
        </div>
        
        <form className="register__form mar--b-3">
            <div className="register__form-inputs mar--b-2 d--flex d--flex-col gap--1">
                <UserFormInputGroup
                    label='user name'
                    inputType='text'
                    handleChange={handleChange}
                />
                <UserFormInputGroup
                    label='email'
                    inputType='email'
                    handleChange={handleChange}
                />
                <UserFormInputGroup
                    label='password'
                    inputType='password'
                    handleChange={handleChange}
                    withIcon={true}
                />
                <UserFormInputGroup
                    label='confirm password'
                    inputType='password'
                    handleChange={handleChange}
                    withIcon={true}
                />
            </div>

            <div className='login__form-btns d--flex gap--1'>
                <CustomBtn
                    btnStlye='bg customBtn--bg--dark width--100'
                    text='login'
                    handleClick={() => {}}
                />

            </div>
        </form>

        <div className="register__footer d--flex da--align-center gap--1">
            <span>
                <small>Already a member ?</small>
            </span>
            <CustomBtn
                btnStlye='link customBtn--link--primary'
                text='login'
                route='/login'
            />
        </div>
    </div>
  )
}

export default Register