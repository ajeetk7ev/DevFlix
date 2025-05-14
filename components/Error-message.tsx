// components/ErrorMessage.tsx
import React from 'react'
import { AlertTriangle } from 'lucide-react'

interface ErrorMessageProps {
  message: string[]
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null

  return (
    <div className="w-full mt-1 flex items-center gap-2 p-4 text-sm text-red-700 bg-red-100 border border-red-400 rounded-lg">
      <AlertTriangle className="h-5 w-5 text-red-700" />
      <span>{message}</span>
    </div>
  )
}

export default ErrorMessage