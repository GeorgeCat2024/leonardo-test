This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Structure
This app is built on the Next.js app router and organized as follows:

- **app**: Contains all pages.
- **components**: Houses reusable components organized by pages.
- **lib**: Contains shared utilities, such as hooks, providers, - and API requests.
- **query**: Stores GraphQL queries.
- **types**: Defines types for pages, data, and components.

## Authentication
This app utilizes NextAuth.js, a powerful and convenient authentication library tailored for Next.js applications. NextAuth.js simplifies the implementation of various authentication methods, including OAuth providers (such as Google, Facebook, and GitHub) and email/password login. It handles session management, token storage, and user authentication seamlessly, making it easy to integrate secure, scalable, and customizable authentication into your Next.js app with minimal setup.

## Preconditions
- Node > 20.9.0

## Getting Started

First, install all dependencies
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
