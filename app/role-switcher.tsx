"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { GraduationCap, ChevronDown, UserCog, ShieldCheck } from "lucide-react"

export default function RoleSwitcher() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const switchToRole = (role: string) => {
    switch (role) {
      case "student":
        router.push("/dashboard")
        break
      case "teacher":
        router.push("/teacher/dashboard")
        break
      case "admin":
        router.push("/admin/dashboard")
        break
    }
    setOpen(false)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4" />
          <span>Switch Role</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchToRole("student")} className="cursor-pointer">
          <GraduationCap className="mr-2 h-4 w-4" />
          <span>Student</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchToRole("teacher")} className="cursor-pointer">
          <UserCog className="mr-2 h-4 w-4" />
          <span>Teacher</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchToRole("admin")} className="cursor-pointer">
          <ShieldCheck className="mr-2 h-4 w-4" />
          <span>Administrator</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

