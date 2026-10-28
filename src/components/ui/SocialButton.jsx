function SocialButton({ provider, children, onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Continue with ${provider}`}
      className={`flex h-14 w-14 items-center justify-center rounded-[14px] border border-[#0B3155] bg-[#001B38] text-lg font-semibold text-[#FFD60A] transition-colors duration-200 hover:border-[#FFD60A]/40 hover:bg-[#00234a] focus:outline-none focus:ring-2 focus:ring-[#FFD60A]/50 ${className}`}
    >
      {children}
    </button>
  )
}

export default SocialButton