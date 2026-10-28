function Button({
  type = 'button',
  children,
  onClick,
  disabled = false,
  loading = false,
  className = '',
}) {
  const isDisabled = disabled || loading

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading}
      className={`flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#FFD60A] text-sm font-semibold text-[#000814] shadow-[0_8px_24px_-8px_rgba(255,214,10,0.45)] transition-all duration-200 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#FFD60A]/60 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
    >
      {loading && (
        <svg
          className="h-5 w-5 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      <span>{children}</span>
    </button>
  )
}

export default Button