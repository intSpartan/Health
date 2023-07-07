"use client"
import { SignIn } from '@clerk/nextjs/app-beta'
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client'
import {redirect , Link } from 'next/navigation'
const Home = () => {
    return (
        <div>
            <SignedIn>
                <li className='text-sm font-medium uppercase tracking-wider'>
                    <Link href='/dashboard'>Dashboard</Link>
                </li>
            </SignedIn>
            <SignedOut>
                <section className='py-24'>
                    <div className='container'>
                        <div className='flex justify-center'>
                            <SignIn />
                        </div>
                    </div>
                </section>
            </SignedOut>

        </div>

    );
}

export default Home;