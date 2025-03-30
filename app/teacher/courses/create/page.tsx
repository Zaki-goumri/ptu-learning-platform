"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Upload, Plus, Trash2, FileText, Video } from "lucide-react"

export default function CreateCoursePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Create New Course</h1>
          <p className="text-muted-foreground">Publish a new course for your students</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Save as Draft</Button>
          <Button
            className="bg-purple-700 hover:bg-purple-800"
            onClick={() => {
              alert("Course published successfully! Students can now enroll.")
            }}
          >
            Publish Course
          </Button>
        </div>
      </div>

      <Tabs defaultValue="details">
        <TabsList className="mb-4">
          <TabsTrigger value="details">Course Details</TabsTrigger>
          <TabsTrigger value="content">Course Content</TabsTrigger>
          <TabsTrigger value="assessments">Assessments</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Enter the basic details about your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="course-title">Course Title</Label>
                <Input id="course-title" placeholder="e.g. Introduction to Computer Science" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="eng">Engineering</SelectItem>
                      <SelectItem value="math">Mathematics</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="level">Course Level</Label>
                  <Select>
                    <SelectTrigger id="level">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100">100 Level (Introductory)</SelectItem>
                      <SelectItem value="200">200 Level (Intermediate)</SelectItem>
                      <SelectItem value="300">300 Level (Advanced)</SelectItem>
                      <SelectItem value="400">400 Level (Specialized)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="course-description">Course Description</Label>
                <Textarea
                  id="course-description"
                  placeholder="Provide a detailed description of your course"
                  className="min-h-[120px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <div className="flex">
                    <Input id="start-date" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <div className="flex">
                    <Input id="end-date" type="date" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Course Image</Label>
                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Drag and drop an image, or click to browse</p>
                  <p className="text-xs text-muted-foreground">Recommended size: 1200 x 600 pixels</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Upload Image
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Schedule</CardTitle>
              <CardDescription>Set up the schedule for your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="credit-hours">Credit Hours</Label>
                  <Input id="credit-hours" type="number" min="1" max="6" placeholder="3" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sessions-per-week">Sessions Per Week</Label>
                  <Input id="sessions-per-week" type="number" min="1" max="7" placeholder="2" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Session Duration (minutes)</Label>
                  <Input id="duration" type="number" min="30" step="15" placeholder="90" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Class Schedule</Label>
                <div className="space-y-3">
                  <div className="flex items-center p-3 rounded-md bg-muted/50">
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Day" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monday">Monday</SelectItem>
                          <SelectItem value="tuesday">Tuesday</SelectItem>
                          <SelectItem value="wednesday">Wednesday</SelectItem>
                          <SelectItem value="thursday">Thursday</SelectItem>
                          <SelectItem value="friday">Friday</SelectItem>
                          <SelectItem value="saturday">Saturday</SelectItem>
                          <SelectItem value="sunday">Sunday</SelectItem>
                        </SelectContent>
                      </Select>

                      <Input type="time" placeholder="Start Time" />
                      <Input type="time" placeholder="End Time" />

                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Room" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="a101">A101</SelectItem>
                          <SelectItem value="b202">B202</SelectItem>
                          <SelectItem value="c303">C303</SelectItem>
                          <SelectItem value="lab1">Computer Lab 1</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-2">
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>

                  <Button variant="outline" size="sm" className="flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Another Session
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Modules</CardTitle>
              <CardDescription>Organize your course content into modules</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 rounded-md border">
                  <div className="flex justify-between items-center mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Input
                          value="Module 1: Introduction"
                          className="border-0 p-0 text-lg font-medium focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">Week 1</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center p-3 rounded-md bg-muted/50">
                      <div className="p-2 rounded-full bg-purple-900/20 mr-3">
                        <FileText className="h-5 w-5 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <Input
                          value="Course Syllabus"
                          className="border-0 p-0 font-medium focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        <p className="text-xs text-muted-foreground">PDF Document</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>

                    <div className="flex items-center p-3 rounded-md bg-muted/50">
                      <div className="p-2 rounded-full bg-purple-900/20 mr-3">
                        <Video className="h-5 w-5 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <Input
                          value="Introduction to the Course"
                          className="border-0 p-0 font-medium focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        <p className="text-xs text-muted-foreground">Video Lecture (45 min)</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>

                    <div className="flex justify-center">
                      <Button variant="outline" size="sm" className="w-full max-w-md">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Content
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-md border">
                  <div className="flex justify-between items-center mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Input
                          value="Module 2: Core Concepts"
                          className="border-0 p-0 text-lg font-medium focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">Week 2-3</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button variant="outline" size="sm" className="w-full max-w-md">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Content
                    </Button>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add New Module
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upload Materials</CardTitle>
              <CardDescription>Upload files for your course</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Drag and drop files, or click to browse</p>
                <p className="text-xs text-muted-foreground">Supported formats: PDF, DOCX, PPTX, MP4, JPG, PNG</p>
                <Button variant="outline" size="sm" className="mt-4">
                  Upload Files
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assessments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quizzes & Exams</CardTitle>
              <CardDescription>Create assessments for your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 rounded-md border">
                  <div className="flex justify-between items-center mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Input
                          value="Week 1 Quiz"
                          className="border-0 p-0 text-lg font-medium focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">10 questions • 15 minutes</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quiz1-date">Due Date</Label>
                      <Input id="quiz1-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quiz1-time">Due Time</Label>
                      <Input id="quiz1-time" type="time" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="quiz1-published" />
                      <Label htmlFor="quiz1-published">Published</Label>
                    </div>
                    <p className="text-sm text-muted-foreground">Weight: 5% of final grade</p>
                  </div>
                </div>

                <div className="p-4 rounded-md border">
                  <div className="flex justify-between items-center mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Input
                          value="Midterm Exam"
                          className="border-0 p-0 text-lg font-medium focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">30 questions • 90 minutes</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="midterm-date">Due Date</Label>
                      <Input id="midterm-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="midterm-time">Due Time</Label>
                      <Input id="midterm-time" type="time" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="midterm-published" />
                      <Label htmlFor="midterm-published">Published</Label>
                    </div>
                    <p className="text-sm text-muted-foreground">Weight: 30% of final grade</p>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add New Assessment
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assignments</CardTitle>
              <CardDescription>Create assignments for your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 rounded-md border">
                  <div className="flex justify-between items-center mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Input
                          value="Programming Assignment 1"
                          className="border-0 p-0 text-lg font-medium focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">Individual submission</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="assignment1-date">Due Date</Label>
                      <Input id="assignment1-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="assignment1-time">Due Time</Label>
                      <Input id="assignment1-time" type="time" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="assignment1-published" />
                      <Label htmlFor="assignment1-published">Published</Label>
                    </div>
                    <p className="text-sm text-muted-foreground">Weight: 15% of final grade</p>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add New Assignment
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Grading Scheme</CardTitle>
              <CardDescription>Define how students will be graded</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quizzes-weight">Quizzes</Label>
                    <div className="flex items-center">
                      <Input id="quizzes-weight" type="number" min="0" max="100" placeholder="15" />
                      <span className="ml-2">%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assignments-weight">Assignments</Label>
                    <div className="flex items-center">
                      <Input id="assignments-weight" type="number" min="0" max="100" placeholder="25" />
                      <span className="ml-2">%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="midterm-weight">Midterm Exam</Label>
                    <div className="flex items-center">
                      <Input id="midterm-weight" type="number" min="0" max="100" placeholder="30" />
                      <span className="ml-2">%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="final-weight">Final Exam</Label>
                    <div className="flex items-center">
                      <Input id="final-weight" type="number" min="0" max="100" placeholder="30" />
                      <span className="ml-2">%</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Grading Scale</Label>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="grade-a" className="text-sm">
                          A (90-100%)
                        </Label>
                        <Input id="grade-a" value="4.0" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="grade-b" className="text-sm">
                          B (80-89%)
                        </Label>
                        <Input id="grade-b" value="3.0" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="grade-c" className="text-sm">
                          C (70-79%)
                        </Label>
                        <Input id="grade-c" value="2.0" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="grade-d" className="text-sm">
                          D (60-69%)
                        </Label>
                        <Input id="grade-d" value="1.0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Settings</CardTitle>
              <CardDescription>Configure additional settings for your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Enrollment</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enrollment-limit">Enrollment Limit</Label>
                      <p className="text-sm text-muted-foreground">Maximum number of students allowed to enroll</p>
                    </div>
                    <Input id="enrollment-limit" type="number" min="1" className="w-20" placeholder="50" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enrollment-code">Enrollment Code</Label>
                      <p className="text-sm text-muted-foreground">Optional code required for enrollment</p>
                    </div>
                    <Input
                      id="enrollment-code"
                      className="w-40"
                      placeholder="Optional"
                      onChange={(e) => {
                        if (e.target.value) {
                          console.log("Enrollment code set:", e.target.value)
                        }
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-enroll">Auto-Enroll</Label>
                      <p className="text-sm text-muted-foreground">Automatically enroll students from the department</p>
                    </div>
                    <Switch id="auto-enroll" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Visibility</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="course-visible">Course Visibility</Label>
                      <p className="text-sm text-muted-foreground">Make the course visible to students</p>
                    </div>
                    <Switch id="course-visible" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="syllabus-visible">Syllabus Visibility</Label>
                      <p className="text-sm text-muted-foreground">
                        Make the syllabus visible to non-enrolled students
                      </p>
                    </div>
                    <Switch id="syllabus-visible" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="discussions-enabled">Enable Discussions</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow students to participate in course discussions
                      </p>
                    </div>
                    <Switch id="discussions-enabled" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="peer-review">Enable Peer Review</Label>
                      <p className="text-sm text-muted-foreground">Allow students to review each other's work</p>
                    </div>
                    <Switch id="peer-review" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="group-projects">Enable Group Projects</Label>
                      <p className="text-sm text-muted-foreground">Allow students to form groups for projects</p>
                    </div>
                    <Switch id="group-projects" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Teaching Assistants</CardTitle>
              <CardDescription>Assign teaching assistants to help manage your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center p-3 rounded-md bg-muted/50">
                  <div className="flex-1 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-900/20 flex items-center justify-center">
                      <span className="text-sm font-medium text-purple-400">JD</span>
                    </div>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">Graduate Assistant</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>

                <div className="flex items-center p-3 rounded-md bg-muted/50">
                  <div className="flex-1 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-900/20 flex items-center justify-center">
                      <span className="text-sm font-medium text-purple-400">SJ</span>
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">Research Assistant</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Teaching Assistant
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

