"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, Users, Plus, FileText, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

// Mock data for exams
const exams = [
  {
    id: 1,
    courseCode: "CS101",
    courseName: "Introduction to Computer Science",
    examType: "Midterm",
    date: "April 15, 2025",
    startTime: "10:00",
    endTime: "12:00",
    location: "Examination Hall 2",
    students: 32,
    status: "scheduled",
    notes: "Covers chapters 1-5. No calculators allowed.",
  },
  {
    id: 2,
    courseCode: "CS250",
    courseName: "Data Structures",
    examType: "Project Presentation",
    date: "April 18, 2025",
    startTime: "13:00",
    endTime: "17:00",
    location: "Engineering Building, Room 201",
    students: 28,
    status: "scheduled",
    notes: "Group presentations, 15 minutes per group.",
  },
  {
    id: 3,
    courseCode: "CS350",
    courseName: "Database Systems",
    examType: "Final Exam",
    date: "May 20, 2025",
    startTime: "09:00",
    endTime: "12:00",
    location: "Examination Hall 1",
    students: 25,
    status: "scheduled",
    notes: "Comprehensive exam covering all course material.",
  },
  {
    id: 4,
    courseCode: "CS101",
    courseName: "Introduction to Computer Science",
    examType: "Quiz",
    date: "April 8, 2025",
    startTime: "09:00",
    endTime: "09:30",
    location: "Science Building, Room 305",
    students: 32,
    status: "completed",
    notes: "Pop quiz on Chapter 4.",
  },
]

// Mock data for exam materials
const examMaterials = [
  {
    id: 1,
    courseCode: "CS101",
    examType: "Midterm",
    materials: [
      { name: "Midterm Exam Paper", status: "draft" },
      { name: "Answer Key", status: "draft" },
    ],
  },
  {
    id: 2,
    courseCode: "CS250",
    examType: "Project Presentation",
    materials: [
      { name: "Presentation Rubric", status: "final" },
      { name: "Peer Evaluation Form", status: "final" },
    ],
  },
  {
    id: 3,
    courseCode: "CS350",
    examType: "Final Exam",
    materials: [
      { name: "Final Exam Paper", status: "draft" },
      { name: "Answer Key", status: "not started" },
    ],
  },
]

export default function ExamsPage() {
  const [isAddExamOpen, setIsAddExamOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState("")
  const [selectedExamType, setSelectedExamType] = useState("midterm")
  const [filterStatus, setFilterStatus] = useState("all")

  // Filter exams based on status
  const filteredExams = filterStatus === "all" ? exams : exams.filter((exam) => exam.status === filterStatus)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Exam Management</h1>
          <p className="text-muted-foreground">Schedule and manage exams, quizzes, and presentations</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Exams</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={() => setIsAddExamOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Schedule Exam
          </Button>
        </div>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList className="mb-4">
          <TabsTrigger value="upcoming">Upcoming Exams</TabsTrigger>
          <TabsTrigger value="materials">Exam Materials</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {filteredExams.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-lg font-medium">No exams found</p>
                <p className="text-sm text-muted-foreground mb-6">There are no exams matching your current filter.</p>
                <Button onClick={() => setIsAddExamOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Schedule New Exam
                </Button>
              </CardContent>
            </Card>
          ) : (
            filteredExams.map((exam) => (
              <Card key={exam.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant={exam.status === "completed" ? "secondary" : "default"}>
                        {exam.status === "completed" ? "Completed" : "Scheduled"}
                      </Badge>
                      <span className="font-medium">{exam.courseCode}</span>
                    </div>
                    <Badge variant="outline">{exam.examType}</Badge>
                  </div>
                  <CardTitle className="mt-2">{exam.courseName}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exam.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>
                          {exam.startTime} - {exam.endTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exam.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{exam.students} students</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {exam.notes && (
                    <div className="text-sm text-muted-foreground mb-4 p-3 bg-muted rounded-md">
                      <p className="font-medium mb-1">Notes:</p>
                      <p>{exam.notes}</p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exam.status !== "completed" ? (
                      <>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          Prepare Materials
                        </Button>
                        <Button variant="outline" size="sm">
                          <Users className="h-4 w-4 mr-2" />
                          View Roster
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                          Reschedule
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          View Results
                        </Button>
                        <Button variant="outline" size="sm">
                          <Users className="h-4 w-4 mr-2" />
                          Grade Submissions
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="materials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Exam Materials</CardTitle>
              <CardDescription>Manage exam papers, answer keys, and evaluation forms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {examMaterials.map((exam) => (
                  <div key={exam.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold">
                          {exam.courseCode} - {exam.examType}
                        </h3>
                      </div>
                      <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Material
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {exam.materials.map((material, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-md">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            <span>{material.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={
                                material.status === "final"
                                  ? "default"
                                  : material.status === "draft"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {material.status.charAt(0).toUpperCase() + material.status.slice(1)}
                            </Badge>
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={isAddExamOpen} onOpenChange={setIsAddExamOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Schedule New Exam</DialogTitle>
            <DialogDescription>Create a new exam, quiz, or presentation for your course</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="course" className="text-right">
                Course
              </Label>
              <Select value={selectedCourse} onValueChange={setSelectedCourse} className="col-span-3">
                <SelectTrigger id="course">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cs101">CS101 - Introduction to Computer Science</SelectItem>
                  <SelectItem value="cs250">CS250 - Data Structures</SelectItem>
                  <SelectItem value="cs350">CS350 - Database Systems</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="exam-type" className="text-right">
                Exam Type
              </Label>
              <Select value={selectedExamType} onValueChange={setSelectedExamType} className="col-span-3">
                <SelectTrigger id="exam-type">
                  <SelectValue placeholder="Select exam type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="quiz">Quiz</SelectItem>
                  <SelectItem value="midterm">Midterm Exam</SelectItem>
                  <SelectItem value="final">Final Exam</SelectItem>
                  <SelectItem value="presentation">Presentation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="exam-date" className="text-right">
                Date
              </Label>
              <Input id="exam-date" type="date" className="col-span-3" />
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
              <Input id="location" placeholder="Exam location" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="notes" className="text-right">
                Notes
              </Label>
              <Textarea
                id="notes"
                placeholder="Additional information about the exam"
                className="col-span-3"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddExamOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsAddExamOpen(false)}>Schedule Exam</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

