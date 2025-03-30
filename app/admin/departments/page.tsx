import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, MoreHorizontal, Edit, Trash, Users, BookOpen, GraduationCap } from "lucide-react"

export default function DepartmentsPage() {
  // Mock departments data
  const departments = [
    {
      id: 1,
      name: "Computer Science",
      code: "CS",
      head: "Dr. Alan Turing",
      students: 312,
      courses: 24,
      faculty: 18,
      status: "active",
    },
    {
      id: 2,
      name: "Electrical Engineering",
      code: "EE",
      head: "Dr. Nikola Tesla",
      students: 256,
      courses: 22,
      faculty: 15,
      status: "active",
    },
    {
      id: 3,
      name: "Business Administration",
      code: "BA",
      head: "Dr. Peter Drucker",
      students: 198,
      courses: 18,
      faculty: 12,
      status: "active",
    },
    {
      id: 4,
      name: "Mathematics",
      code: "MATH",
      head: "Dr. Katherine Johnson",
      students: 145,
      courses: 16,
      faculty: 10,
      status: "active",
    },
    {
      id: 5,
      name: "Physics",
      code: "PHYS",
      head: "Dr. Richard Feynman",
      students: 132,
      courses: 14,
      faculty: 9,
      status: "active",
    },
    {
      id: 6,
      name: "Psychology",
      code: "PSYC",
      head: "Dr. Carl Jung",
      students: 178,
      courses: 16,
      faculty: 11,
      status: "inactive",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Departments</h1>
          <p className="text-muted-foreground">Manage academic departments and their resources</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-purple-700 hover:bg-purple-800">
            <Plus className="mr-2 h-4 w-4" />
            Add Department
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle>All Departments</CardTitle>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search departments..." className="w-full pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Head</TableHead>
                <TableHead className="text-center">Students</TableHead>
                <TableHead className="text-center">Courses</TableHead>
                <TableHead className="text-center">Faculty</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {departments.map((dept) => (
                <TableRow key={dept.id}>
                  <TableCell className="font-medium">{dept.name}</TableCell>
                  <TableCell>{dept.code}</TableCell>
                  <TableCell>{dept.head}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      {dept.students}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      {dept.courses}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      {dept.faculty}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={dept.status === "active" ? "default" : "secondary"}
                      className={dept.status === "active" ? "bg-green-500" : "bg-gray-500"}
                    >
                      {dept.status === "active" ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="mr-2 h-4 w-4" />
                          <span>View Faculty</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BookOpen className="mr-2 h-4 w-4" />
                          <span>View Courses</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Department Statistics</CardTitle>
            <CardDescription>Overview of department performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Total Students</p>
                  <p className="text-2xl font-bold">1,221</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Total Faculty</p>
                  <p className="text-2xl font-bold">75</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Active Courses</p>
                  <p className="text-2xl font-bold">110</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Avg. Course Rating</p>
                  <p className="text-2xl font-bold">4.2/5</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest department updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <p className="font-medium">New Faculty Member</p>
                <p className="text-sm text-muted-foreground">Dr. Jane Smith joined Computer Science department</p>
                <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="font-medium">Course Added</p>
                <p className="text-sm text-muted-foreground">"Advanced Machine Learning" added to Computer Science</p>
                <p className="text-xs text-muted-foreground mt-1">5 days ago</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="font-medium">Department Head Change</p>
                <p className="text-sm text-muted-foreground">
                  Dr. Michael Brown appointed as head of Physics department
                </p>
                <p className="text-xs text-muted-foreground mt-1">1 week ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

