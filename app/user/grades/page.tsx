import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Download, FileText, BarChart, Calendar, ChevronDown } from "lucide-react"
import React from "react"

export default function UserGradesPage() {
  // Mock semesters data organized by academic year
  const academicYears = [
    {
      year: "2023-2024",
      semesters: [
        { id: "fall2023", name: "Fall 2023", current: true },
        { id: "spring2024", name: "Spring 2024", upcoming: true },
      ],
    },
    {
      year: "2022-2023",
      semesters: [
        { id: "fall2022", name: "Fall 2022", current: false },
        { id: "spring2023", name: "Spring 2023", current: false },
      ],
    },
    {
      year: "2021-2022",
      semesters: [
        { id: "fall2021", name: "Fall 2021", current: false },
        { id: "spring2022", name: "Spring 2022", current: false },
      ],
    },
  ]

  // Mock courses data for Fall 2023
  const currentCourses = [
    {
      id: 1,
      code: "CS301",
      title: "Database Systems",
      instructor: "Dr. Williams",
      credits: 3,
      grade: 18,
      letterGrade: "A",
      status: "In Progress",
      assignments: [
        { name: "Assignment 1", grade: 17, maxGrade: 20 },
        { name: "Assignment 2", grade: 19, maxGrade: 20 },
      ],
      quizzes: [
        { name: "Quiz 1", grade: 18, maxGrade: 20 },
        { name: "Quiz 2", grade: 16, maxGrade: 20 },
      ],
      midterm: { grade: 17, maxGrade: 20 },
      final: { grade: null, maxGrade: 20 },
    },
    {
      id: 2,
      code: "CS401",
      title: "Artificial Intelligence",
      instructor: "Dr. Martinez",
      credits: 4,
      grade: 16,
      letterGrade: "B+",
      status: "In Progress",
      assignments: [
        { name: "Assignment 1", grade: 15, maxGrade: 20 },
        { name: "Assignment 2", grade: 17, maxGrade: 20 },
      ],
      quizzes: [{ name: "Quiz 1", grade: 16, maxGrade: 20 }],
      midterm: { grade: 16, maxGrade: 20 },
      final: { grade: null, maxGrade: 20 },
    },
    {
      id: 3,
      code: "MATH301",
      title: "Advanced Calculus",
      instructor: "Prof. Johnson",
      credits: 3,
      grade: 14,
      letterGrade: "B",
      status: "In Progress",
      assignments: [
        { name: "Assignment 1", grade: 13, maxGrade: 20 },
        { name: "Assignment 2", grade: 15, maxGrade: 20 },
      ],
      quizzes: [
        { name: "Quiz 1", grade: 14, maxGrade: 20 },
        { name: "Quiz 2", grade: 13, maxGrade: 20 },
      ],
      midterm: { grade: 15, maxGrade: 20 },
      final: { grade: null, maxGrade: 20 },
    },
  ]

  // Mock courses data for Spring 2023
  const pastCourses = [
    {
      id: 4,
      code: "CS201",
      title: "Advanced Algorithms",
      instructor: "Prof. Davis",
      credits: 3,
      grade: 17,
      letterGrade: "A-",
      status: "Completed",
    },
    {
      id: 5,
      code: "CS202",
      title: "Software Engineering",
      instructor: "Dr. Smith",
      credits: 4,
      grade: 19,
      letterGrade: "A+",
      status: "Completed",
    },
    {
      id: 6,
      code: "MATH201",
      title: "Linear Algebra",
      instructor: "Prof. Taylor",
      credits: 3,
      grade: 16,
      letterGrade: "B+",
      status: "Completed",
    },
  ]

  // Mock GPA data
  const gpaData = {
    current: 16.0, // on a 0-20 scale
    cumulative: 16.5,
    byYear: [
      { year: "2021-2022", gpa: 15.8 },
      { year: "2022-2023", gpa: 16.7 },
      { year: "2023-2024", gpa: 16.0 },
    ],
  }

  // Helper function to convert 0-20 grade to percentage
  const gradeToPercentage = (grade) => (grade / 20) * 100

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Grades</h1>
          <p className="text-muted-foreground">View your academic performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Transcript
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Current GPA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{gpaData.current.toFixed(1)}/20</div>
            <p className="text-sm text-muted-foreground">Fall 2023 Semester</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cumulative GPA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{gpaData.cumulative.toFixed(1)}/20</div>
            <p className="text-sm text-muted-foreground">All Semesters</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Credits Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">64</div>
            <p className="text-sm text-muted-foreground">Out of 120 required</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="current">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="current">Current Semester</TabsTrigger>
            <TabsTrigger value="all">All Semesters</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <Select defaultValue="fall2023">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {academicYears.map((year) => (
                <React.Fragment key={year.year}>
                  <SelectItem value={year.year} disabled className="font-bold">
                    {year.year} Academic Year
                  </SelectItem>
                  {year.semesters.map((semester) => (
                    <SelectItem key={semester.id} value={semester.id}>
                      {semester.name} {semester.current && "(Current)"} {semester.upcoming && "(Upcoming)"}
                    </SelectItem>
                  ))}
                  <Separator className="my-1" />
                </React.Fragment>
              ))}
            </SelectContent>
          </Select>
        </div>

        <TabsContent value="current" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fall 2023</CardTitle>
              <CardDescription>Current semester grades</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead>Credits</TableHead>
                    <TableHead>Current Grade</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentCourses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{course.title}</p>
                          <p className="text-sm text-muted-foreground">{course.code}</p>
                        </div>
                      </TableCell>
                      <TableCell>{course.instructor}</TableCell>
                      <TableCell>{course.credits}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="font-medium">
                            {course.grade}/20
                          </Badge>
                          <span className="text-sm text-muted-foreground">({course.letterGrade})</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-purple-700">{course.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Database Systems (CS301)</CardTitle>
              <CardDescription>Detailed grade breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Overall Progress</h3>
                  <div className="flex items-center gap-2">
                    <Progress value={gradeToPercentage(currentCourses[0].grade)} className="h-2" />
                    <span className="text-sm font-medium">{currentCourses[0].grade}/20</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium mb-4">Assignments</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Grade</TableHead>
                          <TableHead>Weight</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {currentCourses[0].assignments.map((assignment, index) => (
                          <TableRow key={index}>
                            <TableCell>{assignment.name}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <span>
                                  {assignment.grade}/{assignment.maxGrade}
                                </span>
                                <Progress value={gradeToPercentage(assignment.grade)} className="h-2 w-16" />
                              </div>
                            </TableCell>
                            <TableCell>15%</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-4">Quizzes</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Grade</TableHead>
                          <TableHead>Weight</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {currentCourses[0].quizzes.map((quiz, index) => (
                          <TableRow key={index}>
                            <TableCell>{quiz.name}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <span>
                                  {quiz.grade}/{quiz.maxGrade}
                                </span>
                                <Progress value={gradeToPercentage(quiz.grade)} className="h-2 w-16" />
                              </div>
                            </TableCell>
                            <TableCell>10%</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium mb-4">Exams</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Grade</TableHead>
                          <TableHead>Weight</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Midterm Exam</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <span>
                                {currentCourses[0].midterm.grade}/{currentCourses[0].midterm.maxGrade}
                              </span>
                              <Progress
                                value={gradeToPercentage(currentCourses[0].midterm.grade)}
                                className="h-2 w-16"
                              />
                            </div>
                          </TableCell>
                          <TableCell>30%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Final Exam</TableCell>
                          <TableCell>
                            {currentCourses[0].final.grade ? (
                              <div className="flex items-center gap-2">
                                <span>
                                  {currentCourses[0].final.grade}/{currentCourses[0].final.maxGrade}
                                </span>
                                <Progress
                                  value={gradeToPercentage(currentCourses[0].final.grade)}
                                  className="h-2 w-16"
                                />
                              </div>
                            ) : (
                              <Badge variant="outline">Not Graded</Badge>
                            )}
                          </TableCell>
                          <TableCell>40%</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-4">Grade Distribution</h3>
                    <div className="h-[150px] flex items-center justify-center bg-muted/50 rounded-md">
                      <p className="text-muted-foreground">Chart visualization would appear here</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Academic History</CardTitle>
              <CardDescription>All semesters and courses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Fall 2023 (Current)</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Credits</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentCourses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{course.title}</p>
                            <p className="text-sm text-muted-foreground">{course.code}</p>
                          </div>
                        </TableCell>
                        <TableCell>{course.credits}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="font-medium">
                              {course.grade}/20
                            </Badge>
                            <span className="text-sm text-muted-foreground">({course.letterGrade})</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-purple-700">{course.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="flex justify-between items-center text-sm">
                  <span>
                    Semester GPA: <strong>16.0/20</strong>
                  </span>
                  <span>
                    Credits: <strong>10</strong>
                  </span>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Spring 2023</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Credits</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastCourses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{course.title}</p>
                            <p className="text-sm text-muted-foreground">{course.code}</p>
                          </div>
                        </TableCell>
                        <TableCell>{course.credits}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="font-medium">
                              {course.grade}/20
                            </Badge>
                            <span className="text-sm text-muted-foreground">({course.letterGrade})</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{course.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="flex justify-between items-center text-sm">
                  <span>
                    Semester GPA: <strong>17.3/20</strong>
                  </span>
                  <span>
                    Credits: <strong>10</strong>
                  </span>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Fall 2022</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Credits</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div>
                          <p className="font-medium">Introduction to Computer Science</p>
                          <p className="text-sm text-muted-foreground">CS101</p>
                        </div>
                      </TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="font-medium">
                            18/20
                          </Badge>
                          <span className="text-sm text-muted-foreground">(A)</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Completed</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <p className="font-medium">Calculus I</p>
                          <p className="text-sm text-muted-foreground">MATH101</p>
                        </div>
                      </TableCell>
                      <TableCell>4</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="font-medium">
                            16/20
                          </Badge>
                          <span className="text-sm text-muted-foreground">(B+)</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Completed</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="flex justify-between items-center text-sm">
                  <span>
                    Semester GPA: <strong>16.9/20</strong>
                  </span>
                  <span>
                    Credits: <strong>7</strong>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Grade Analytics</CardTitle>
              <CardDescription>Visualize your academic performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">GPA Trend</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[200px] flex items-center justify-center">
                    <p className="text-muted-foreground">Chart visualization would appear here</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Grade Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[200px] flex items-center justify-center">
                    <p className="text-muted-foreground">Chart visualization would appear here</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Performance by Subject</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Computer Science</span>
                        <span className="text-sm font-medium">17.5/20</span>
                      </div>
                      <Progress value={87.5} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Mathematics</span>
                        <span className="text-sm font-medium">15.0/20</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Engineering</span>
                        <span className="text-sm font-medium">16.8/20</span>
                      </div>
                      <Progress value={84} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Humanities</span>
                        <span className="text-sm font-medium">18.2/20</span>
                      </div>
                      <Progress value={91} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Best Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-purple-400" />
                        <span className="font-medium">Software Engineering</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-medium">
                          19/20
                        </Badge>
                        <span className="text-sm text-muted-foreground">(A+)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Most Improved</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <BarChart className="h-5 w-5 text-purple-400" />
                        <span className="font-medium">Calculus</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-medium">
                          +3.5 points
                        </Badge>
                        <span className="text-sm text-muted-foreground">From 12.5 to 16.0</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Credits Earned</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-purple-400" />
                        <span className="font-medium">By Semester</span>
                      </div>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span>Fall 2022:</span>
                          <span>7 credits</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Spring 2023:</span>
                          <span>10 credits</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fall 2023:</span>
                          <span>10 credits</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

