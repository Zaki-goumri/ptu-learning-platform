"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Trash2, Save, Eye, CheckCircle2 } from "lucide-react"

export default function CreateQuizPage() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Create Quiz</h1>
          <p className="text-muted-foreground">Design a new assessment for your students</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => alert("Quiz draft saved!")}>
            <Save className="mr-2 h-4 w-4" />
            Save Draft
          </Button>
          <Button variant="outline" onClick={() => alert("Quiz preview opened in new tab")}>
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button
            className="bg-purple-700 hover:bg-purple-800"
            onClick={() => alert("Quiz published successfully! Students can now access it.")}
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Publish Quiz
          </Button>
        </div>
      </div>

      <Tabs defaultValue="details">
        <TabsList className="mb-4">
          <TabsTrigger value="details">Quiz Details</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Quiz Details Tab */}
        <TabsContent value="details" className="space-y-4">
          {/* Basic Information Card */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Enter the basic details about your quiz</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quiz-title">Quiz Title</Label>
                <Input id="quiz-title" placeholder="e.g. Week 1 Quiz: Introduction to Computer Science" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="course">Course</Label>
                  <Select defaultValue="cs101">
                    <SelectTrigger id="course">
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs101">Introduction to Computer Science (CS101)</SelectItem>
                      <SelectItem value="cs201">Advanced Algorithms (CS201)</SelectItem>
                      <SelectItem value="cs301">Database Systems (CS301)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quiz-type">Quiz Type</Label>
                  <Select>
                    <SelectTrigger id="quiz-type">
                      <SelectValue placeholder="Select quiz type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="practice">Practice Quiz (Unlimited attempts)</SelectItem>
                      <SelectItem value="graded">Graded Quiz (Limited attempts)</SelectItem>
                      <SelectItem value="exam">Exam (Single attempt)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quiz-description">Description</Label>
                <Textarea
                  id="quiz-description"
                  placeholder="Provide a description of what this quiz covers"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quiz-instructions">Instructions</Label>
                <Textarea
                  id="quiz-instructions"
                  placeholder="Provide instructions for students taking this quiz"
                  className="min-h-[100px]"
                  defaultValue="Please answer all questions. You can navigate between questions using the previous and next buttons."
                />
              </div>
            </CardContent>
          </Card>

          {/* Scheduling Card */}
          <Card>
            <CardHeader>
              <CardTitle>Scheduling</CardTitle>
              <CardDescription>Set when the quiz will be available to students</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="available-from">Available From</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="available-from" type="date" />
                    <Input type="time" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="available-until">Available Until</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="available-until" type="date" />
                    <Input type="time" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time-limit">Time Limit</Label>
                  <div className="flex items-center gap-2">
                    <Input id="time-limit" type="number" min="1" placeholder="15" />
                    <span>minutes</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attempts">Allowed Attempts</Label>
                  <Select>
                    <SelectTrigger id="attempts">
                      <SelectValue placeholder="Select number of attempts" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 attempt</SelectItem>
                      <SelectItem value="2">2 attempts</SelectItem>
                      <SelectItem value="3">3 attempts</SelectItem>
                      <SelectItem value="unlimited">Unlimited attempts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="publish-immediately" />
                <Label htmlFor="publish-immediately">Publish immediately</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Questions Tab */}
        <TabsContent value="questions" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Quiz Questions</CardTitle>
                  <CardDescription>Add and manage questions for your quiz</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Add question" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                      <SelectItem value="multiple-select">Multiple Select</SelectItem>
                      <SelectItem value="true-false">True/False</SelectItem>
                      <SelectItem value="short-answer">Short Answer</SelectItem>
                      <SelectItem value="essay">Essay</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Add from Question Bank
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Question 1: Multiple Choice - Fixed */}
              <div className="p-4 border rounded-md space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-purple-700">Question 1</Badge>
                      <Badge variant="outline">Multiple Choice</Badge>
                      <Badge variant="outline">1 point</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="q1-text">Question Text</Label>
                  <Textarea id="q1-text" defaultValue="What does CPU stand for?" />
                </div>

                <div className="space-y-2">
                  <Label>Answer Options</Label>
                  <div className="space-y-2">
                    <RadioGroup defaultValue="0">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="0" id="q1-option-0" />
                          <Input defaultValue="Central Processing Unit" className="flex-1" />
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="1" id="q1-option-1" />
                          <Input defaultValue="Computer Personal Unit" className="flex-1" />
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="2" id="q1-option-2" />
                          <Input defaultValue="Central Processor Utility" className="flex-1" />
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="3" id="q1-option-3" />
                          <Input defaultValue="Central Program Unit" className="flex-1" />
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </RadioGroup>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Option
                    </Button>
                  </div>
                </div>
              </div>

              {/* Question 2: True/False */}
              <div className="p-4 border rounded-md space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-purple-700">Question 2</Badge>
                      <Badge variant="outline">True/False</Badge>
                      <Badge variant="outline">1 point</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="q2-text">Question Text</Label>
                  <Textarea id="q2-text" defaultValue="RAM stands for Random Access Memory." />
                </div>

                <div className="space-y-2">
                  <Label>Correct Answer</Label>
                  <RadioGroup defaultValue="true">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="true" id="q2-true" />
                      <Label htmlFor="q2-true">True</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="false" id="q2-false" />
                      <Label htmlFor="q2-false">False</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Other questions remain the same */}
              {/* ... (rest of the question components) ... */}

              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add New Question
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quiz Settings</CardTitle>
              <CardDescription>Configure how the quiz behaves and is graded</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Settings content remains the same */}
              {/* ... (settings content) ... */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

