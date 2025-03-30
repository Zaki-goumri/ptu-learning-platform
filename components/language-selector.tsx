"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type Language = {
  code: string
  name: string
  nativeName: string
  direction: "ltr" | "rtl"
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", direction: "ltr" },
  { code: "fr", name: "French", nativeName: "Français", direction: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", direction: "rtl" },
]

export default function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])

  // Load language preference from cookie on initial render
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop()?.split(";").shift()
    }

    const savedLanguage = getCookie("language")
    if (savedLanguage) {
      const lang = languages.find((l) => l.code === savedLanguage)
      if (lang) {
        setCurrentLanguage(lang)
        document.documentElement.dir = lang.direction
        document.documentElement.lang = lang.code
      }
    }
  }, [])

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language)

    // Update document properties
    document.documentElement.dir = language.direction
    document.documentElement.lang = language.code

    // Save preference in cookie
    document.cookie = `language=${language.code}; path=/; max-age=31536000` // 1 year

    // Simulate language change
    alert(`Language changed to ${language.name}`)
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <DropdownMenu>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Select language</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <DropdownMenuContent align="end">
            {languages.map((language) => (
              <DropdownMenuItem
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                className={currentLanguage.code === language.code ? "bg-purple-900/20 text-purple-400" : ""}
              >
                <span className="mr-2">{language.code === "ar" ? "🇦🇪" : language.code === "fr" ? "🇫🇷" : "🇬🇧"}</span>
                <span>{language.nativeName}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <TooltipContent>
          <p>Change Language</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

