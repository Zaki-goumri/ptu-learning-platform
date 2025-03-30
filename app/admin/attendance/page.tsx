import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Search, Filter, Download, Calendar, Save } from "lucide-react"

export default function AttendancePage() {
  // Mock students data
  const students = [
    {
      id: 1,
      name: "Alex Johnson",
      studentId: "STU001",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Computer Science",
      year: "3rd Year",
      attendance: 92,
      absences: 2,
      status: "present",
    },
    {
      id: 2,
      name: "Maria Garcia",
      studentId: "STU002",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Engineering",
      year: "2nd Year",
      attendance: 96,
      absences: 1,
      status: "present",
    },
    {
      id: 3,
      name: "James Wilson",
      studentId: "STU003",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Mathematics",
      year: "1st Year",
      attendance: 88,
      absences: 3,
      status: "absent",
    },
    {
      id: 4,
      name: "Sarah Ahmed",
      studentId: "STU004",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Business",
      year: "4th Year",
      attendance: 94,
      absences: 1,
      status: "present",
    },
    {
      id: 5,
      name: "David Chen",
      studentId: "STU005",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Computer Science",
      year: "3rd Year",
      attendance: 90,
      absences: 2,
      status: "late",
    },
  ]

  // Mock courses data
  const courses = [
    { id: "cs101", name: "Introduction to Computer Science" },
    { id: "cs201", name: "Advanced Algorithms" },
    { id: "cs301", name: "Database Systems" },
    { id: "math101", name: "Advanced Mathematics" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Attendance Management</h1>
          <p className="text-muted-foreground">Track and manage student attendance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button className="bg-purple-700 hover:bg-purple-800">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="w-full md:w-64">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent>
              {courses.map((course) => (
                <SelectItem key={course.id} value={course.id}>
                  {course.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-48">
          <Input type="date" />
        </div>

        <div className="w-full md:w-48">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Session" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (9:30 AM)</SelectItem>
              <SelectItem value="afternoon">Afternoon (2:00 PM)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="relative w-full md:w-auto flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input className="pl-8" placeholder="Search students..." />
        </div>

        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="today">
        <TabsList className="mb-4">
          <TabsTrigger value="today">Today's Attendance</TabsTrigger>
          <TabsTrigger value="history">Attendance History</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle>Introduction to Computer Science</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>November 15, 2023 • Morning Session (9:30 AM)</span>
                    </div>
                  </CardDescription>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm">Present: 3</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span className="text-sm">Late: 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-sm">Absent: 1</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox />
                    </TableHead>
                    <TableHead className="w-[250px]">Student</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Absences</TableHead>
                    <TableHead>Attendance Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={student.avatar} alt={student.name} />
                            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p>{student.name}</p>
                            <p className="text-xs text-muted-foreground">{student.studentId}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{student.department}</TableCell>
                      <TableCell>{student.year}</TableCell>
                      <TableCell>
                        <Select defaultValue={student.status}>
                          <SelectTrigger
                            className={`w-28 ${
                              student.status === "present"
                                ? "text-green-500"
                                : student.status === "late"
                                  ? "text-amber-500"
                                  : "text-red-500"
                            }`}
                          >
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="present" className="text-green-500">
                              Present
                            </SelectItem>
                            <SelectItem value="late" className="text-amber-500">
                              Late
                            </SelectItem>
                            <SelectItem value="absent" className="text-red-500">
                              Absent
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={student.absences > 2 ? "border-red-500 text-red-500" : ""}>
                          {student.absences}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={student.attendance} className="w-24" />
                          <span className="text-sm">{student.attendance}%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance History</CardTitle>
              <CardDescription>View past attendance records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                  <div className="w-full md:w-48">
                    <Select defaultValue="november">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="november">November 2023</SelectItem>
                        <SelectItem value="october">October 2023</SelectItem>
                        <SelectItem value="september">September 2023</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full md:w-64">
                    <Select defaultValue="cs101">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            {course.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Session</TableHead>
                      <TableHead>Present</TableHead>
                      <TableHead>Late</TableHead>
                      <TableHead>Absent</TableHead>
                      <TableHead>Attendance Rate</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>November 15, 2023</TableCell>
                      <TableCell>Morning (9:30 AM)</TableCell>
                      <TableCell className="text-green-500">3</TableCell>
                      <TableCell className="text-amber-500">1</TableCell>
                      <TableCell className="text-red-500">1</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={80} className="w-24" />
                          <span className="text-sm">80%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>November 13, 2023</TableCell>
                      <TableCell>Morning (9:30 AM)</TableCell>
                      <TableCell className="text-green-500">4</TableCell>
                      <TableCell className="text-amber-500">1</TableCell>
                      <TableCell className="text-red-500">0</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={100} className="w-24" />
                          <span className="text-sm">100%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>November 8, 2023</TableCell>
                      <TableCell>Morning (9:30 AM)</TableCell>
                      <TableCell className="text-green-500">3</TableCell>
                      <TableCell className="text-amber-500">0</TableCell>
                      <TableCell className="text-red-500">2</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={60} className="w-24" />
                          <span className="text-sm">60%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>November 6, 2023</TableCell>
                      <TableCell>Morning (9:30 AM)</TableCell>
                      <TableCell className="text-green-500">5</TableCell>
                      <TableCell className="text-amber-500">0</TableCell>
                      <TableCell className="text-red-500">0</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={100} className="w-24" />
                          <span className="text-sm">100%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Reports</CardTitle>
              <CardDescription>Analyze attendance patterns and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Attendance by Course</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[200px] flex items-center justify-center">
                    <p className="text-muted-foreground">Chart visualization would appear here</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Attendance Trends</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[200px] flex items-center justify-center">
                    <p className="text-muted-foreground">Chart visualization would appear here</p>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Students with Low Attendance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Student</TableHead>
                          <TableHead>Department</TableHead>
                          <TableHead>Year</TableHead>
                          <TableHead>Absences</TableHead>
                          <TableHead>Attendance Rate</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="James Wilson" />
                                <AvatarFallback>JW</AvatarFallback>
                              </Avatar>
                              <div>
                                <p>James Wilson</p>
                                <p className="text-xs text-muted-foreground">STU003</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>Mathematics</TableCell>
                          <TableCell>1st Year</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="border-red-500 text-red-500">
                              3
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Progress value={88} className="w-24" />
                              <span className="text-sm">88%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-amber-500">Warning</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm">
                              Contact
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Emily Brown" />
                                <AvatarFallback>EB</AvatarFallback>
                              </Avatar>
                              <div>
                                <p>Emily Brown</p>
                                <p className="text-xs text-muted-foreground">STU008</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>Business</TableCell>
                          <TableCell>2nd Year</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="border-red-500 text-red-500">
                              4
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Progress value={82} className="w-24" />
                              <span className="text-sm">82%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-red-500">Critical</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm">
                              Contact
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-end mt-6">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

