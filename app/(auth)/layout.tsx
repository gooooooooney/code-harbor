import { Logo } from '@/components/logo'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className='h-full flex flex-col items-center justify-center space-y-6'>
      <div className='flex justify-center'>
        <Logo />
      </div>
      {children}

    </div>
  )
}