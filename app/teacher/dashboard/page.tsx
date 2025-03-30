import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, FileCheck, MessageSquare, Plus, Calendar, Clock, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function TeacherDashboard() {
  // Mock courses data
  const courses = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      students: 45,
      progress: 75,
      nextClass: "Today, 2:00 PM",
      pendingAssignments: 12,
    },
    {
      id: 2,
      title: "Advanced Algorithms",
      students: 28,
      progress: 60,
      nextClass: "Tomorrow, 10:00 AM",
      pendingAssignments: 8,
    },
    {
      id: 3,
      title: "Database Systems",
      students: 36,
      progress: 90,
      nextClass: "Thursday, 1:30 PM",
      pendingAssignments: 0,
    },
  ]

  // Mock student data
  const topStudents = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      grade: "A",
      performance: 95,
    },
    {
      id: 2,
      name: "Maria Garcia",
      avatar: "/placeholder.svg?height=40&width=40",
      grade: "A-",
      performance: 92,
    },
    {
      id: 3,
      name: "James Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      grade: "B+",
      performance: 88,
    },
  ]

  // Mock upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Introduction to Computer Science Lecture",
      date: "Today, 2:00 PM",
      type: "lecture",
    },
    {
      id: 2,
      title: "Office Hours",
      date: "Today, 4:00 PM",
      type: "office-hours",
    },
    {
      id: 3,
      title: "Advanced Algorithms Quiz",
      date: "Tomorrow, 10:00 AM",
      type: "quiz",
    },
    {
      id: 4,
      title: "Department Meeting",
      date: "Friday, 1:00 PM",
      type: "meeting",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Dr. Smith</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-purple-700 hover:bg-purple-800">
            <Plus className="mr-2 h-4 w-4" />
            Create New Course
          </Button>
          <Link href="/teacher/grades">
            <Button variant="outline">Manage Grades</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">109</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
              <span className="text-green-500 font-medium">8%</span> from last semester
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">Current semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
            <FileCheck className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">20</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <span className="text-amber-500 font-medium">12</span> need grading
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground mt-1">
              <Link href="/messages" className="text-purple-400 hover:underline">
                View messages
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses">
        <TabsList className="mb-4">
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="students">Student Performance</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          {courses.map((course) => (
            <Card key={course.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{course.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students} Students
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {course.nextClass}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {course.pendingAssignments > 0 && (
                      <Badge variant="outline" className="border-amber-500 text-amber-500">
                        {course.pendingAssignments} Pending Assignments
                      </Badge>
                    )}
                    <Link href={`/teacher/courses/${course.id}`}>
                      <Button variant="outline">Manage Course</Button>
                    </Link>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Course Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />
                </div>
              </CardContent>
            </Card>
          ))}
          <div className="flex justify-end">
            <Link href="/teacher/courses">
              <Button variant="outline">View All Courses</Button>
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="students" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Students</CardTitle>
              <CardDescription>Students with the highest grades across your courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topStudents.map((student) => (
                  <div key={student.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={student.avatar} alt={student.name} />
                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{student.name}</h4>
                        <p className="text-sm text-muted-foreground">Performance: {student.performance}%</p>
                      </div>
                    </div>
                    <Badge>{student.grade}</Badge>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Class Performance Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>A (90-100%)</span>
                          <span>18%</span>
                        </div>
                        <Progress value={18} className="h-2 bg-muted [&>div]:bg-green-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>B (80-89%)</span>
                          <span>42%</span>
                        </div>
                        <Progress value={42} className="h-2 bg-muted [&>div]:bg-blue-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>C (70-79%)</span>
                          <span>25%</span>
                        </div>
                        <Progress value={25} className="h-2 bg-muted [&>div]:bg-yellow-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>D (60-69%)</span>
                          <span>10%</span>
                        </div>
                        <Progress value={10} className="h-2 bg-muted [&>div]:bg-orange-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>F (Below 60%)</span>
                          <span>5%</span>
                        </div>
                        <Progress value={5} className="h-2 bg-muted [&>div]:bg-red-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-6 flex justify-end">
                <Link href="/teacher/students">
                  <Button variant="outline">View All Students</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Schedule</CardTitle>
              <CardDescription>Your classes and events for the week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center gap-4 p-3 rounded-md bg-muted/50">
                    <div
                      className={`p-2 rounded-full ${
                        event.type === "lecture"
                          ? "bg-purple-900/20"
                          : event.type === "quiz"
                            ? "bg-amber-100"
                            : event.type === "meeting"
                              ? "bg-blue-100"
                              : "bg-green-100"
                      }`}
                    >
                      {event.type === "lecture" ? (
                        <BookOpen className="h-5 w-5 text-purple-400" />
                      ) : event.type === "quiz" ? (
                        <FileCheck className="h-5 w-5 text-amber-600" />
                      ) : event.type === "meeting" ? (
                        <Users className="h-5 w-5 text-blue-600" />
                      ) : (
                        <Clock className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <Link href="/teacher/schedule">
                  <Button variant="outline">View Full Schedule</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

