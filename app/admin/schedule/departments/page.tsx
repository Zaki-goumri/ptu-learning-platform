"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Clock, Users, AlertCircle, Search, ArrowUpDown, School, BookOpen, FileText, CheckCircle2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

// Mock data for departments
const departments = [
  {
    id: 1,
    name: "Computer Science",
    chair: "Dr. Alan Turing",
    faculty: 18,
    courses: 24,
    sections: 42,
    schedulingProgress: 100,
    status: "complete",
  },
  {
    id: 2,
    name: "Mathematics",
    chair: "Dr. Katherine Johnson",
    faculty: 15,
    courses: 18,
    sections: 35,
    schedulingProgress: 100,
    status: "complete",
  },
  {
    id: 3,
    name: "Physics",
    chair: "Dr. Richard Feynman",
    faculty: 12,
    courses: 15,
    sections: 28,
    schedulingProgress: 65,
    status: "in-progress",
  },
  {
    id: 4,
    name: "Chemistry",
    chair: "Dr. Marie Curie",
    faculty: 14,
    courses: 16,
    sections: 30,
    schedulingProgress: 40,
    status: "in-progress",
  },
  {
    id: 5,
    name: "Biology",
    chair: "Dr. Jane Goodall",
    faculty: 16,
    courses: 20,
    sections: 38,
    schedulingProgress: 0,
    status: "not-started",
  },
  {
    id: 6,
    name: "English",
    chair: "Dr. Maya Angelou",
    faculty: 20,
    courses: 22,
    sections: 45,
    schedulingProgress: 0,
    status: "not-started",
  },
]

// Mock data for department courses
const departmentCourses = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    sections: 3,
    instructor: "Dr. Smith",
    schedulingStatus: "complete",
  },
  {
    id: 2,
    code: "CS250",
    name: "Data Structures",
    sections: 2,
    instructor: "Dr. Johnson",
    schedulingStatus: "complete",
  },
  {
    id: 3,
    code: "CS350",
    name: "Database Systems",
    sections: 2,
    instructor: "Dr. Williams",
    schedulingStatus: "complete",
  },
  {
    id: 4,
    code: "CS400",
    name: "Operating Systems",
    sections: 1,
    instructor: "Dr. Brown",
    schedulingStatus: "in-progress",
  },
  {
    id: 5,
    code: "CS450",
    name: "Computer Networks",
    sections: 1,
    instructor: "Dr. Davis",
    schedulingStatus: "not-started",
  },
]

export default function DepartmentSchedulesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("")
  const [isViewDepartmentOpen, setIsViewDepartmentOpen] = useState(false)
  const [selectedDepartment, setSelectedDepartment] = useState<any>(null)
  const [sortColumn, setSortColumn] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")

  // Filter departments based on search query and filters
  const filteredDepartments = departments.filter((dept) => {
    const matchesSearch =
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.chair.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = selectedStatus ? dept.status === selectedStatus : true

    return matchesSearch && matchesStatus
  })

  // Sort departments
  const sortedDepartments = [...filteredDepartments].sort((a, b) => {
    let comparison = 0

    if (sortColumn === "name") {
      comparison = a.name.localeCompare(b.name)
    } else if (sortColumn === "chair") {
      comparison = a.chair.localeCompare(b.chair)
    } else if (sortColumn === "faculty") {
      comparison = a.faculty - b.faculty
    } else if (sortColumn === "courses") {
      comparison = a.courses - b.courses
    } else if (sortColumn === "schedulingProgress") {
      comparison = a.schedulingProgress - b.schedulingProgress
    }

    return sortDirection === "asc" ? comparison : -comparison
  })

  // Handle sort
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  // View department details
  const handleViewDepartment = (department: any) => {
    setSelectedDepartment(department)
    setIsViewDepartmentOpen(true)
  }

  // Get badge for department status
  const getDepartmentStatusBadge = (status: string) => {
    switch (status) {
      case "complete":
        return (
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
            Complete
          </Badge>
        )
      case "in-progress":
        return (
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            In Progress
          </Badge>
        )
      case "not-started":
        return (
          <Badge variant="outline" className="flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            Not Started
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  // Get badge for course scheduling status
  const getCourseStatusBadge = (status: string) => {
    switch (status) {
      case "complete":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Complete</Badge>
      case "in-progress":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">In Progress</Badge>
      case "not-started":
        return <Badge variant="outline">Not Started</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Department Schedules</h1>
          <p className="text-muted-foreground">Manage academic department scheduling</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="relative w-full sm:w-auto flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search departments..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="All Statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="complete">Complete</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="not-started">Not Started</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                  <div className="flex items-center">
                    Department
                    {sortColumn === "name" && (
                      <ArrowUpDown className={`ml-1 h-4 w-4 ${sortDirection === "desc" ? "rotate-180" : ""}`} />
                    )}
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("chair")}>
                  <div className="flex items-center">
                    Chair
                    {sortColumn === "chair" && (
                      <ArrowUpDown className={`ml-1 h-4 w-4 ${sortDirection === "desc" ? "rotate-180" : ""}`} />
                    )}
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("faculty")}>
                  <div className="flex items-center">
                    Faculty
                    {sortColumn === "faculty" && (
                      <ArrowUpDown className={`ml-1 h-4 w-4 ${sortDirection === "desc" ? "rotate-180" : ""}`} />
                    )}
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("courses")}>
                  <div className="flex items-center">
                    Courses
                    {sortColumn === "courses" && (
                      <ArrowUpDown className={`ml-1 h-4 w-4 ${sortDirection === "desc" ? "rotate-180" : ""}`} />
                    )}
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("schedulingProgress")}>
                  <div className="flex items-center">
                    Scheduling Progress
                    {sortColumn === "schedulingProgress" && (
                      <ArrowUpDown className={`ml-1 h-4 w-4 ${sortDirection === "desc" ? "rotate-180" : ""}`} />
                    )}
                  </div>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedDepartments.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-6">
                    <div className="flex flex-col items-center justify-center">
                      <AlertCircle className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-lg font-medium">No departments found</p>
                      <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                sortedDepartments.map((department) => (
                  <TableRow key={department.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <School className="h-4 w-4" />
                        {department.name}
                      </div>
                    </TableCell>
                    <TableCell>{department.chair}</TableCell>
                    <TableCell>{department.faculty}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{department.courses}</span>
                        <span className="text-muted-foreground">({department.sections} sections)</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <Progress value={department.schedulingProgress} className="h-2" />
                        <span className="text-xs text-muted-foreground">{department.schedulingProgress}% complete</span>
                      </div>
                    </TableCell>
                    <TableCell>{getDepartmentStatusBadge(department.status)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleViewDepartment(department)}>
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          Send Reminder
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isViewDepartmentOpen} onOpenChange={setIsViewDepartmentOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <School className="h-5 w-5" />
              {selectedDepartment?.name} Department
            </DialogTitle>
            <DialogDescription>View department scheduling details and course assignments</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Users className="h-8 w-8 mb-2 text-purple-500" />
                    <h3 className="text-lg font-medium">{selectedDepartment?.faculty}</h3>
                    <p className="text-sm text-muted-foreground">Faculty Members</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <BookOpen className="h-8 w-8 mb-2 text-purple-500" />
                    <h3 className="text-lg font-medium">{selectedDepartment?.courses}</h3>
                    <p className="text-sm text-muted-foreground">Courses</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <FileText className="h-8 w-8 mb-2 text-purple-500" />
                    <h3 className="text-lg font-medium">{selectedDepartment?.sections}</h3>
                    <p className="text-sm text-muted-foreground">Course Sections</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-lg font-medium mb-4">Course Scheduling Status</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course Code</TableHead>
                  <TableHead>Course Name</TableHead>
                  <TableHead>Sections</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {departmentCourses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">{course.code}</TableCell>
                    <TableCell>{course.name}</TableCell>
                    <TableCell>{course.sections}</TableCell>
                    <TableCell>{course.instructor}</TableCell>
                    <TableCell>{getCourseStatusBadge(course.schedulingStatus)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

