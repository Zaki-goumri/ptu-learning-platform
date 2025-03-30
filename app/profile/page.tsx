import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Download, Award, BookOpen, GraduationCap, User } from "lucide-react"
import Image from "next/image"

export default function ProfilePage() {
  const studentInfo = {
    name: "Alex Johnson",
    id: "12345678",
    department: "Computer Science",
    email: "alex.johnson@example.com",
    year: "3rd Year",
    enrollmentDate: "September 2021",
    badges: [
      { id: 1, name: "Fast Learner", description: "Completed 5 courses in 30 days" },
      { id: 2, name: "Quiz Master", description: "Achieved 100% in 10 quizzes" },
      { id: 3, name: "Perfect Attendance", description: "Never missed a lecture" },
    ],
    courses: [
      { id: 1, name: "Introduction to Computer Science", grade: "A" },
      { id: 2, name: "Advanced Mathematics", grade: "B+" },
      { id: 3, name: "Database Systems", grade: "A-" },
      { id: 4, name: "Software Engineering", grade: "B" },
    ],
    averageGrade: 85,
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="w-full md:w-80 lg:w-96">
          <CardHeader className="text-center">
            <div className="mx-auto relative w-24 h-24 rounded-full overflow-hidden mb-4">
              <Image src="/placeholder.svg?height=96&width=96" alt={studentInfo.name} fill className="object-cover" />
            </div>
            <CardTitle>{studentInfo.name}</CardTitle>
            <div className="text-muted-foreground">{studentInfo.id}</div>
            <Badge className="mt-2 bg-purple-700">{studentInfo.department}</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-purple-400" />
                <span className="text-sm">{studentInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-purple-400" />
                <span className="text-sm">{studentInfo.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-purple-400" />
                <span className="text-sm">Enrolled: {studentInfo.enrollmentDate}</span>
              </div>
            </div>
            <Button
              className="w-full"
              variant="outline"
              className="border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-800"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Certificate
            </Button>
          </CardContent>
        </Card>

        <div className="flex-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Academic Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Average Grade</span>
                  <span className="font-medium">{studentInfo.averageGrade}%</span>
                </div>
                <Progress value={studentInfo.averageGrade} />
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="grades">
            <TabsList>
              <TabsTrigger value="grades">Grades</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            <TabsContent value="grades" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 gap-2">
                {studentInfo.courses.map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-3 bg-muted rounded-md">
                    <span>{course.name}</span>
                    <Badge variant="outline">{course.grade}</Badge>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="achievements" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {studentInfo.badges.map((badge) => (
                  <Card key={badge.id}>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="p-2 rounded-full bg-purple-900/20">
                        <Award className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">{badge.name}</h4>
                        <p className="text-sm text-muted-foreground">{badge.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

