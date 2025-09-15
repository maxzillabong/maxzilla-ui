"use client"
import React from 'react'
import { ToastContainer, Button } from 'maxzilla-ui-react'
import { Check } from 'lucide-react'

export const ToastContainerPreview: React.FC = () => {
  const [ref, setRef] = React.useState<any>(null)

  const showSuccessToast = () => {
    if (ref) {
      ref.show({
        title: 'File Uploaded',
        message: 'profile-photo.jpg uploaded successfully',
        variant: 'success',
        avatar: 'https://i.pravatar.cc/40?img=5',
        duration: 4000
      })
    }
  }

  const showNotificationToast = () => {
    if (ref) {
      ref.show({
        title: 'New Message',
        message: 'You have a new message from Sarah',
        variant: 'info',
        avatar: 'https://i.pravatar.cc/40?img=9',
        duration: 5000
      })
    }
  }

  const showErrorToast = () => {
    if (ref) {
      ref.show({
        title: 'Upload Failed',
        message: 'File size exceeds 10MB limit',
        variant: 'error',
        duration: 5000
      })
    }
  }

  return (
    <div className="space-y-3">
      <ToastContainer ref={setRef as any} position="bottom-right" />
      <div className="flex flex-wrap gap-2">
        <Button variant="primary" onClick={showSuccessToast}>
          <Check className="w-4 h-4 mr-2" /> Success Toast
        </Button>
        <Button variant="primary" onClick={showNotificationToast}>
          <MessageCircle className="w-4 h-4 mr-2" /> Notification
        </Button>
        <Button variant="outline" onClick={showErrorToast}>
          <X className="w-4 h-4 mr-2" /> Error Toast
        </Button>
      </div>
    </div>
  )
}