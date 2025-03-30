import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Clock, ChevronLeft, ChevronRight, Save, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function QuizPage({ params }: { params: { courseId: string; quizId: string } }) {
  // Mock quiz data
  const course = {
    id: params.courseId,
    title: "Introduction to Computer Science",
    instructor: "Dr. Smith",
  }

  const quiz = {
    id: params.quizId,
    title: "Week 1 Quiz: Fundamentals",
    courseId: params.courseId,
    timeLimit: 15, // minutes
    totalQuestions: 10,
    description: "This quiz covers the fundamental concepts introduced in the first week of the course.",
    instructions:
      "Please answer all questions. You have 15 minutes to complete this quiz. You can navigate between questions using the previous and next buttons.",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        text: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Computer Personal Unit",
          "Central Processor Utility",
          "Central Program Unit",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        type: "multiple-choice",
        text: "Which of the following is NOT a programming language?",
        options: ["Java", "Python", "HTML", "Microsoft Word"],
        correctAnswer: 3,
      },
      {
        id: 3,
        type: "multiple-select",
        text: "Which of the following are valid data types in most programming languages? (Select all that apply)",
        options: ["Integer", "String", "Document", "Boolean"],
        correctAnswers: [0, 1, 3],
      },
      {
        id: 4,
        type: "true-false",
        text: "RAM stands for Random Access Memory.",
        correctAnswer: true,
      },
      {
        id: 5,
        type: "short-answer",
        text: "Briefly explain what an algorithm is.",
        maxLength: 200,
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Link
              href={`/courses/${params.courseId}`}
              className="text-muted-foreground hover:text-foreground flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to {course.title}
            </Link>
          </div>
          <h1 className="text-3xl font-bold">{quiz.title}</h1>
          <p className="text-muted-foreground">
            {course.title} • {course.instructor}
          </p>
        </div>
        <div className="flex items-center gap-4 bg-muted p-2 rounded-md">
          <Clock className="h-5 w-5 text-purple-400" />
          <div className="text-sm">
            <p className="font-medium">Time Remaining</p>
            <p className="text-muted-foreground">14:32</p>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle>Quiz Progress</CardTitle>
              <CardDescription>Question 1 of {quiz.totalQuestions}</CardDescription>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">10%</span>
              <Progress value={10} className="w-24" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Question 1</h2>
              <p>{quiz.questions[0].text}</p>
            </div>

            <div className="space-y-4">
              <RadioGroup defaultValue="">
                {quiz.questions[0].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={index.toString()} id={`q1-option-${index}`} />
                    <Label htmlFor={`q1-option-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" disabled>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button variant="outline">
            <Save className="mr-2 h-4 w-4" />
            Save Progress
          </Button>
          <Button>
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Question Navigator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: quiz.totalQuestions }).map((_, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`h-10 w-10 p-0 ${index === 0 ? "bg-purple-700" : ""}`}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button className="bg-purple-700 hover:bg-purple-800">Submit Quiz</Button>
      </div>
    </div>
  )
}

