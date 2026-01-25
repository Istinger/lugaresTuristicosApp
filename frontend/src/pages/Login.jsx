
import LoginHeader from '../components/LoginHeader'
import LoginForm from '../components/LoginForm'
import SocialLogin from '../components/SocialLogin'

export default function Login() {
  return (
    <div className="min-h-screen w-full bg-[#fbfaf9] font-display text-[#101819] flex flex-col">

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-xl p-6">
          <LoginHeader />
          <LoginForm />
          <SocialLogin />
        </div>
      </main>
    </div>
  )
}
