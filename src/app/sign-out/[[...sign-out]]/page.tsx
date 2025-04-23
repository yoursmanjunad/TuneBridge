import React from 'react'
import { ClerkProvider, SignedOut } from '@clerk/nextjs'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <p>You are signed out.</p>
            </SignedOut>
            <p>This content is always visible.</p>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}