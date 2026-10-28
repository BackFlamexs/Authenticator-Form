function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -left-[120px] -top-[130px] h-[520px] w-[520px] rounded-full bg-[#FFD60A]/20 blur-[100px]"
      />
      <div
        className="absolute -bottom-[180px] -right-[160px] h-[600px] w-[600px] rounded-full bg-[#1E40AF]/35 blur-[120px]"
      />
    </div>
  )
}

export default BackgroundEffects