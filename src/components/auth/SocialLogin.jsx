import SocialButton from '../ui/SocialButton.jsx'

function SocialLogin() {
  return (
    <div className="flex items-center justify-center gap-[14px]">
      <SocialButton provider="Google">G</SocialButton>
      <SocialButton provider="Apple">A</SocialButton>
      <SocialButton provider="Facebook">f</SocialButton>
    </div>
  )
}

export default SocialLogin