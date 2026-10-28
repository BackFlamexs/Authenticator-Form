import { useState } from 'react'
import Input from '../ui/Input.jsx'
import Button from '../ui/Button.jsx'
import AuthDivider from './AuthDivider.jsx'
import SocialLogin from './SocialLogin.jsx'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function SignInForm({ onSwitchToSignUp }) {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({ email: '', password: '' })
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const nextErrors = { email: '', password: '' }
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!formData.password) {
      nextErrors.password = 'Password is required.'
    }
    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (nextErrors.email || nextErrors.password) return

    setLoading(true)
    window.setTimeout(() => {
      console.info('Sign In form submitted', {
        email: formData.email.trim(),
        rememberMe,
      })
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="w-full max-w-[480px] rounded-3xl border border-[#0B3155] bg-[#00152E] px-[30px] pt-[34px] pb-[30px] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex flex-col gap-[18px]">
        <div className="flex flex-col gap-1">
          <h1 className="text-[30px] font-bold leading-tight text-[#FFE44D]">
            Welcome Back
          </h1>
          <p className="text-sm text-[#9FB3CC]">Sign in to continue your journey</p>
        </div>

        <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit} noValidate>
          <Input
            id="signin-email"
            name="email"
            type="email"
            label="Email Address"
            value={formData.email}
            onChange={handleChange('email')}
            placeholder="you@example.com"
            error={errors.email}
            required
            autoComplete="email"
          />
          <Input
            id="signin-password"
            name="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={handleChange('password')}
            placeholder="Enter your password"
            error={errors.password}
            required
            autoComplete="current-password"
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-xs text-[#9FB3CC]">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-[#0B3155] bg-[#001B38] accent-[#FFD60A]"
              />
              Remember me
            </label>
            <button
              type="button"
              className="text-xs font-medium text-[#9FB3CC] transition-colors hover:text-[#FFD60A]"
            >
              Forgot password?
            </button>
          </div>

          <Button type="submit" loading={loading}>
            Sign In
          </Button>
        </form>

        <AuthDivider />
        <SocialLogin />

        <p className="text-center text-xs text-[#9FB3CC]">
          Don&apos;t have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToSignUp}
            className="font-semibold text-[#FFD60A] transition-colors hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  )
}

export default SignInForm