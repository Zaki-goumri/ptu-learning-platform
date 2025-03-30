import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Download, Upload, Search, Filter, Save, CheckCircle, AlertCircle } from "lucide-react"

export default function GradesPage() {
  // Mock student data
  const students = [
    {
      id: 1,
      name: "Alex Johnson",
      studentId: "STU001",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "alex.j@example.com",
      attendance: 92,
      assignments: {
        "Assignment 1": 85,
        "Assignment 2": 78,
        "Assignment 3": null,
      },
      quizzes: {
        "Quiz 1": 90,
        "Quiz 2": 85,
        "Quiz 3": null,
      },
      midterm: 88,
      final: null,
      overall: "B+",
    },
    {
      id: 2,
      name: "Maria Garcia",
      studentId: "STU002",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "maria.g@example.com",
      attendance: 96,
      assignments: {
        "Assignment 1": 92,
        "Assignment 2": 95,
        "Assignment 3": null,
      },
      quizzes: {
        "Quiz 1": 95,
        "Quiz 2": 92,
        "Quiz 3": null,
      },
      midterm: 94,
      final: null,
      overall: "A",
    },
    {
      id: 3,
      name: "James Wilson",
      studentId: "STU003",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "james.w@example.com",
      attendance: 88,
      assignments: {
        "Assignment 1": 75,
        "Assignment 2": 82,
        "Assignment 3": null,
      },
      quizzes: {
        "Quiz 1": 78,
        "Quiz 2": 80,
        "Quiz 3": null,
      },
      midterm: 76,
      final: null,
      overall: "C+",
    },
    {
      id: 4,
      name: "Sarah Ahmed",
      studentId: "STU004",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "sarah.a@example.com",
      attendance: 94,
      assignments: {
        "Assignment 1": 88,
        "Assignment 2": 90,
        "Assignment 3": null,
      },
      quizzes: {
        "Quiz 1": 92,
        "Quiz 2": 88,
        "Quiz 3": null,
      },
      midterm: 86,
      final: null,
      overall: "B+",
    },
    {
      id: 5,
      name: "David Chen",
      studentId: "STU005",
      avatar: "/placeholder.svg?height=40&width=40",
      email: "david.c@example.com",
      attendance: 90,
      assignments: {
        "Assignment 1": 95,
        "Assignment 2": 92,
        "Assignment 3": null,
      },
      quizzes: {
        "Quiz 1": 88,
        "Quiz 2": 90,
        "Quiz 3": null,
      },
      midterm: 92,
      final: null,
      overall: "A-",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Grade Management</h1>
          <p className="text-muted-foreground">Manage and publish grades for your courses</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import Grades
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Grades
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
              <SelectItem value="cs101">Introduction to Computer Science</SelectItem>
              <SelectItem value="cs201">Advanced Algorithms</SelectItem>
              <SelectItem value="cs301">Database Systems</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-64">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select assessment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Assessments</SelectItem>
              <SelectItem value="assignments">Assignments</SelectItem>
              <SelectItem value="quizzes">Quizzes</SelectItem>
              <SelectItem value="midterm">Midterm Exam</SelectItem>
              <SelectItem value="final">Final Exam</SelectItem>
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

      <Tabs defaultValue="grades">
        <TabsList className="mb-4">
          <TabsTrigger value="grades">Grades</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="publish">Publish</TabsTrigger>
        </TabsList>

        <TabsContent value="grades" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Introduction to Computer Science</CardTitle>
              <CardDescription>Fall Semester 2023 • 5 Students Enrolled</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250px]">Student</TableHead>
                      <TableHead>Assignment 1</TableHead>
                      <TableHead>Assignment 2</TableHead>
                      <TableHead>Quiz 1</TableHead>
                      <TableHead>Quiz 2</TableHead>
                      <TableHead>Midterm</TableHead>
                      <TableHead>Final</TableHead>
                      <TableHead>Overall</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
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
                        <TableCell>
                          <Input
                            type="number"
                            min="0"
                            max="100"
                            value={student.assignments["Assignment 1"] || ""}
                            className="w-16 h-8"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            min="0"
                            max="100"
                            value={student.assignments["Assignment 2"] || ""}
                            className="w-16 h-8"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            min="0"
                            max="100"
                            value={student.quizzes["Quiz 1"] || ""}
                            className="w-16 h-8"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            min="0"
                            max="100"
                            value={student.quizzes["Quiz 2"] || ""}
                            className="w-16 h-8"
                          />
                        </TableCell>
                        <TableCell>
                          <Input type="number" min="0" max="100" value={student.midterm || ""} className="w-16 h-8" />
                        </TableCell>
                        <TableCell>
                          <Input type="number" min="0" max="100" value={student.final || ""} className="w-16 h-8" />
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="font-medium">
                            {student.overall}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Grade Distribution</CardTitle>
              <CardDescription>Overview of student performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Grade Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[200px] flex items-center justify-center">
                    <p className="text-muted-foreground">Chart visualization would appear here</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Assessment Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[200px] flex items-center justify-center">
                    <p className="text-muted-foreground">Chart visualization would appear here</p>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Class Average</p>
                        <p className="text-2xl font-bold">86.4%</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Highest Grade</p>
                        <p className="text-2xl font-bold">95%</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Lowest Grade</p>
                        <p className="text-2xl font-bold">76%</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Standard Deviation</p>
                        <p className="text-2xl font-bold">5.8</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="publish" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Publish Grades</CardTitle>
              <CardDescription>Make grades visible to students</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-md border">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-purple-900/20">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Assignment 1</h4>
                      <p className="text-sm text-muted-foreground">Published on Oct 15, 2023</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Unpublish
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-md border">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-purple-900/20">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Assignment 2</h4>
                      <p className="text-sm text-muted-foreground">Published on Nov 2, 2023</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Unpublish
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-md border">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-purple-900/20">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Quiz 1</h4>
                      <p className="text-sm text-muted-foreground">Published on Oct 10, 2023</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Unpublish
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-md border">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-purple-900/20">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Quiz 2</h4>
                      <p className="text-sm text-muted-foreground">Published on Oct 25, 2023</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Unpublish
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-md border">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-purple-900/20">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Midterm Exam</h4>
                      <p className="text-sm text-muted-foreground">Published on Nov 10, 2023</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Unpublish
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-md border">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-amber-100">
                      <AlertCircle className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Final Exam</h4>
                      <p className="text-sm text-muted-foreground">Not yet published</p>
                    </div>
                  </div>
                  <Button className="bg-purple-700 hover:bg-purple-800" size="sm">
                    Publish
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-md border">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-amber-100">
                      <AlertCircle className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Overall Course Grade</h4>
                      <p className="text-sm text-muted-foreground">Not yet published</p>
                    </div>
                  </div>
                  <Button className="bg-purple-700 hover:bg-purple-800" size="sm">
                    Publish
                  </Button>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-purple-700 hover:bg-purple-800">Publish All Grades</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

