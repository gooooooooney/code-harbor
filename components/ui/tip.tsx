"use client"
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'
import { AnimatePresence, motion } from 'framer-motion'

type TipProps = React.PropsWithChildren<{
  content: React.ReactNode
}>

export const Tip = ({ children, content }: TipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <div
            className="  relative group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
              >               
                {content}
              </motion.div>
            </AnimatePresence>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  )
}
