"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Plus, Trash2, Edit2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Mock data for office hours
const officeHours = [
  {
    id: 1,
    day: "Monday",
    startTime: "14:00",
    endTime: "16:00",
    location: "Faculty Building, Office 412",
    type: "Regular",
    isOnline: false,
    isBookable: true,
    notes: "Drop-in hours for CS101 and CS250 students",
  },
  {
    id: 2,
    day: "Tuesday",
    startTime: "10:00",
    endTime: "11:30",
    location: "Online (Zoom)",
    type: "By Appointment",
    isOnline: true,
    isBookable: true,
    notes: "For thesis supervision and project consultations",
  },
  {
    id: 3,
    day: "Friday",
    startTime: "13:00",
    endTime: "15:00",
    location: "Faculty Building, Office 412",
    type: "Regular",
    isOnline: false,
    isBookable: true,
    notes: "General office hours for all students",
  },
]

// Mock data for upcoming appointments
const upcomingAppointments = [
  {
    id: 1,
    studentName: "Emma Johnson",
    courseCode: "CS101",
    date: "April 5, 2025",
    time: "14:30 - 15:00",
    purpose: "Assignment help",
    status: "confirmed",
  },
  {
    id: 2,
    studentName: "Michael Chen",
    courseCode: "CS250",
    date: "April 6, 2025",
    time: "10:15 - 10:45",
    purpose: "Project discussion",
    status: "confirmed",
  },
  {
    id: 3,
    studentName: "Sophia Rodriguez",
    courseCode: "CS350",
    date: "April 7, 2025",
    time: "13:00 - 13:30",
    purpose: "Exam preparation",
    status: "pending",
  },
]

export default function OfficeHoursPage() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState("monday")
  const [isOnline, setIsOnline] = useState(false)
  const [isBookable, setIsBookable] = useState(true)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Office Hours</h1>
          <p className="text-muted-foreground">Manage your office hours and student appointments</p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Office Hours
        </Button>
      </div>

      <Tabs defaultValue="schedule">
        <TabsList className="mb-4">
          <TabsTrigger value="schedule">Office Hours Schedule</TabsTrigger>
          <TabsTrigger value="appointments">Upcoming Appointments</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Office Hours</CardTitle>
              <CardDescription>Your regular office hours for student consultations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {officeHours.map((hours) => (
                  <div
                    key={hours.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border"
                  >
                    <div className="space-y-2 mb-4 sm:mb-0">
                      <div className="flex items-center gap-2">
                        <Badge variant={hours.type === "Regular" ? "default" : "secondary"}>{hours.type}</Badge>
                        {hours.isOnline && (
                          <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                            Online
                          </Badge>
                        )}
                      </div>
                      <h4 className="font-semibold">{hours.day}</h4>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>
                            {hours.startTime} - {hours.endTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{hours.location}</span>
                        </div>
                      </div>
                      {hours.notes && <p className="text-sm text-muted-foreground mt-1">{hours.notes}</p>}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit2 className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appointments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Student Appointments</CardTitle>
              <CardDescription>Scheduled appointments with students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border"
                  >
                    <div className="space-y-2 mb-4 sm:mb-0">
                      <div className="flex items-center gap-2">
                        <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"}>
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                        </Badge>
                        {appointment.courseCode && (
                          <span className="font-medium text-sm">{appointment.courseCode}</span>
                        )}
                      </div>
                      <h4 className="font-semibold">{appointment.studentName}</h4>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{appointment.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Purpose: {appointment.purpose}</p>
                    </div>
                    <div className="flex gap-2">
                      {appointment.status === "pending" ? (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900"
                          >
                            Confirm
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-red-100 text-red-800 hover:bg-red-200 hover:text-red-900"
                          >
                            Decline
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                            Cancel
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Office Hours</DialogTitle>
            <DialogDescription>Set up new office hours for student consultations</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="day" className="text-right">
                Day
              </Label>
              <Select value={selectedDay} onValueChange={setSelectedDay} className="col-span-3">
                <SelectTrigger id="day">
                  <SelectValue placeholder="Select day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monday">Monday</SelectItem>
                  <SelectItem value="tuesday">Tuesday</SelectItem>
                  <SelectItem value="wednesday">Wednesday</SelectItem>
                  <SelectItem value="thursday">Thursday</SelectItem>
                  <SelectItem value="friday">Friday</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="start-time" className="text-right">
                Start Time
              </Label>
              <Input id="start-time" type="time" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="end-time" className="text-right">
                End Time
              </Label>
              <Input id="end-time" type="time" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Input id="location" placeholder="Office number or online link" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Type
              </Label>
              <Select defaultValue="regular" className="col-span-3">
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="regular">Regular</SelectItem>
                  <SelectItem value="appointment">By Appointment</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="online" className="text-right">
                Online
              </Label>
              <div className="flex items-center space-x-2 col-span-3">
                <Switch id="online" checked={isOnline} onCheckedChange={setIsOnline} />
                <Label htmlFor="online">Virtual office hours</Label>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="bookable" className="text-right">
                Bookable
              </Label>
              <div className="flex items-center space-x-2 col-span-3">
                <Switch id="bookable" checked={isBookable} onCheckedChange={setIsBookable} />
                <Label htmlFor="bookable">Students can book appointments</Label>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="notes" className="text-right">
                Notes
              </Label>
              <Input id="notes" placeholder="Additional information" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsAddDialogOpen(false)}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

