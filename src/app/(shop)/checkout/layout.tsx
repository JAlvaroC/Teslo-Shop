import { auth } from '@/auth.config'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function CheckoutLayout ({
  children
}: {
  children: React.ReactNode
}) {
  // console.log('hola')
  const session = await auth()
  if (!session?.user) {
    // redirect('/auth/login?returnTo=/perfil')
    redirect('/auth/login?redirectTo=/checkout/address')
  }
  return <>{children}</>
}
