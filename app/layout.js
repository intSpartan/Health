import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

// import Worker from "worker-loader!./Worker.js";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pathalogy Test',
  description: 'Pathalogy testing can be done here',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
