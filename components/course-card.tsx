import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import Image from "next/image"

interface CourseCardProps {
  course: {
    id: number
    title: string
    instructor: string
    progress: number
    image: string
    category?: string
  }
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={course.image || "/placeholder.svg"} alt={course.title} className="object-cover" fill />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold">{course.title}</h3>
            <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        {course.progress > 0 && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <Progress value={course.progress} />
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/courses/${course.id}`} className="w-full">
          <Button
            variant="outline"
            className="w-full border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-800"
          >
            {course.progress === 0 ? "Start Course" : "Continue Learning"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

