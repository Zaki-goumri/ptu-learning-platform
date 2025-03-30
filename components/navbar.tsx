"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Bell,
  Menu,
  Search,
  User,
  LogOut,
  Settings,
  BookOpen,
  GraduationCap,
  Users,
  FileText,
  BarChart,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import LanguageSelector from "./language-selector"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import RoleSwitcher from "@/app/role-switcher"

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const pathname = usePathname()
  const router = useRouter()
  const isAuth = pathname !== "/" && pathname !== "/login" && pathname !== "/signup"

  // Determine user role based on URL
  const userRole = pathname.includes("/admin") ? "admin" : pathname.includes("/teacher") ? "teacher" : "student"

  // Handle search functionality
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Simulate search functionality
      alert(
        `Searching for: ${searchQuery}\nIn a real implementation, this would search across courses, quizzes, and users.`,
      )
      // In a real app, we would navigate to search results page
      // router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
      setIsSearchOpen(false)
    }
  }

  // Save theme preference in cookie
  const saveThemePreference = (theme) => {
    document.cookie = `theme=${theme}; path=/; max-age=31536000` // 1 year
  }

  // Get theme from cookie on initial load
  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop().split(";").shift()
    }

    const savedTheme = getCookie("theme")
    if (savedTheme) {
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href={isAuth ? `/${userRole}/dashboard` : "/"} className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              P.T.U
            </span>
          </Link>
          {isAuth && (
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href={`/${userRole}/dashboard`}
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === `/${userRole}/dashboard` ? "text-foreground" : "text-foreground/60"
                }`}
              >
                Dashboard
              </Link>

              {userRole === "admin" && (
                <>
                  <Link
                    href="/admin/users"
                    className={`transition-colors hover:text-foreground/80 ${
                      pathname === "/admin/users" ? "text-foreground" : "text-foreground/60"
                    }`}
                  >
                    Users
                  </Link>
                  <Link
                    href="/admin/courses"
                    className={`transition-colors hover:text-foreground/80 ${
                      pathname === "/admin/courses" ? "text-foreground" : "text-foreground/60"
                    }`}
                  >
                    Courses
                  </Link>
                  <Link
                    href="/admin/attendance"
                    className={`transition-colors hover:text-foreground/80 ${
                      pathname === "/admin/attendance" ? "text-foreground" : "text-foreground/60"
                    }`}
                  >
                    Attendance
                  </Link>
                </>
              )}

              {userRole === "teacher" && (
                <>
                  <Link
                    href="/teacher/courses"
                    className={`transition-colors hover:text-foreground/80 ${
                      pathname === "/teacher/courses" || pathname.startsWith("/teacher/courses/")
                        ? "text-foreground"
                        : "text-foreground/60"
                    }`}
                  >
                    Courses
                  </Link>
                  <Link
                    href="/teacher/grades"
                    className={`transition-colors hover:text-foreground/80 ${
                      pathname === "/teacher/grades" ? "text-foreground" : "text-foreground/60"
                    }`}
                  >
                    Grades
                  </Link>
                  <Link
                    href="/teacher/quizzes/create"
                    className={`transition-colors hover:text-foreground/80 ${
                      pathname === "/teacher/quizzes/create" ? "text-foreground" : "text-foreground/60"
                    }`}
                  >
                    Quizzes
                  </Link>
                </>
              )}

              {userRole === "student" && (
                <>
                  <Link
                    href="/courses"
                    className={`transition-colors hover:text-foreground/80 ${
                      pathname === "/courses" || pathname.startsWith("/courses/")
                        ? "text-foreground"
                        : "text-foreground/60"
                    }`}
                  >
                    Courses
                  </Link>
                  <Link
                    href="/user/grades"
                    className={`transition-colors hover:text-foreground/80 ${
                      pathname === "/user/grades" ? "text-foreground" : "text-foreground/60"
                    }`}
                  >
                    My Grades
                  </Link>
                  <Link
                    href="/achievements"
                    className={`transition-colors hover:text-foreground/80 ${
                      pathname === "/achievements" ? "text-foreground" : "text-foreground/60"
                    }`}
                  >
                    Achievements
                  </Link>
                </>
              )}

              <Link
                href="/messages"
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === "/messages" ? "text-foreground" : "text-foreground/60"
                }`}
              >
                Messages
              </Link>

              <Link
                href="/schedule"
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === "/schedule" ? "text-foreground" : "text-foreground/60"
                }`}
              >
                Schedule
              </Link>
            </nav>
          )}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href={isAuth ? `/${userRole}/dashboard` : "/"} className="flex items-center space-x-2 mb-6">
              <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                P.T.U
              </span>
            </Link>
            {isAuth && (
              <nav className="grid gap-4 text-sm font-medium">
                <Link
                  href={`/${userRole}/dashboard`}
                  className="flex items-center gap-2 py-2 text-foreground hover:text-foreground/80"
                >
                  <BarChart className="h-4 w-4" />
                  Dashboard
                </Link>

                {userRole === "admin" && (
                  <>
                    <Link
                      href="/admin/users"
                      className="flex items-center gap-2 py-2 text-foreground hover:text-foreground/80"
                    >
                      <Users className="h-4 w-4" />
                      Users
                    </Link>
                    <Link
                      href="/admin/courses"
                      className="flex items-center gap-2 py-2 text-foreground hover:text-foreground/80"
                    >
                      <BookOpen className="h-4 w-4" />
                      Courses
                    </Link>
                    <Link
                      href="/admin/attendance"
                      className="flex items-center gap-2 py-2 text-foreground hover:text-foreground/80"
                    >
                      <FileText className="h-4 w-4" />
                      Attendance
                    </Link>
                  </>
                )}

                {userRole === "teacher" && (
                  <>
                    <Link
                      href="/teacher/courses"
                      className="flex items-center gap-2 py-2 text-foreground hover:text-foreground/80"
                    >
                      <BookOpen className="h-4 w-4" />
                      Courses
                    </Link>
                    <Link
                      href="/teacher/grades"
                      className="flex items-center gap-2 py-2 text-foreground hover:text-foreground/80"
                    >
                      <FileText className="h-4 w-4" />
                      Grades
                    </Link>
                    <Link
                      href="/teacher/quizzes/create"
                      className="flex items-center gap-2 py-2 text-foreground hover:text-foreground/80"
                    >
                      <FileText className="h-4 w-4" />
                      Quizzes
                    </Link>
                  </>
                )}

                {userRole === "student" && (
                  <>
                    <Link
                      href="/courses"
                      className="flex items-center gap-2 py-2 text-foreground hover:text-foreground/80"
                    >
                      <BookOpen className="h-4 w-4" />
                      Courses
                    </Link>
                    <Link
                      href="/user/grades"
                      className="flex items-center gap-2 py-2 text-foreground hover:text-foreground/80"
                    >
                      <FileText className="h-4 w-4" />
                      My Grades
                    </Link>
                    <Link
                      href="/achievements"
                      className="flex items-center gap-2 py-2 text-foreground hover:text-foreground/80"
                    >
                      <GraduationCap className="h-4 w-4" />
                      Achievements
                    </Link>
                  </>
                )}

                <Link
                  href="/messages"
                  className="flex items-center gap-2 py-2 text-foreground hover:text-foreground/80"
                >
                  Messages
                </Link>

                <Link
                  href="/schedule"
                  className="flex items-center gap-2 py-2 text-foreground hover:text-foreground/80"
                >
                  Schedule
                </Link>
              </nav>
            )}
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-end space-x-2">
          {isAuth && (
            <>
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="relative w-full max-w-xs">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search courses, quizzes, users..."
                    className="w-full rounded-md pl-8"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onBlur={() => !searchQuery && setIsSearchOpen(false)}
                  />
                </form>
              ) : (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" onClick={() => setIsSearchOpen(true)}>
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Search</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}

              <Link href="/notifications">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="relative">
                        <Bell className="h-5 w-5" />
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">
                          3
                        </Badge>
                        <span className="sr-only">Notifications</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Notifications</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>

              <div className="flex items-center gap-2">
                <RoleSwitcher />
                <ThemeToggle />
                <LanguageSelector />
              </div>

              <DropdownMenu>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                          <User className="h-5 w-5" />
                          <span className="sr-only">User menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>User Menu</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <DropdownMenuContent align="end">
                  <Link href="/profile">
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/settings">
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />

                  {/* Role switcher for demo purposes */}
                  {userRole === "student" && (
                    <>
                      <Link href="/teacher/dashboard">
                        <DropdownMenuItem>
                          <span className="mr-2">👨‍🏫</span>
                          <span>Switch to Teacher</span>
                        </DropdownMenuItem>
                      </Link>
                      <Link href="/admin/dashboard">
                        <DropdownMenuItem>
                          <span className="mr-2">👑</span>
                          <span>Switch to Admin</span>
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuSeparator />
                    </>
                  )}

                  {userRole === "teacher" && (
                    <>
                      <Link href="/dashboard">
                        <DropdownMenuItem>
                          <span className="mr-2">👨‍🎓</span>
                          <span>Switch to Student</span>
                        </DropdownMenuItem>
                      </Link>
                      <Link href="/admin/dashboard">
                        <DropdownMenuItem>
                          <span className="mr-2">👑</span>
                          <span>Switch to Admin</span>
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuSeparator />
                    </>
                  )}

                  {userRole === "admin" && (
                    <>
                      <Link href="/dashboard">
                        <DropdownMenuItem>
                          <span className="mr-2">👨‍🎓</span>
                          <span>Switch to Student</span>
                        </DropdownMenuItem>
                      </Link>
                      <Link href="/teacher/dashboard">
                        <DropdownMenuItem>
                          <span className="mr-2">👨‍🏫</span>
                          <span>Switch to Teacher</span>
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuSeparator />
                    </>
                  )}

                  <Link href="/">
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

