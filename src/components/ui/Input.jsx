function Input({
  id,
  name,
  type = 'text',
  label,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  autoComplete,
  disabled = false,
  className = '',
}) {
  const errorId = error ? `${id}-error` : undefined

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-[13px] font-medium text-[#F1F5F9]"
        >
          {label}
          {required && <span className="ml-1 text-[#FFD60A]">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={`h-14 w-full rounded-xl border bg-[#001B38] px-4 text-sm text-[#F1F5F9] placeholder:text-[#9FB3CC]/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/40 disabled:cursor-not-allowed disabled:opacity-60 ${error ? 'border-[#EF4444]' : 'border-[#0B3155] focus:border-[#3B82F6]'} ${className}`}
      />
      {error && (
        <p
          id={errorId}
          role="alert"
          className="text-xs text-[#EF4444]"
        >
          {error}
        </p>
      )}
    </div>
  )
}

export default Input