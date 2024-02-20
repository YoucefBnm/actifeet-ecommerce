import { InputGroup } from "@/components"
import { auth } from "@/firebase/controllers"
import { signInAuthUserWithEmailAndPassword } from "@/firebase/user/user"
import { Button } from "@/libs/shadcn/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/libs/shadcn/ui/card"
import { signOutStart } from "@/store/user/user.action"
import { selectCurrentUser } from "@/store/user/user.selector"
import { reauthenticateWithCredential, reauthenticateWithPopup, reauthenticateWithRedirect, signInWithEmailAndPassword, updateCurrentUser, updateEmail } from "firebase/auth"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"

const Profile = () => {

  const currentUser = useSelector(selectCurrentUser)
  


  // const { displayName, email } = currentUser
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const signWithEmailAndPass = (password) => signInWithEmailAndPassword(auth, email, password)

  const updateUserEmail = email => {
    updateEmail(auth.currentUser, email)
  }
  const [formFields, setFormFields] = useState({displayName: currentUser.displayName, email: currentUser.email})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({...formFields, [name]: value })
  }

  
  const {displayName, email } = formFields
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const signout = () => {
    dispatch(signOutStart())
    navigate('/auth/login')
  }
  return (
    <main className="px-default py-8">
      <Card className="w-4/5 md:w-2/5 mx-auto">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-neutral-500">Hello <span className=" text-neutral-800 capitalize">{currentUser.displayName}</span></CardTitle>
          <Button variant={'link'} size={'lg'} onClick={signout}>Sign Out</Button>
        </CardHeader>

        <CardContent className="space-y-2">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <InputGroup
                label={'display name'}
                type={'text'}
                // disabled={}
                value={displayName}
                handleChange={handleChange}
                id={'display name'}
                name='displayName'
              />
              <InputGroup
                label={'email'}
                type={'email'}
                // disabled={}
                handleChange={handleChange}
                value={email}
                id={'email'}
                name={'email'}
              />
              <InputGroup
                label={'password'}
                type={'password'}
                handleChange={handleChange}
                id={'password'}
                name={'password'}
              />

              <Button onClick={() => updateUserEmail(email)} type="submit">Apply</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}

export default Profile