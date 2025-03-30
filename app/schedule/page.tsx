import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, BookOpen, ChevronLeft, ChevronRight, Download } from "lucide-react"

export default function SchedulePage() {
  // Mock schedule data
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  const timeSlots = ["8:00 AM", "9:30 AM", "11:00 AM", "12:30 PM", "2:00 PM", "3:30 PM", "5:00 PM"]

  const classes = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      instructor: "Dr. Smith",
      day: "Monday",
      startTime: "9:30 AM",
      endTime: "11:00 AM",
      location: "Room A101",
      type: "lecture",
    },
    {
      id: 2,
      title: "Advanced Mathematics",
      instructor: "Prof. Johnson",
      day: "Monday",
      startTime: "2:00 PM",
      endTime: "3:30 PM",
      location: "Room B202",
      type: "lecture",
    },
    {
      id: 3,
      title: "Database Systems",
      instructor: "Dr. Williams",
      day: "Tuesday",
      startTime: "11:00 AM",
      endTime: "12:30 PM",
      location: "Room C303",
      type: "lecture",
    },
    {
      id: 4,
      title: "Computer Science Lab",
      instructor: "Dr. Smith",
      day: "Wednesday",
      startTime: "9:30 AM",
      endTime: "11:00 AM",
      location: "Lab 1",
      type: "lab",
    },
    {
      id: 5,
      title: "Software Engineering",
      instructor: "Prof. Davis",
      day: "Thursday",
      startTime: "2:00 PM",
      endTime: "3:30 PM",
      location: "Room A101",
      type: "lecture",
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      instructor: "Dr. Martinez",
      day: "Friday",
      startTime: "11:00 AM",
      endTime: "12:30 PM",
      location: "Room B202",
      type: "lecture",
    },
    {
      id: 7,
      title: "Office Hours",
      instructor: "Dr. Smith",
      day: "Thursday",
      startTime: "11:00 AM",
      endTime: "12:30 PM",
      location: "Office 101",
      type: "office-hours",
    },
  ]

  // Helper function to get classes for a specific day and time
  const getClassForTimeSlot = (day, time) => {
    return classes.filter((c) => c.day === day && c.startTime === time)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Class Schedule</h1>
          <p className="text-muted-foreground">View your weekly class schedule</p>
        </div>
        <div className="flex gap-2">
          <div className="w-full md:w-48">
            <Select defaultValue="current">
              <SelectTrigger>
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">Fall 2023</SelectItem>
                <SelectItem value="next">Spring 2024</SelectItem>
                <SelectItem value="previous">Summer 2023</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous Week
        </Button>
        <h2 className="text-lg font-medium">November 13 - 17, 2023</h2>
        <Button variant="outline" size="sm">
          Next Week
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      <Tabs defaultValue="week">
        <TabsList className="mb-4">
          <TabsTrigger value="week">Week View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="courses">My Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="week" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2 w-20"></th>
                      {weekDays.map((day) => (
                        <th key={day} className="border p-2 text-center font-medium">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {timeSlots.map((time) => (
                      <tr key={time}>
                        <td className="border p-2 text-center text-sm text-muted-foreground">{time}</td>
                        {weekDays.map((day) => {
                          const classesInSlot = getClassForTimeSlot(day, time)
                          return (
                            <td key={`${day}-${time}`} className="border p-1 h-24 align-top">
                              {classesInSlot.length > 0
                                ? classesInSlot.map((cls) => (
                                    <div
                                      key={cls.id}
                                      className={`p-1 rounded-md mb-1 text-xs ${
                                        cls.type === "lecture"
                                          ? "bg-purple-900/20 text-purple-400"
                                          : cls.type === "lab"
                                            ? "bg-blue-900/20 text-blue-400"
                                            : "bg-green-900/20 text-green-400"
                                      }`}
                                    >
                                      <div className="font-medium">{cls.title}</div>
                                      <div className="flex items-center mt-1">
                                        <MapPin className="h-3 w-3 mr-1" />
                                        {cls.location}
                                      </div>
                                    </div>
                                  ))
                                : null}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>This Week's Schedule</CardTitle>
              <CardDescription>All your classes and events</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {weekDays.map((day) => (
                <div key={day} className="space-y-3">
                  <h3 className="font-medium">{day}</h3>
                  {classes.filter((c) => c.day === day).length > 0 ? (
                    classes
                      .filter((c) => c.day === day)
                      .sort((a, b) => {
                        const timeA = new Date(`01/01/2023 ${a.startTime}`).getTime()
                        const timeB = new Date(`01/01/2023 ${b.startTime}`).getTime()
                        return timeA - timeB
                      })
                      .map((cls) => (
                        <div key={cls.id} className="flex items-center p-3 rounded-md bg-muted/50">
                          <div
                            className={`p-2 rounded-full mr-3 ${
                              cls.type === "lecture"
                                ? "bg-purple-900/20"
                                : cls.type === "lab"
                                  ? "bg-blue-900/20"
                                  : "bg-green-900/20"
                            }`}
                          >
                            {cls.type === "lecture" ? (
                              <BookOpen className="h-5 w-5 text-purple-400" />
                            ) : cls.type === "lab" ? (
                              <Users className="h-5 w-5 text-blue-400" />
                            ) : (
                              <Clock className="h-5 w-5 text-green-400" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                              <h4 className="font-medium">{cls.title}</h4>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="h-3 w-3 mr-1" />
                                {cls.startTime} - {cls.endTime}
                              </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-1 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Users className="h-3 w-3 mr-1" />
                                {cls.instructor}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {cls.location}
                              </div>
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className={`ml-2 ${
                              cls.type === "lecture"
                                ? "border-purple-400 text-purple-400"
                                : cls
                                  ? "border-purple-400 text-purple-400"
                                  : cls.type === "lab"
                                    ? "border-blue-400 text-blue-400"
                                    : "border-green-400 text-green-400"
                            }`}
                          >
                            {cls.type === "lecture" ? "Lecture" : cls.type === "lab" ? "Lab" : "Office Hours"}
                          </Badge>
                        </div>
                      ))
                  ) : (
                    <p className="text-sm text-muted-foreground">No classes scheduled</p>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Courses</CardTitle>
              <CardDescription>All courses you're enrolled in this semester</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.from(new Set(classes.map((c) => c.title))).map((title, index) => {
                const course = classes.find((c) => c.title === title)
                const sessions = classes.filter((c) => c.title === title)

                return (
                  <div key={index} className="p-4 rounded-md border">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="font-medium">{title}</h3>
                        <p className="text-sm text-muted-foreground">{course.instructor}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className={`${
                          course.type === "lecture"
                            ? "border-purple-400 text-purple-400"
                            : course.type === "lab"
                              ? "border-blue-400 text-blue-400"
                              : "border-green-400 text-green-400"
                        }`}
                      >
                        {course.type === "lecture" ? "Lecture" : course.type === "lab" ? "Lab" : "Office Hours"}
                      </Badge>
                    </div>

                    <div className="mt-4 space-y-2">
                      <h4 className="text-sm font-medium">Schedule:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {sessions.map((session, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>
                              {session.day}, {session.startTime} - {session.endTime}
                            </span>
                            <MapPin className="h-4 w-4 mx-2 text-muted-foreground" />
                            <span>{session.location}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

