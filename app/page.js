import Image from 'next/image'
import Hero from './Components/Hero'
import Header from './Components/Header'
import { currentUser } from '@clerk/nextjs';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='w-full z-2'>
        <Header />
      </div>
      <div className="z-1 w-full items-center justify-between font-mono text-sm lg:flex">
        <Hero />
      </div>
    </main>
  )
}
