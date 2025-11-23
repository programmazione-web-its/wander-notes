'use client'

export default function Button({ children, onClick, className, rest }) {
  return (
    <button
      className={`bg-primary text-background border border-primary hover:bg-transparent hover:text-primary cursor-pointer transition-colors px-4 py-0.5 ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}
