"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import {useTheme} from "next-themes"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground active:bg-accent/80 dark:hover:bg-secondary/10 dark:active:bg-secondary/20 dark:active:ring-secondary/25 ring ring-background/0 transition-colors"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}