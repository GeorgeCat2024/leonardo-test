'use client'

import { ReactNode } from 'react'

import { ApolloProvider } from '@apollo/client'

import client from './client'

const ApolloClientProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[]
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloClientProvider
