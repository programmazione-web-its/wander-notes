'use client'
import Link from 'next/link'

export default function Button({
  children,
  onClick,
  className,
  type,
  to,
  rest,
}) {
  return (
    <>
      {type === 'link' ? (
        <Link
          href={to}
          className={`bg-primary text-background border border-primary hover:bg-transparent hover:text-primary cursor-pointer transition-colors px-4 py-0.5 ${className}`}
          {...rest}
        >
          {children}
        </Link>
      ) : (
        <button
          className={`bg-primary text-background border border-primary hover:bg-transparent hover:text-primary cursor-pointer transition-colors px-4 py-0.5 ${className}`}
          onClick={onClick}
          {...rest}
        >
          {children}
        </button>
      )}
    </>
  )
}
