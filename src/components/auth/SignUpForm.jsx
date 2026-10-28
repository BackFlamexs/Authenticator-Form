import { useState } from 'react'
import Input from '../ui/Input.jsx'
import Button from '../ui/Button.jsx'
import AuthDivider from './AuthDivider.jsx'
import SocialLogin from './SocialLogin.jsx'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function SignUpForm({ onSwitchToSignIn }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const nextErrors = { name: '', email: '', password: '' }
    const trimmedName = formData.name.trim()
    if (!trimmedName) {
      nextErrors.name = 'Full name is required.'
    } else if (trimmedName.length < 2) {
      nextErrors.name = 'Enter a meaningful name.'
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!formData.password) {
      nextErrors.password = 'Password is required.'
    } else if (formData.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.'
    }
    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (nextErrors.name || nextErrors.email || nextErrors.password) return

    setLoading(true)
    window.setTimeout(() => {
      console.info('Sign Up form submitted', {
        name: formData.name.trim(),
        email: formData.email.trim(),
      })
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="w-full max-w-[480px] rounded-3xl border border-[#0B3155] bg-[#00152E] px-[30px] pt-[34px] pb-[30px] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex flex-col gap-[18px]">
        <div className="flex flex-col gap-1">
          <h1 className="text-[30px] font-bold leading-tight text-[#FFE44D]">
            Create Account
          </h1>
          <p className="text-sm text-[#9FB3CC]">Join our community today</p>
        </div>

        <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit} noValidate>
          <Input
            id="signup-name"
            name="name"
            type="text"
            label="Full Name"
            value={formData.name}
            onChange={handleChange('name')}
            placeholder="Your full name"
            error={errors.name}
            required
            autoComplete="name"
          />
          <Input
            id="signup-email"
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
            id="signup-password"
            name="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={handleChange('password')}
            placeholder="At least 8 characters"
            error={errors.password}
            required
            autoComplete="new-password"
          />

          <Button type="submit" loading={loading}>
            Create Account
          </Button>
        </form>

        <AuthDivider />
        <SocialLogin />

        <p className="text-center text-xs text-[#9FB3CC]">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToSignIn}
            className="font-semibold text-[#FFD60A] transition-colors hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  )
}

export default SignUpForm