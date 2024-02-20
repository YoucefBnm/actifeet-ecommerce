
const AuthForm = ({handleSubmit, children}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
            {children}
        </div>
    </form>
  )
}

export default AuthForm