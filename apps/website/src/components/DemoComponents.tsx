// Temporary demo components that mimic Maxzilla UI styling
// These will be replaced with actual React wrappers once integration is complete

import React from 'react'

interface DemoButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function DemoButton({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick,
  className = ''
}: DemoButtonProps) {
  const baseClasses = 'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  )
}

interface DemoCardProps {
  elevation?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

export function DemoCard({ elevation = 'md', children, className = '' }: DemoCardProps) {
  const elevationClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md hover:shadow-lg',
    lg: 'shadow-lg hover:shadow-xl'
  }
  
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 ${elevationClasses[elevation]} transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  )
}

interface DemoInputProps {
  label?: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  helperText?: string
  required?: boolean
}

export function DemoInput({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  helperText,
  required 
}: DemoInputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-200"
      />
      {helperText && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{helperText}</p>
      )}
    </div>
  )
}

interface DemoBadgeProps {
  variant?: 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function DemoBadge({ variant = 'info', size = 'md', children }: DemoBadgeProps) {
  const variantClasses = {
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    error: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200'
  }
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  }
  
  return (
    <span className={`inline-flex items-center rounded-full border font-medium ${variantClasses[variant]} ${sizeClasses[size]}`}>
      {children}
    </span>
  )
}

interface DemoAvatarProps {
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
  online?: boolean
}

export function DemoAvatar({ src, alt = '', size = 'md', online }: DemoAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }
  
  const dotSizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  }
  
  return (
    <div className="relative inline-block">
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-300 dark:bg-gray-600 flex items-center justify-center`}>
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500 dark:text-gray-400 font-medium">
            {alt.charAt(0).toUpperCase() || '?'}
          </span>
        )}
      </div>
      {online && (
        <div className={`absolute bottom-0 right-0 ${dotSizeClasses[size]} bg-green-500 rounded-full border-2 border-white dark:border-gray-800`}></div>
      )}
    </div>
  )
}

interface DemoModalProps {
  open: boolean
  onClose: () => void
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function DemoModal({ open, onClose, size = 'md', children }: DemoModalProps) {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl'
  }
  
  if (!open) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 w-full mx-4 ${sizeClasses[size]} max-h-[90vh] overflow-y-auto`}>
        {children}
      </div>
    </div>
  )
}