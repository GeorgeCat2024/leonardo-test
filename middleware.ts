export { auth as default } from "@/lib/auth";
import type { NextRequest } from 'next/server'
 
export async function middleware(request: NextRequest) {
 /**
  * Add auth url protect here
  */
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}