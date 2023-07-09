import { SignInButton, UserButton } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client'
import { currentUser, UserProvider, useClerk } from '@clerk/nextjs';
import { User } from '@nextui-org/react';
import { useRouter } from 'next/navigation';


export default function LoginButton() {
    // const user = await currentUser();
    const router = useRouter();
    // const { getSession, hasSession } = useClerk();
    // const func = () => {
    //     if (!hasSession) {
    //         router.push('/signup');
    //         return null;
    //     }

    // }
    return (
        <div>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton mode='modal'>
                    <button className='rounded border border-gray-400 px-3 py-0.5 text-black'>
                        Sign in
                    </button>
                </SignInButton>
            </SignedOut>
        </div>
    )
}
