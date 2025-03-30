"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  MessageSquare,
  Award,
  Settings,
  Map,
  Users,
  FileText,
  BarChart,
  Calendar,
  Bell,
  ShieldCheck,
  Clock,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Define navigation items by role
const studentItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Courses",
    href: "/courses",
    icon: BookOpen,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: GraduationCap,
  },
  {
    name: "Messages",
    href: "/messages",
    icon: MessageSquare,
    badge: "3",
  },
  {
    name: "Achievements",
    href: "/achievements",
    icon: Award,
  },
  {
    name: "Campus Map",
    href: "/campus-map",
    icon: Map,
  },
  {
    name: "Schedule",
    href: "/schedule",
    icon: Calendar,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: Bell,
    badge: "5",
  },
]

const teacherItems = [
  {
    name: "Dashboard",
    href: "/teacher/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Courses",
    href: "/teacher/courses",
    icon: BookOpen,
    children: [
      {
        name: "Manage Courses",
        href: "/teacher/courses",
      },
      {
        name: "Create Course",
        href: "/teacher/courses/create",
      },
    ],
  },
  {
    name: "Students",
    href: "/teacher/students",
    icon: Users,
  },
  {
    name: "Grades",
    href: "/teacher/grades",
    icon: FileText,
  },
  {
    name: "Quizzes",
    href: "/teacher/quizzes",
    icon: BarChart,
    children: [
      {
        name: "All Quizzes",
        href: "/teacher/quizzes",
      },
      {
        name: "Create Quiz",
        href: "/teacher/quizzes/create",
      },
    ],
  },
  {
    name: "Class Schedule",
    href: "/teacher/schedule",
    icon: Calendar,
    children: [
      {
        name: "Weekly Schedule",
        href: "/teacher/schedule",
      },
      {
        name: "Office Hours",
        href: "/teacher/schedule/office-hours",
      },
      {
        name: "Exam Dates",
        href: "/teacher/schedule/exams",
      },
    ],
  },
  {
    name: "Messages",
    href: "/messages",
    icon: MessageSquare,
    badge: "8",
  },
]

const adminItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    name: "Courses",
    href: "/admin/courses",
    icon: BookOpen,
  },
  {
    name: "Departments",
    href: "/admin/departments",
    icon: GraduationCap,
  },
  {
    name: "Master Schedule",
    href: "/admin/schedule",
    icon: Calendar,
    children: [
      {
        name: "Academic Calendar",
        href: "/admin/schedule",
      },
      {
        name: "Room Assignments",
        href: "/admin/schedule/rooms",
      },
      {
        name: "Department Schedules",
        href: "/admin/schedule/departments",
      },
    ],
  },
  {
    name: "Attendance",
    href: "/admin/attendance",
    icon: Clock,
  },
  {
    name: "Security",
    href: "/admin/security",
    icon: ShieldCheck,
  },
]

// Common items for all roles
const commonItems = [
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [userRole, setUserRole] = useState("student") // Default role
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  // Determine user role based on URL path
  useEffect(() => {
    if (pathname.startsWith("/admin")) {
      setUserRole("admin")
    } else if (pathname.startsWith("/teacher")) {
      setUserRole("teacher")
    } else {
      setUserRole("student")
    }
  }, [pathname])

  // Hide sidebar on login and home pages
  if (pathname === "/" || pathname === "/login" || pathname === "/signup") {
    return null
  }

  // Get navigation items based on role
  const getNavItems = () => {
    switch (userRole) {
      case "admin":
        return [...adminItems, ...commonItems]
      case "teacher":
        return [...teacherItems, ...commonItems]
      default:
        return [...studentItems, ...commonItems]
    }
  }

  const navItems = getNavItems()

  const toggleExpand = (name: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  return (
    <div className="hidden md:flex md:flex-col md:w-64 md:border-r bg-background">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-purple-500">P.T.U Platform</h2>
          <Badge variant="outline" className="text-xs">
            {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-4 overflow-y-auto">
        {navItems.map((item) =>
          item.children ? (
            <Collapsible
              key={item.href}
              open={expandedItems[item.name]}
              onOpenChange={() => toggleExpand(item.name)}
              className="w-full"
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-between px-3 py-2 text-sm font-medium",
                    pathname.startsWith(item.href)
                      ? "bg-purple-900/50 text-purple-100"
                      : "text-muted-foreground hover:bg-purple-900/30 hover:text-purple-100",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn("transition-transform", expandedItems[item.name] ? "rotate-180" : "")}
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-8 space-y-1 pt-1">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm transition-colors",
                      pathname === child.href
                        ? "bg-purple-900/30 text-purple-100 font-medium"
                        : "text-muted-foreground hover:bg-purple-900/20 hover:text-purple-100",
                    )}
                  >
                    {child.name}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "bg-purple-900/50 text-purple-100 font-medium"
                  : "text-muted-foreground hover:bg-purple-900/30 hover:text-purple-100",
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5" />
                {item.name}
              </div>
              {item.badge && (
                <Badge variant="secondary" className="bg-purple-500 text-white">
                  {item.badge}
                </Badge>
              )}
            </Link>
          ),
        )}
      </div>
      <div className="mt-auto p-4 border-t">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            <span className="block">Semester: Spring 2025</span>
            <span className="block mt-1">Academic Year: 2024-2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}

