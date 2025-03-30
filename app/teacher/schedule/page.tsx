"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, Users, AlertCircle, CheckCircle2 } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Mock data for teacher's schedule
const weeklySchedule = [
  {
    id: 1,
    day: "Monday",
    classes: [
      {
        id: "cs101-1",
        courseCode: "CS101",
        courseName: "Introduction to Computer Science",
        startTime: "09:00",
        endTime: "10:30",
        location: "Science Building, Room 305",
        students: 32,
        type: "Lecture",
        status: "active",
      },
      {
        id: "cs250-1",
        courseCode: "CS250",
        courseName: "Data Structures",
        startTime: "13:00",
        endTime: "14:30",
        location: "Engineering Building, Room 201",
        students: 28,
        type: "Lecture",
        status: "active",
      },
      {
        id: "cs101-lab",
        courseCode: "CS101",
        courseName: "Introduction to Computer Science",
        startTime: "15:00",
        endTime: "17:00",
        location: "Computer Lab 3",
        students: 16,
        type: "Lab",
        status: "active",
      },
    ],
  },
  {
    id: 2,
    day: "Tuesday",
    classes: [
      {
        id: "cs350-1",
        courseCode: "CS350",
        courseName: "Database Systems",
        startTime: "11:00",
        endTime: "12:30",
        location: "Science Building, Room 201",
        students: 25,
        type: "Lecture",
        status: "active",
      },
      {
        id: "office-hours-1",
        courseCode: "",
        courseName: "Office Hours",
        startTime: "14:00",
        endTime: "16:00",
        location: "Faculty Building, Office 412",
        students: 0,
        type: "Office Hours",
        status: "active",
      },
    ],
  },
  {
    id: 3,
    day: "Wednesday",
    classes: [
      {
        id: "cs101-2",
        courseCode: "CS101",
        courseName: "Introduction to Computer Science",
        startTime: "09:00",
        endTime: "10:30",
        location: "Science Building, Room 305",
        students: 32,
        type: "Lecture",
        status: "active",
      },
      {
        id: "cs250-2",
        courseCode: "CS250",
        courseName: "Data Structures",
        startTime: "13:00",
        endTime: "14:30",
        location: "Engineering Building, Room 201",
        students: 28,
        type: "Lecture",
        status: "active",
      },
      {
        id: "dept-meeting",
        courseCode: "",
        courseName: "Department Meeting",
        startTime: "15:30",
        endTime: "17:00",
        location: "Faculty Building, Conference Room",
        students: 0,
        type: "Meeting",
        status: "active",
      },
    ],
  },
  {
    id: 4,
    day: "Thursday",
    classes: [
      {
        id: "cs350-2",
        courseCode: "CS350",
        courseName: "Database Systems",
        startTime: "11:00",
        endTime: "12:30",
        location: "Science Building, Room 201",
        students: 25,
        type: "Lecture",
        status: "active",
      },
      {
        id: "cs350-lab",
        courseCode: "CS350",
        courseName: "Database Systems",
        startTime: "14:00",
        endTime: "16:00",
        location: "Computer Lab 2",
        students: 25,
        type: "Lab",
        status: "active",
      },
    ],
  },
  {
    id: 5,
    day: "Friday",
    classes: [
      {
        id: "cs250-lab",
        courseCode: "CS250",
        courseName: "Data Structures",
        startTime: "10:00",
        endTime: "12:00",
        location: "Computer Lab 1",
        students: 28,
        type: "Lab",
        status: "active",
      },
      {
        id: "office-hours-2",
        courseCode: "",
        courseName: "Office Hours",
        startTime: "13:00",
        endTime: "15:00",
        location: "Faculty Building, Office 412",
        students: 0,
        type: "Office Hours",
        status: "active",
      },
      {
        id: "research-meeting",
        courseCode: "",
        courseName: "Research Group Meeting",
        startTime: "15:30",
        endTime: "17:00",
        location: "Research Center, Room 105",
        students: 0,
        type: "Meeting",
        status: "active",
      },
    ],
  },
]

// Upcoming events
const upcomingEvents = [
  {
    id: "midterm-cs101",
    courseCode: "CS101",
    eventName: "Midterm Exam",
    date: "April 15, 2025",
    time: "10:00 - 12:00",
    location: "Examination Hall 2",
    type: "Exam",
  },
  {
    id: "project-cs250",
    courseCode: "CS250",
    eventName: "Project Presentations",
    date: "April 18, 2025",
    time: "13:00 - 17:00",
    location: "Engineering Building, Room 201",
    type: "Presentation",
  },
  {
    id: "final-cs350",
    courseCode: "CS350",
    eventName: "Final Exam",
    date: "May 20, 2025",
    time: "09:00 - 12:00",
    location: "Examination Hall 1",
    type: "Exam",
  },
]

// Schedule conflicts
const scheduleConflicts = [
  {
    id: "conflict-1",
    date: "April 10, 2025",
    description: "Department meeting overlaps with office hours",
    status: "unresolved",
  },
  {
    id: "conflict-2",
    date: "April 22, 2025",
    description: "Guest lecture scheduled during CS101 class",
    status: "resolved",
  },
]

export default function TeacherSchedulePage() {
  const [selectedSemester, setSelectedSemester] = useState("spring-2025")
  const [selectedWeek, setSelectedWeek] = useState("current")

  // Get badge color based on class type
  const getClassTypeBadge = (type: string) => {
    switch (type) {
      case "Lecture":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Lab":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Office Hours":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Meeting":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Class Schedule</h1>
          <p className="text-muted-foreground">Manage your teaching schedule and upcoming events</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fall-2024">Fall 2024</SelectItem>
              <SelectItem value="spring-2025">Spring 2025</SelectItem>
              <SelectItem value="fall-2025">Fall 2025</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedWeek} onValueChange={setSelectedWeek}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select week" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="previous">Previous Week</SelectItem>
              <SelectItem value="current">Current Week</SelectItem>
              <SelectItem value="next">Next Week</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="weekly">
        <TabsList className="mb-4">
          <TabsTrigger value="weekly">Weekly Schedule</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="conflicts">Schedule Conflicts</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-6">
          {weeklySchedule.map((day) => (
            <Card key={day.id}>
              <CardHeader className="pb-2">
                <CardTitle>{day.day}</CardTitle>
                <CardDescription>{day.classes.length} scheduled activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {day.classes.map((classItem) => (
                    <div
                      key={classItem.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border"
                    >
                      <div className="space-y-2 mb-4 md:mb-0">
                        <div className="flex items-center gap-2">
                          <Badge className={getClassTypeBadge(classItem.type)}>{classItem.type}</Badge>
                          {classItem.courseCode && <span className="font-medium text-sm">{classItem.courseCode}</span>}
                        </div>
                        <h4 className="font-semibold">{classItem.courseName}</h4>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>
                              {classItem.startTime} - {classItem.endTime}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{classItem.location}</span>
                          </div>
                          {classItem.students > 0 && (
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{classItem.students} students</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Calendar className="h-4 w-4 mr-2" />
                                Details
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>View class details and attendance</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        {classItem.type === "Lecture" || classItem.type === "Lab" ? (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <Users className="h-4 w-4 mr-2" />
                                  Roster
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View student roster</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Exams, presentations, and special sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border"
                  >
                    <div className="space-y-2 mb-4 sm:mb-0">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{event.type}</Badge>
                        {event.courseCode && <span className="font-medium text-sm">{event.courseCode}</span>}
                      </div>
                      <h4 className="font-semibold">{event.eventName}</h4>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                        Cancel
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button>
                  <Calendar className="h-4 w-4 mr-2" />
                  Add New Event
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conflicts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Schedule Conflicts</CardTitle>
              <CardDescription>Resolve scheduling conflicts and overlaps</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduleConflicts.map((conflict) => (
                  <div
                    key={conflict.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border"
                  >
                    <div className="space-y-2 mb-4 sm:mb-0">
                      <div className="flex items-center gap-2">
                        {conflict.status === "unresolved" ? (
                          <Badge variant="destructive" className="flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            Unresolved
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1 bg-green-100 text-green-800 border-green-200"
                          >
                            <CheckCircle2 className="h-3 w-3" />
                            Resolved
                          </Badge>
                        )}
                      </div>
                      <h4 className="font-semibold">{conflict.description}</h4>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{conflict.date}</span>
                      </div>
                    </div>
                    {conflict.status === "unresolved" && (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Resolve
                        </Button>
                        <Button variant="outline" size="sm">
                          Request Change
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

