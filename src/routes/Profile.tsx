import { InputGroup } from "@/components"
import { Button } from "@/libs/shadcn/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/libs/shadcn/ui/card"
import { signOutStart } from "@/store/user/user.action"
import { selectCurrentUser } from "@/store/user/user.selector"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Profile = () => {

  const currentUser = useSelector(selectCurrentUser)
  
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
          <CardTitle className="text-neutral-500">Hello <span className=" text-neutral-800 capitalize">{currentUser?.displayName}</span></CardTitle>
          <Button variant={'link'} size={'lg'} onClick={signout}>Sign Out</Button>
        </CardHeader>

        <CardContent className="space-y-2">
          <form onSubmit={() => {}}>
            <div className="flex flex-col gap-6">
              <InputGroup
                label={'display name'}
                type={'text'}
                // disabled={}
                value={currentUser?.displayName}
                handleChange={() => {}}
                id={'display name'}
                name='displayName'
              />
              <InputGroup
                label={'email'}
                type={'email'}
                // disabled={}
                handleChange={() => {}}
                value={currentUser?.email}
                id={'email'}
                name={'email'}
              />
              <InputGroup
                label={'password'}
                type={'password'}
                handleChange={() => {}}
                id={'password'}
                name={'password'}
              />

              <Button type="submit">Apply</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}

export default Profile