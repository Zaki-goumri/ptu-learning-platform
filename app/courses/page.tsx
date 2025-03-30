import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import CourseCard from "@/components/course-card"

export default function CoursesPage() {
  // Mock courses data
  const allCourses = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      instructor: "Dr. Smith",
      progress: 75,
      image: "/placeholder.svg?height=220&width=400",
      category: "Computer Science",
    },
    {
      id: 2,
      title: "Advanced Mathematics",
      instructor: "Prof. Johnson",
      progress: 45,
      image: "/placeholder.svg?height=220&width=400",
      category: "Mathematics",
    },
    {
      id: 3,
      title: "Database Systems",
      instructor: "Dr. Williams",
      progress: 90,
      image: "/placeholder.svg?height=220&width=400",
      category: "Computer Science",
    },
    {
      id: 4,
      title: "Software Engineering",
      instructor: "Prof. Davis",
      progress: 30,
      image: "/placeholder.svg?height=220&width=400",
      category: "Engineering",
    },
    {
      id: 5,
      title: "Artificial Intelligence",
      instructor: "Dr. Martinez",
      progress: 0,
      image: "/placeholder.svg?height=220&width=400",
      category: "Computer Science",
    },
    {
      id: 6,
      title: "Data Structures",
      instructor: "Prof. Taylor",
      progress: 0,
      image: "/placeholder.svg?height=220&width=400",
      category: "Computer Science",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <h1 className="text-3xl font-bold">Courses</h1>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input className="pl-8" placeholder="Search courses..." />
          </div>

          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="math">Mathematics</SelectItem>
              <SelectItem value="eng">Engineering</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="enrolled">Enrolled</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="enrolled" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCourses
              .filter((course) => course.progress > 0 && course.progress < 100)
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCourses
              .filter((course) => course.progress === 100)
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            {allCourses.filter((course) => course.progress === 100).length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">You haven't completed any courses yet.</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

