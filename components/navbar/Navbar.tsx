/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { ModeToggle } from "./mode-toggle"
import { links } from "@/config/nav-links"

type NavProps = React.PropsWithChildren<{}>

export function Navbar({ children }: NavProps) {

  const pathname = usePathname()
  const MotionLink = motion(Link)


  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower
    const OUTPUT_RANGE = outputUpper - outputLower

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
  }

  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue
  ) => {
    const bounds = item.getBoundingClientRect()
    const relativeX = event.clientX - bounds.left
    const relativeY = event.clientY - bounds.top
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX)
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY)
    x.set(xRange * 10)
    y.set(yRange * 10)
    console.log(xRange)
  }

  return (
    <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto">
      <ul className="flex gap-x-6">
        <AnimatePresence>
          {links.map((link) => {
            const x = useMotionValue(0)
            const y = useMotionValue(0)
            const textX = useTransform(x, (latest) => latest * 0.5)
            const textY = useTransform(y, (latest) => latest * 0.5)
            return (
              <motion.li
                onPointerMove={(event) => {
                  const item = event.currentTarget
                  setTransform(item, event, x, y)
                }}
                key={link.path}
                onPointerLeave={(event) => {
                  x.set(0)
                  y.set(0)
                }}
                style={{ x, y }}
              >
                <MotionLink
                  className={cn(
                    "font-medium relative rounded-md  text-sm text-primary py-2 px-4 transition-all duration-500 ease-out cursor-pointer",
                    pathname === link.path ? "bg-foreground text-primary-foreground  " : ""
                  )}
                  href={link.path}
                >
                  <motion.span
                    style={{ x: textX, y: textY }}
                    className="z-10 relative"
                  >
                    {link.name}
                  </motion.span>
                  {pathname === link.path ? (
                    <motion.div
                      transition={{ type: "spring" }}
                      layoutId="underline"
                      className="absolute w-full h-full rounded-md left-0 bottom-0 bg-foreground"
                    ></motion.div>
                  ) : null}
                </MotionLink>
              </motion.li>
            )
          })}
        </AnimatePresence>
      </ul>
      <div className="flex items-center gap-x-4">
        {children}
        <ModeToggle />
      </div>
    </nav>
  )
}
