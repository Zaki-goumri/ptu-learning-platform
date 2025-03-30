import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Search, Plus, MoreHorizontal, Edit, Trash, Users, FileText, BarChart, Calendar, BookOpen } from "lucide-react"
import Link from "next/link"

export default function TeacherCoursesPage() {
  // Mock courses data
  const courses = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      code: "CS101",
      semester: "Spring 2025",
      students: 45,
      progress: 75,
      materials: 24,
      quizzes: 5,
      status: "active",
    },
    {
      id: 2,
      title: "Advanced Algorithms",
      code: "CS301",
      semester: "Spring 2025",
      students: 28,
      progress: 60,
      materials: 18,
      quizzes: 4,
      status: "active",
    },
    {
      id: 3,
      title: "Database Systems",
      code: "CS205",
      semester: "Spring 2025",
      students: 36,
      progress: 90,
      materials: 22,
      quizzes: 6,
      status: "active",
    },
    {
      id: 4,
      title: "Web Development",
      code: "CS210",
      semester: "Fall 2024",
      students: 42,
      progress: 100,
      materials: 30,
      quizzes: 8,
      status: "archived",
    },
    {
      id: 5,
      title: "Operating Systems",
      code: "CS305",
      semester: "Fall 2024",
      students: 32,
      progress: 100,
      materials: 26,
      quizzes: 7,
      status: "archived",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Courses</h1>
          <p className="text-muted-foreground">Manage your teaching courses</p>
        </div>
        <div className="flex gap-2">
          <Link href="/teacher/courses/create">
            <Button className="bg-purple-700 hover:bg-purple-800">
              <Plus className="mr-2 h-4 w-4" />
              Create Course
            </Button>
          </Link>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle>All Courses</CardTitle>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search courses..." className="w-full pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Semester</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Materials</TableHead>
                <TableHead>Quizzes</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>{course.code}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      {course.semester}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      {course.students}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="w-full max-w-24">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                      {course.materials}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <BarChart className="mr-2 h-4 w-4 text-muted-foreground" />
                      {course.quizzes}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={course.status === "active" ? "default" : "secondary"}
                      className={course.status === "active" ? "bg-green-500" : "bg-gray-500"}
                    >
                      {course.status === "active" ? "Active" : "Archived"}
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
                        <Link href={`/teacher/courses/${course.id}`}>
                          <DropdownMenuItem>
                            <BookOpen className="mr-2 h-4 w-4" />
                            <span>Manage Course</span>
                          </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit Details</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="mr-2 h-4 w-4" />
                          <span>Students</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BarChart className="mr-2 h-4 w-4" />
                          <span>Analytics</span>
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
            <CardTitle>Semester Overview</CardTitle>
            <CardDescription>Current and upcoming semesters</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-md bg-purple-500/10 border-purple-500/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Spring 2025</h3>
                  <Badge className="bg-purple-500">Current</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Courses</span>
                    <span>3</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Students</span>
                    <span>109</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Average Progress</span>
                    <span>75%</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-md">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Fall 2025</h3>
                  <Badge variant="outline">Upcoming</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Courses</span>
                    <span>2</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Students</span>
                    <span>0</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Status</span>
                    <span>Planning</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-md bg-gray-500/10 border-gray-500/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Fall 2024</h3>
                  <Badge variant="outline" className="bg-gray-500">
                    Archived
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Courses</span>
                    <span>2</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Students</span>
                    <span>74</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Average Grade</span>
                    <span>B+ (3.4)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Teaching Stats</CardTitle>
            <CardDescription>Your teaching performance and metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Total Students</p>
                  <p className="text-2xl font-bold">109</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Active Courses</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Course Materials</p>
                  <p className="text-2xl font-bold">64</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Quizzes Created</p>
                  <p className="text-2xl font-bold">15</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-sm font-medium mb-3">Student Satisfaction</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Rating</span>
                    <span>4.7/5.0</span>
                  </div>
                  <Progress value={94} className="h-2" />
                  <p className="text-xs text-muted-foreground">Based on 87 student reviews</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

