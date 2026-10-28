import { useState } from 'react'
import BackgroundEffects from '../components/layout/BackgroundEffects.jsx'
import AuthBadge from '../components/ui/AuthBadge.jsx'
import SignInForm from '../components/auth/SignInForm.jsx'
import SignUpForm from '../components/auth/SignUpForm.jsx'

function AuthPage() {
  const [mode, setMode] = useState('signin')

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#000814]">
      <BackgroundEffects />
      <AuthBadge />
      <div className="absolute right-[56px] top-[48px] z-20 text-[11px] font-semibold uppercase tracking-wider text-[#9FB3CC] sm:text-xs">
        {mode === 'signin' ? 'SIGN IN' : 'SIGN UP'}
      </div>
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-24 sm:px-6">
        {mode === 'signin' ? (
          <SignInForm onSwitchToSignUp={() => setMode('signup')} />
        ) : (
          <SignUpForm onSwitchToSignIn={() => setMode('signin')} />
        )}
      </main>
    </div>
  )
}

export default AuthPage