"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, Plus, FileText, AlertCircle, CheckCircle2, School, BookOpen } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

// Mock data for academic calendar
const academicCalendar = [
  {
    id: 1,
    name: "Spring 2025 Semester",
    events: [
      { id: 1, name: "Classes Begin", date: "January 13, 2025", type: "academic" },
      { id: 2, name: "Add/Drop Deadline", date: "January 24, 2025", type: "deadline" },
      { id: 3, name: "Spring Break", date: "March 10-14, 2025", type: "holiday" },
      { id: 4, name: "Midterm Examination Period", date: "March 3-7, 2025", type: "exam" },
      { id: 5, name: "Last Day of Classes", date: "May 2, 2025", type: "academic" },
      { id: 6, name: "Final Examination Period", date: "May 5-16, 2025", type: "exam" },
      { id: 7, name: "Commencement", date: "May 24, 2025", type: "event" },
    ],
  },
  {
    id: 2,
    name: "Fall 2025 Semester",
    events: [
      { id: 1, name: "Classes Begin", date: "August 25, 2025", type: "academic" },
      { id: 2, name: "Add/Drop Deadline", date: "September 5, 2025", type: "deadline" },
      { id: 3, name: "Fall Break", date: "October 13-14, 2025", type: "holiday" },
      { id: 4, name: "Midterm Examination Period", date: "October 20-24, 2025", type: "exam" },
      { id: 5, name: "Thanksgiving Break", date: "November 26-28, 2025", type: "holiday" },
      { id: 6, name: "Last Day of Classes", date: "December 5, 2025", type: "academic" },
      { id: 7, name: "Final Examination Period", date: "December 8-19, 2025", type: "exam" },
    ],
  },
]

// Mock data for department schedules
const departmentSchedules = [
  {
    id: 1,
    name: "Computer Science",
    courses: 24,
    sections: 42,
    faculty: 18,
    status: "complete",
  },
  {
    id: 2,
    name: "Mathematics",
    courses: 18,
    sections: 35,
    faculty: 15,
    status: "complete",
  },
  {
    id: 3,
    name: "Physics",
    courses: 15,
    sections: 28,
    faculty: 12,
    status: "in-progress",
  },
  {
    id: 4,
    name: "Chemistry",
    courses: 16,
    sections: 30,
    faculty: 14,
    status: "in-progress",
  },
  {
    id: 5,
    name: "Biology",
    courses: 20,
    sections: 38,
    faculty: 16,
    status: "not-started",
  },
]

// Mock data for room assignments
const roomAssignments = [
  {
    id: 1,
    building: "Science Building",
    rooms: [
      { id: 101, name: "Room 101", capacity: 30, type: "Classroom", conflicts: 0 },
      { id: 102, name: "Room 102", capacity: 25, type: "Classroom", conflicts: 1 },
      { id: 103, name: "Room 103", capacity: 40, type: "Lecture Hall", conflicts: 0 },
      { id: 104, name: "Room 104", capacity: 20, type: "Lab", conflicts: 2 },
      { id: 105, name: "Room 105", capacity: 15, type: "Seminar Room", conflicts: 0 },
    ],
  },
  {
    id: 2,
    building: "Engineering Building",
    rooms: [
      { id: 201, name: "Room 201", capacity: 35, type: "Classroom", conflicts: 0 },
      { id: 202, name: "Room 202", capacity: 30, type: "Classroom", conflicts: 0 },
      { id: 203, name: "Room 203", capacity: 50, type: "Lecture Hall", conflicts: 1 },
      { id: 204, name: "Room 204", capacity: 25, type: "Lab", conflicts: 0 },
      { id: 205, name: "Room 205", capacity: 20, type: "Seminar Room", conflicts: 0 },
    ],
  },
  {
    id: 3,
    building: "Liberal Arts Building",
    rooms: [
      { id: 301, name: "Room 301", capacity: 40, type: "Classroom", conflicts: 0 },
      { id: 302, name: "Room 302", capacity: 35, type: "Classroom", conflicts: 0 },
      { id: 303, name: "Room 303", capacity: 60, type: "Lecture Hall", conflicts: 0 },
      { id: 304, name: "Room 304", capacity: 30, type: "Seminar Room", conflicts: 1 },
      { id: 305, name: "Room 305", capacity: 25, type: "Seminar Room", conflicts: 0 },
    ],
  },
]

export default function AdminSchedulePage() {
  const [selectedSemester, setSelectedSemester] = useState("spring-2025")
  const [isAddEventOpen, setIsAddEventOpen] = useState(false)
  const [selectedEventType, setSelectedEventType] = useState("academic")
  const [selectedBuilding, setSelectedBuilding] = useState("")
  const [isPublic, setIsPublic] = useState(true)

  // Get badge color based on event type
  const getEventTypeBadge = (type: string) => {
    switch (type) {
      case "academic":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "deadline":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "holiday":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "exam":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "event":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  // Get badge for department status
  const getDepartmentStatusBadge = (status: string) => {
    switch (status) {
      case "complete":
        return (
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
            Complete
          </Badge>
        )
      case "in-progress":
        return (
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            In Progress
          </Badge>
        )
      case "not-started":
        return (
          <Badge variant="outline" className="flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            Not Started
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Master Schedule</h1>
          <p className="text-muted-foreground">Manage academic calendar and room assignments</p>
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
        </div>
      </div>

      <Tabs defaultValue="calendar">
        <TabsList className="mb-4">
          <TabsTrigger value="calendar">Academic Calendar</TabsTrigger>
          <TabsTrigger value="departments">Department Schedules</TabsTrigger>
          <TabsTrigger value="rooms">Room Assignments</TabsTrigger>
        </TabsList>

        <TabsContent value="calendar" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              {selectedSemester === "spring-2025" ? "Spring 2025" : "Fall 2025"} Academic Calendar
            </h2>
            <Button onClick={() => setIsAddEventOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Event
            </Button>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {academicCalendar
                  .find((cal) => cal.name.toLowerCase().includes(selectedSemester.split("-")[0]))
                  ?.events.map((event) => (
                    <div
                      key={event.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border"
                    >
                      <div className="space-y-2 mb-4 sm:mb-0">
                        <Badge className={getEventTypeBadge(event.type)}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </Badge>
                        <h4 className="font-semibold">{event.name}</h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Department Scheduling Status</h2>
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {departmentSchedules.map((dept) => (
                  <div
                    key={dept.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border"
                  >
                    <div className="space-y-2 mb-4 sm:mb-0">
                      <div className="flex items-center gap-2">{getDepartmentStatusBadge(dept.status)}</div>
                      <h4 className="font-semibold flex items-center gap-2">
                        <School className="h-4 w-4" />
                        {dept.name} Department
                      </h4>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          <span>{dept.courses} Courses</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          <span>{dept.sections} Sections</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{dept.faculty} Faculty</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Send Reminder
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rooms" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Room Assignments</h2>
            <div className="flex gap-2">
              <Select value={selectedBuilding} onValueChange={setSelectedBuilding}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Buildings" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Buildings</SelectItem>
                  <SelectItem value="science">Science Building</SelectItem>
                  <SelectItem value="engineering">Engineering Building</SelectItem>
                  <SelectItem value="liberal-arts">Liberal Arts Building</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Room
              </Button>
            </div>
          </div>

          {roomAssignments.map((building) => (
            <Card key={building.id} className="mb-6">
              <CardHeader className="pb-2">
                <CardTitle>{building.building}</CardTitle>
                <CardDescription>{building.rooms.length} rooms available</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {building.rooms.map((room) => (
                    <div
                      key={room.id}
                      className={`p-4 rounded-lg border ${room.conflicts > 0 ? "border-red-300 bg-red-50 dark:bg-red-950/20" : ""}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{room.name}</h4>
                        <Badge variant="outline">{room.type}</Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center justify-between">
                          <span>Capacity:</span>
                          <span className="font-medium">{room.capacity} students</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Scheduling Conflicts:</span>
                          <span className={`font-medium ${room.conflicts > 0 ? "text-red-600 dark:text-red-400" : ""}`}>
                            {room.conflicts}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button variant="outline" size="sm">
                          View Schedule
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add Calendar Event</DialogTitle>
            <DialogDescription>Add a new event to the academic calendar</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="event-name" className="text-right">
                Event Name
              </Label>
              <Input id="event-name" placeholder="Event name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="event-type" className="text-right">
                Event Type
              </Label>
              <Select value={selectedEventType} onValueChange={setSelectedEventType} className="col-span-3">
                <SelectTrigger id="event-type">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="deadline">Deadline</SelectItem>
                  <SelectItem value="holiday">Holiday</SelectItem>
                  <SelectItem value="exam">Exam Period</SelectItem>
                  <SelectItem value="event">Special Event</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="event-date" className="text-right">
                Date
              </Label>
              <Input id="event-date" type="date" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="event-description" className="text-right">
                Description
              </Label>
              <Textarea id="event-description" placeholder="Event description" className="col-span-3" rows={3} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="is-public" className="text-right">
                Public
              </Label>
              <div className="flex items-center space-x-2 col-span-3">
                <Switch id="is-public" checked={isPublic} onCheckedChange={setIsPublic} />
                <Label htmlFor="is-public">Display on public calendar</Label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddEventOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsAddEventOpen(false)}>Add Event</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

