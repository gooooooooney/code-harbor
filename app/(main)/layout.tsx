import Navbar from '@/components/navbar/Navbar'
import Nav from '@/components/navbar/header'
import TrpcProvider from '@/lib/trpc/Provider'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <div className="relative h-full w-full bg-white dark:bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
          <TrpcProvider>
            <Nav />

            {children}
          </TrpcProvider>
        </div>
      </div>
    </>
  )
}

export default HomeLayout