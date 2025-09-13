import { ReactNode } from 'react'
import { Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react'

interface DocsAlertProps {
  type?: 'info' | 'success' | 'warning' | 'danger'
  title?: string
  children: ReactNode
}

const icons = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  danger: XCircle,
}

export function DocsAlert({ type = 'info', title, children }: DocsAlertProps) {
  const Icon = icons[type]

  return (
    <div className={`docs-alert docs-alert-${type}`}>
      {title && (
        <div className="docs-alert-title">
          <Icon className="w-5 h-5" />
          {title}
        </div>
      )}
      <div className="prose-sm">{children}</div>
    </div>
  )
}