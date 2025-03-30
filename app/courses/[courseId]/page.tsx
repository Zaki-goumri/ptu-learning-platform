import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Video, Download, MessageSquare, Award, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CoursePage({ params }: { params: { courseId: string } }) {
  // Mock course data
  const course = {
    id: params.courseId,
    title: "Introduction to Computer Science",
    instructor: "Dr. Smith",
    description:
      "This course provides a comprehensive introduction to computer science, covering fundamental concepts, algorithms, and programming principles.",
    progress: 75,
    image: "/placeholder.svg?height=400&width=800",
    category: "Computer Science",
    duration: "12 weeks",
    materials: [
      { id: 1, title: "Introduction to Algorithms", type: "pdf" },
      { id: 2, title: "Programming Fundamentals", type: "video" },
      { id: 3, title: "Data Types and Variables", type: "pdf" },
      { id: 4, title: "Control Structures", type: "video" },
    ],
    quizzes: [
      { id: 1, title: "Week 1 Quiz: Fundamentals", questions: 10, completed: true, dueDate: "Oct 10, 2023" },
      { id: 2, title: "Week 2 Quiz: Data Types", questions: 15, completed: true, dueDate: "Oct 17, 2023" },
      { id: 3, title: "Week 3 Quiz: Control Flow", questions: 12, completed: false, dueDate: "Oct 24, 2023" },
      { id: 4, title: "Midterm Exam", questions: 30, completed: false, dueDate: "Nov 7, 2023" },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="bg-background/80 absolute inset-0 z-10"></div>
        <div className="relative h-64 overflow-hidden rounded-lg">
          <Image src={course.image || "/placeholder.svg"} alt={course.title} className="object-cover" fill priority />
        </div>
        <div className="absolute inset-0 flex items-center z-20 p-6">
          <div className="space-y-2">
            <Badge className="bg-purple-700">{course.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>
            <p className="text-muted-foreground">Instructor: {course.instructor}</p>
            <div className="flex items-center space-x-2 pt-2">
              <Progress value={course.progress} className="w-64" />
              <span className="text-sm font-medium">{course.progress}% Complete</span>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="materials">
        <TabsList className="mb-4">
          <TabsTrigger value="materials">Course Materials</TabsTrigger>
          <TabsTrigger value="quizzes">Quizzes & Assessments</TabsTrigger>
          <TabsTrigger value="discussion">Discussion</TabsTrigger>
        </TabsList>

        <TabsContent value="materials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Description</CardTitle>
              <CardDescription>Duration: {course.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{course.description}</p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Learning Materials</h3>
            {course.materials.map((material) => (
              <Card key={material.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      {material.type === "pdf" ? (
                        <div className="p-2 rounded-full bg-primary/10">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                      ) : (
                        <div className="p-2 rounded-full bg-primary/10">
                          <Video className="h-6 w-6 text-primary" />
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium">{material.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {material.type === "pdf" ? "PDF Document" : "Video Lecture"}
                        </p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="quizzes" className="space-y-4">
          <h3 className="text-xl font-bold">Quizzes & Assessments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.quizzes.map((quiz) => (
              <Card key={quiz.id} className={quiz.completed ? "border-green-500" : ""}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{quiz.title}</h4>
                      <div className="flex items-center gap-4 mt-1">
                        <p className="text-sm text-muted-foreground">{quiz.questions} Questions</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          Due: {quiz.dueDate}
                        </div>
                      </div>
                    </div>
                    {quiz.completed ? (
                      <Badge variant="outline" className="border-green-500 text-green-500">
                        <Award className="h-3 w-3 mr-1" />
                        Completed
                      </Badge>
                    ) : (
                      <Link href={`/courses/${course.id}/quizzes/${quiz.id}`}>
                        <Button size="sm" className="bg-purple-700 hover:bg-purple-800">
                          Take Quiz
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="discussion" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Discussion</CardTitle>
              <CardDescription>Engage with your peers and instructor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">John Doe</h4>
                        <span className="text-xs text-muted-foreground">Yesterday</span>
                      </div>
                      <p className="text-sm">
                        Can someone explain the difference between linear and binary search algorithms?
                      </p>
                    </div>
                    <div className="ml-8 mt-4 bg-muted p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Dr. Smith (Instructor)</h4>
                        <span className="text-xs text-muted-foreground">2 hours ago</span>
                      </div>
                      <p className="text-sm">
                        Linear search checks each element sequentially, while binary search divides the search interval
                        in half repeatedly. Binary search is much faster but requires sorted data.
                      </p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Jane Smith</h4>
                        <span className="text-xs text-muted-foreground">3 days ago</span>
                      </div>
                      <p className="text-sm">When is the deadline for the final project submission?</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

