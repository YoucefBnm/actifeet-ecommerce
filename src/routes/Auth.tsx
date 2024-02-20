import { Spinner } from "@/components"
import { FormForgotPassword, FormLogin, FormSignup } from "@/layouts"
import { Card, CardContent, CardHeader, CardTitle } from "@/libs/shadcn/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/libs/shadcn/ui/tabs"
import { selectLoading } from "@/store/user/user.selector"
import { useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Auth = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const loading = useSelector(selectLoading)

  const authState = location.pathname.split('/').at(-1)

  return (
    <main className="px-default py-8">
      <Tabs value={authState} className=" w-4/5 md:w-2/5 mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="login" asChild>
            <Link to='login' onClick={() => navigate('/login')}>Login</Link>
          </TabsTrigger>
          
          <TabsTrigger value="forgot-password" asChild>
            <Link to='forgot-password' onClick={() => navigate('/forgot-password')}>Password</Link>
          </TabsTrigger>

          <TabsTrigger value="signup" asChild>
            <Link to='signup' onClick={() => navigate('/signup')}>Signup</Link>
          </TabsTrigger>
        </TabsList>

        <div className="relative">
          {loading && <div className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,.25)] flex justify-center items-center"><div className="w-12 h-12"><Spinner /></div></div>}
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle className=" text-neutral-700">Create your Account</CardTitle>
              </CardHeader>

              <CardContent className="space-y-2">
                <FormSignup />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle className="text-neutral-700">Login to your Account</CardTitle>
              </CardHeader>

              <CardContent className="space-y-2">
                <FormLogin />
              </CardContent>
            </Card>

          </TabsContent>

          <TabsContent value="forgot-password">
            <Card>
              <CardHeader>
                <CardTitle className=" text-neutral-700">Forgot Password</CardTitle>
              </CardHeader>

              <CardContent className="space-y-2">
                <FormForgotPassword />
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </main>
  )
}

export default Auth