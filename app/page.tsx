import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Medal, MessageSquare, FileText } from "lucide-react"

export default function Home() {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Interactive Courses",
      description: "Access PDF and video courses from your department",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Assessments & Quizzes",
      description: "Test your knowledge with interactive quizzes",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Student-Teacher Chat",
      description: "Direct communication with professors",
    },
    {
      icon: <Medal className="h-6 w-6" />,
      title: "Gamification",
      description: "Earn points and badges as you progress",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Notifications",
      description: "Stay updated with important announcements",
    },
  ]

  return (
    <div className="container mx-auto">
      <section className="py-12 md:py-24 bg-gradient-to-b from-purple-900/20 to-background rounded-lg">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700">
            Welcome to P.T.U
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your platform for dynamic, immersive, and rapid learning
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Link href="/login">
              <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
                Login with Progress ID
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-2 rounded-md bg-primary/10 w-fit mb-3">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

