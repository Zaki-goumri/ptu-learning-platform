import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Award, BarChart } from "lucide-react"
import CourseCard from "@/components/course-card"
import NotificationList from "@/components/notification-list"

export default function Dashboard() {
  // Mock courses data
  const courses = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      instructor: "Dr. Smith",
      progress: 75,
      image: "/placeholder.svg?height=220&width=400",
    },
    {
      id: 2,
      title: "Advanced Mathematics",
      instructor: "Prof. Johnson",
      progress: 45,
      image: "/placeholder.svg?height=220&width=400",
    },
    {
      id: 3,
      title: "Database Systems",
      instructor: "Dr. Williams",
      progress: 90,
      image: "/placeholder.svg?height=220&width=400",
    },
    {
      id: 4,
      title: "Software Engineering",
      instructor: "Prof. Davis",
      progress: 30,
      image: "/placeholder.svg?height=220&width=400",
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Student Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
            <BookOpen className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Hours Spent</CardTitle>
            <Clock className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Quizzes Completed</CardTitle>
            <BarChart className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
            <Award className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses">
        <TabsList className="mb-4">
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="grades">Grades</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <NotificationList />
        </TabsContent>

        <TabsContent value="grades">
          <Card>
            <CardHeader>
              <CardTitle>Academic Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Introduction to Computer Science</div>
                    <div className="font-medium">85%</div>
                  </div>
                  <Progress value={85} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Advanced Mathematics</div>
                    <div className="font-medium">72%</div>
                  </div>
                  <Progress value={72} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Database Systems</div>
                    <div className="font-medium">91%</div>
                  </div>
                  <Progress value={91} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Software Engineering</div>
                    <div className="font-medium">68%</div>
                  </div>
                  <Progress value={68} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

