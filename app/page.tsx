import Link from "next/link";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <div className="max-w-[500px] m-auto py-24">
      <FormControl className="flex flex-col gap-4">
        <div>
          <FormLabel>Username</FormLabel>
          <Input type='text' />
        </div>
        <div>
          <FormLabel>Job Title</FormLabel>
          <Input type='text' />
        </div>
      </FormControl>
      
      
      <Link href='/information'>Goto information </Link>
    </div>
  );
}
