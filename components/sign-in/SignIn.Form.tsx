'use client'

import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  Stack,
  Button,
  Card,
  CardBody,
} from '@chakra-ui/react'
import { logIn } from '@/lib/actions/authentication'

export function SignInForm() {
  return (
    <div className="max-w-[500px] m-auto p-6 md:p-24">
      <Card>
        <CardBody>
          <Stack gap={8}>
            <Heading>Login</Heading>
            <FormControl>
              <form className="flex flex-col gap-4" action={logIn}>
                <div>
                  <FormLabel>Username</FormLabel>
                  <Input type="text" name="userName" />
                </div>
                <div>
                  <FormLabel>Job Title</FormLabel>
                  <Input type="text" name="jobTitle" />
                </div>
                <Button colorScheme="green" type="submit">
                  Sign In
                </Button>
              </form>
            </FormControl>
          </Stack>
        </CardBody>
      </Card>
    </div>
  )
}
