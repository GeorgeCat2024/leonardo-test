'use client'

import {
  Stack,
  Card,
  CardBody,
  Heading,
  Button,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react'
import { useSession } from 'next-auth/react'

import { logOut } from '@/lib/actions/authentication'
import { User } from '@/types/user'

export function AccountForm({ user }: { user: User }) {
  const { data: session, update } = useSession()

  const toast = useToast()

  const handleUpdateUser = async (formData: FormData) => {
    const newSession = {
      ...session,
      user: {
        ...session?.user,
        userName: formData.get('userName'),
        jobTitle: formData.get('jobTitle'),
      },
    }

    await update(newSession)

    toast({
      title: 'Account updated.',
      status: 'success',
      position: 'top',
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <Stack className="m-auto max-w-xl p-12">
      <Card>
        <CardBody>
          <form action={handleUpdateUser}>
            <Stack gap={6}>
              <Heading>Logged Account</Heading>

              <Stack>
                <Text as="b">User:</Text>
                <Input defaultValue={user.userName ?? ''} name="userName" />
              </Stack>
              <Stack>
                <Text as="b">Job Title:</Text>
                <Input defaultValue={user.jobTitle ?? ''} name="jobTitle" />
              </Stack>
              <Stack>
                <Button colorScheme="green" type="submit">
                  Update
                </Button>
                <Button onClick={() => logOut()}>Sign Out</Button>
              </Stack>
            </Stack>
          </form>
        </CardBody>
      </Card>
    </Stack>
  )
}
