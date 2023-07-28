import React, { useState } from 'react'
import { CustomBtn, UserFormInputGroup } from '../../components'
import { defaultFormFields } from '../../constants'

const Register = () => {
    

    
  return (
    <div className="register pad--x-default pad--y-default d--flex d--flex-col d--justify-center d--align-center">
        <div className="register__header d--flex d--flex-col d--align-center mar--b-3">
            <h1 className="heading heading--md">create account</h1>
            {
                errorMessage && (
                    <strong className="color--danger">{errorMessage}</strong>
                )
            }
        </div>
        
        <form className="register__form mar--b-3"  onSubmit={handleSubmit}>
            <div className="register__form-inputs mar--b-2 d--flex d--flex-col gap--1">
                <UserFormInputGroup
                    label='display name'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    type='text'
                    required
                />
                <UserFormInputGroup
                    label='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    type='email'
                    required
                />
                <UserFormInputGroup
                    label='password'
                    withIcon={true}
                    name='password'
                    type='password'
                    onChange={handleChange}
                    required
                    value={password}
                />
                <UserFormInputGroup
                    label='confirm password'
                    withIcon={true}
                    name='confirmPassword'
                    type='password'
                    onChange={handleChange}
                    required
                    value={confirmPassword}
                />
            </div>

            <div className='login__form-btns d--flex gap--1'>
                <CustomBtn
                    btnStlye='bg customBtn--bg--dark width--100'
                    text='Sign Up'
                    btnType='submit'
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
                route='/auth/login'
            />
        </div>
    </div>
  )
}

export default Register