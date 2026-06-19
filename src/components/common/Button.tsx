import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  as?: 'button' | 'a'
  href?: string
}

const variantClasses = {
  primary:
    'bg-primary text-white hover:bg-[#2a4a7a] shadow-md hover:shadow-lg',
  secondary:
    'bg-white dark:bg-slate-800 text-primary border-2 border-primary hover:bg-primary/5 dark:hover:bg-primary/10',
  ghost: 'text-primary hover:bg-primary/5 dark:hover:bg-primary/10',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  as = 'button',
  href,
}: Props) {
  const classes = `
    inline-flex items-center justify-center font-semibold
    transition-all duration-200 cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `

  if (as === 'a' && href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
    >
      {children}
    </motion.button>
  )
}
