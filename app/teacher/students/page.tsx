import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MoreHorizontal, Mail, FileText, BarChart, Filter, Download } from "lucide-react"

export default function StudentsPage() {
  // Mock students data
  const students = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "alex.johnson@ptu.edu",
      id_number: "STU-2023-001",
      department: "Computer Science",
      courses: 4,
      grade: "A",
      attendance: "95%",
      status: "active",
    },
    {
      id: 2,
      name: "Maria Garcia",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "maria.garcia@ptu.edu",
      id_number: "STU-2023-042",
      department: "Computer Science",
      courses: 3,
      grade: "A-",
      attendance: "92%",
      status: "active",
    },
    {
      id: 3,
      name: "James Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "james.wilson@ptu.edu",
      id_number: "STU-2023-078",
      department: "Computer Science",
      courses: 4,
      grade: "B+",
      attendance: "88%",
      status: "active",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "sarah.johnson@ptu.edu",
      id_number: "STU-2023-125",
      department: "Computer Science",
      courses: 3,
      grade: "B",
      attendance: "85%",
      status: "active",
    },
    {
      id: 5,
      name: "David Lee",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "david.lee@ptu.edu",
      id_number: "STU-2023-156",
      department: "Computer Science",
      courses: 4,
      grade: "C+",
      attendance: "78%",
      status: "warning",
    },
    {
      id: 6,
      name: "Emily Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "emily.chen@ptu.edu",
      id_number: "STU-2023-189",
      department: "Computer Science",
      courses: 2,
      grade: "B-",
      attendance: "82%",
      status: "active",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Students</h1>
          <p className="text-muted-foreground">Manage and monitor your students</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="bg-purple-700 hover:bg-purple-800">
            <Mail className="mr-2 h-4 w-4" />
            Message All
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle>All Students</CardTitle>
            <div className="flex gap-2">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search students..." className="w-full pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>ID Number</TableHead>
                <TableHead>Courses</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Attendance</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={student.avatar} alt={student.name} />
                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">{student.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{student.id_number}</TableCell>
                  <TableCell>{student.courses}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        student.grade.startsWith("A")
                          ? "border-green-500 text-green-500"
                          : student.grade.startsWith("B")
                            ? "border-blue-500 text-blue-500"
                            : "border-amber-500 text-amber-500"
                      }
                    >
                      {student.grade}
                    </Badge>
                  </TableCell>
                  <TableCell>{student.attendance}</TableCell>
                  <TableCell>
                    <Badge
                      variant={student.status === "active" ? "default" : "secondary"}
                      className={student.status === "active" ? "bg-green-500" : "bg-amber-500"}
                    >
                      {student.status === "active" ? "Active" : "Warning"}
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
                          <Mail className="mr-2 h-4 w-4" />
                          <span>Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText className="mr-2 h-4 w-4" />
                          <span>View Grades</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BarChart className="mr-2 h-4 w-4" />
                          <span>Performance</span>
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
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>Average grades and attendance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Average Grade</p>
                  <p className="text-2xl font-bold">B+ (3.4)</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Average Attendance</p>
                  <p className="text-2xl font-bold">86.7%</p>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-sm font-medium mb-2">Grade Distribution</p>
                <div className="grid grid-cols-5 gap-2 text-center">
                  <div>
                    <div className="h-24 bg-green-500 rounded-t-md" style={{ height: "60px" }}></div>
                    <p className="text-xs mt-1">A</p>
                  </div>
                  <div>
                    <div className="h-24 bg-green-400 rounded-t-md" style={{ height: "45px" }}></div>
                    <p className="text-xs mt-1">B</p>
                  </div>
                  <div>
                    <div className="h-24 bg-yellow-400 rounded-t-md" style={{ height: "30px" }}></div>
                    <p className="text-xs mt-1">C</p>
                  </div>
                  <div>
                    <div className="h-24 bg-orange-400 rounded-t-md" style={{ height: "15px" }}></div>
                    <p className="text-xs mt-1">D</p>
                  </div>
                  <div>
                    <div className="h-24 bg-red-400 rounded-t-md" style={{ height: "5px" }}></div>
                    <p className="text-xs mt-1">F</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>At-Risk Students</CardTitle>
            <CardDescription>Students who may need additional support</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-amber-500/10 rounded-md border border-amber-500/20">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="David Lee" />
                    <AvatarFallback>DL</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">David Lee</p>
                    <p className="text-sm text-muted-foreground">Attendance: 78%</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Contact
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-amber-500/10 rounded-md border border-amber-500/20">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Michael Brown" />
                    <AvatarFallback>MB</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Michael Brown</p>
                    <p className="text-sm text-muted-foreground">Grade: C-</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Contact
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-amber-500/10 rounded-md border border-amber-500/20">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jessica Taylor" />
                    <AvatarFallback>JT</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Jessica Taylor</p>
                    <p className="text-sm text-muted-foreground">Missing assignments: 3</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Contact
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

