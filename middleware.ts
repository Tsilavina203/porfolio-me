import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware pour s'assurer que toutes les routes sont accessibles publiquement
export function middleware(request: NextRequest) {
  // Permettre l'accès à toutes les routes sans authentification
  return NextResponse.next()
}

// Configurer les routes sur lesquelles le middleware s'applique
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

