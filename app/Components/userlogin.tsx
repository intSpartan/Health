'use client'

import { useState } from 'react'

import Link from 'next/link'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client'


export const UserLogin = () => {
    return (
        <div className='flex items-center justify-between gap-6'>
            <button
                className='flex items-center gap-x-2 pl-4'>
            </button>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton mode='modal'>
                    <button className='rounded border border-gray-400 px-3 py-0.5'>
                        Sign in
                    </button>
                </SignInButton>
            </SignedOut>
        </div>
    )
}