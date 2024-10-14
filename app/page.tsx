import { redirect } from 'next/navigation'

import { SignInForm } from '@/components/sign-in/SignIn.Form'
import { auth } from '@/lib/auth'

export default async function Home() {
  const session = await auth()

  if (session?.user) {
    redirect('/account')
  }

  return <SignInForm />
}
