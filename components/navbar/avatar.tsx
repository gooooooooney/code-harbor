import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { getUserAuth } from '@/lib/auth/utils';
import { Button } from '../ui/button';
import { PersonIcon } from '@radix-ui/react-icons';

export const Avatar = async () => {
    const { session } = await getUserAuth();
    if (session?.user) {
        return <UserButton />
    }
    return (
        <Button variant="outline" size="icon">
            <PersonIcon />
        </Button>
    )
}
