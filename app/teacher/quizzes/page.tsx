import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, MoreHorizontal, Edit, Copy, Trash, Eye, BarChart, Calendar } from "lucide-react"
import Link from "next/link"

export default function QuizzesPage() {
  // Mock quizzes data
  const quizzes = [
    {
      id: 1,
      title: "Introduction to Programming Concepts",
      course: "Introduction to Computer Science",
      courseId: 1,
      questions: 15,
      timeLimit: "30 min",
      dueDate: "Apr 15, 2025",
      status: "published",
      attempts: 42,
      avgScore: "78%",
    },
    {
      id: 2,
      title: "Data Structures Quiz",
      course: "Introduction to Computer Science",
      courseId: 1,
      questions: 10,
      timeLimit: "20 min",
      dueDate: "Apr 22, 2025",
      status: "published",
      attempts: 38,
      avgScore: "72%",
    },
    {
      id: 3,
      title: "Algorithm Complexity",
      course: "Advanced Algorithms",
      courseId: 2,
      questions: 8,
      timeLimit: "25 min",
      dueDate: "Apr 18, 2025",
      status: "draft",
      attempts: 0,
      avgScore: "-",
    },
    {
      id: 4,
      title: "Database Normalization",
      course: "Database Systems",
      courseId: 3,
      questions: 12,
      timeLimit: "25 min",
      dueDate: "Apr 30, 2025",
      status: "published",
      attempts: 36,
      avgScore: "85%",
    },
    {
      id: 5,
      title: "SQL Queries Practice",
      course: "Database Systems",
      courseId: 3,
      questions: 15,
      timeLimit: "40 min",
      dueDate: "May 5, 2025",
      status: "draft",
      attempts: 0,
      avgScore: "-",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Quizzes</h1>
          <p className="text-muted-foreground">Create and manage quizzes for your courses</p>
        </div>
        <div className="flex gap-2">
          <Link href="/teacher/quizzes/create">
            <Button className="bg-purple-700 hover:bg-purple-800">
              <Plus className="mr-2 h-4 w-4" />
              Create Quiz
            </Button>
          </Link>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle>All Quizzes</CardTitle>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search quizzes..." className="w-full pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Quiz Title</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Questions</TableHead>
                <TableHead>Time Limit</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Attempts</TableHead>
                <TableHead>Avg. Score</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quizzes.map((quiz) => (
                <TableRow key={quiz.id}>
                  <TableCell className="font-medium">{quiz.title}</TableCell>
                  <TableCell>{quiz.course}</TableCell>
                  <TableCell>{quiz.questions}</TableCell>
                  <TableCell>{quiz.timeLimit}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      {quiz.dueDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={quiz.status === "published" ? "default" : "secondary"}
                      className={quiz.status === "published" ? "bg-green-500" : "bg-amber-500"}
                    >
                      {quiz.status === "published" ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell>{quiz.attempts}</TableCell>
                  <TableCell>{quiz.avgScore}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <Link href={`/courses/${quiz.courseId}/quizzes/${quiz.id}`}>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            <span>Preview</span>
                          </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Copy className="mr-2 h-4 w-4" />
                          <span>Duplicate</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BarChart className="mr-2 h-4 w-4" />
                          <span>Results</span>
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
            <CardTitle>Quiz Statistics</CardTitle>
            <CardDescription>Performance metrics for your quizzes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Total Quizzes</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Published</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Average Completion</p>
                  <p className="text-2xl font-bold">92%</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Average Score</p>
                  <p className="text-2xl font-bold">78.3%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Quiz due dates for your courses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-md border border-purple-500/20">
                <div>
                  <p className="font-medium">Introduction to Programming Concepts</p>
                  <p className="text-sm text-muted-foreground">Due: Apr 15, 2025</p>
                </div>
                <Badge className="bg-purple-500">3 days left</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-amber-500/10 rounded-md border border-amber-500/20">
                <div>
                  <p className="font-medium">Algorithm Complexity</p>
                  <p className="text-sm text-muted-foreground">Due: Apr 18, 2025</p>
                </div>
                <Badge className="bg-amber-500">6 days left</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-md border border-green-500/20">
                <div>
                  <p className="font-medium">Data Structures Quiz</p>
                  <p className="text-sm text-muted-foreground">Due: Apr 22, 2025</p>
                </div>
                <Badge className="bg-green-500">10 days left</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

