import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton, currentUser } from '@clerk/nextjs'
import { Button, buttonVariants } from '@/components/ui/button';
import { EmailIcon, GithubIcon, GoogleIcon, UserIcon } from '@/components/icons';
import { Tip } from '@/components/ui/tip';
import { cn } from '@/lib/utils';

const StrategyIcon = ({ strategy }: { strategy: string }) => {
    switch (strategy) {
        case 'from_oauth_github':
            return <GithubIcon />
        case 'from_oauth_google':
            return <GoogleIcon />
        case 'from_oauth_email':
            return <EmailIcon />

        default:
            return null
    }
}

export const Avatar = async () => {
    const user = await currentUser();
    const strategy = user?.emailAddresses[0].verification?.strategy

    return (
        <>
            <SignedIn>
                <div className='relative'>
                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox: "w-10 h-10 ring-2 ring-white dark:ring-zinc-900 ",
                            }
                        }}
                    />
                    {
                        strategy && (
                            <span className='pointer-events-none absolute -bottom-1 -right-1 flex h-4 w-4 select-none items-center justify-center rounded-full bg-white dark:bg-zinc-900'>
                                <StrategyIcon strategy={strategy} />
                            </span>
                        )
                    }
                </div>
            </SignedIn>
            <SignedOut>


                <SignInButton mode='modal' redirectUrl='/'>
                    <div>
                        <Tip content="登录">
                            <button type='button' className={cn(buttonVariants({
                                variant: "outline",
                                size: "icon",
                                rounded: "pill",
                            }))}>
                                <UserIcon className='h-5 w-5' />
                            </button>
                        </Tip>
                    </div>

                </SignInButton>

            </SignedOut>
        </>
    )
}
