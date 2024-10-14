import { redirect } from 'next/navigation'
import NextLink from 'next/link'

import { auth } from '@/lib/auth'
import { AccountForm } from '@/components/account/Account.Form'
import { Link, Stack } from '@chakra-ui/react'

export default async function AccountPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

  return (
    <Stack gap={2}>
      <AccountForm user={session.user} />
      <Link as={NextLink} href="/information" className="w-full text-center">
        See Animes
      </Link>
    </Stack>
  )
}
