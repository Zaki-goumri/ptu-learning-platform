import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Upload, UserPlus } from "lucide-react"

export default function SignupPage() {
  return (
    <div className="container flex items-center justify-center py-8">
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Admin Registration Portal</CardTitle>
          <CardDescription>Create new accounts for students and staff</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="single">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="single">Single User</TabsTrigger>
              <TabsTrigger value="batch">Batch Import</TabsTrigger>
            </TabsList>

            <TabsContent value="single" className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">User Information</h3>
                <p className="text-sm text-muted-foreground">Enter the details for the new user account</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Enter last name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter phone number" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Account Settings</h3>
                  <p className="text-sm text-muted-foreground">Configure the user's role and permissions</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="user-id">User ID</Label>
                    <Input id="user-id" placeholder="Generate automatically or enter custom ID" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">User Role</Label>
                    <Select>
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="admin">Administrator</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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
                    <Label htmlFor="year">Year/Group</Label>
                    <Select>
                      <SelectTrigger id="year">
                        <SelectValue placeholder="Select year or group" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">First Year</SelectItem>
                        <SelectItem value="2">Second Year</SelectItem>
                        <SelectItem value="3">Third Year</SelectItem>
                        <SelectItem value="4">Fourth Year</SelectItem>
                        <SelectItem value="faculty">Faculty</SelectItem>
                        <SelectItem value="staff">Staff</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Initial Access</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="generate-password" />
                    <label
                      htmlFor="generate-password"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Generate temporary password
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="send-email" defaultChecked />
                    <label
                      htmlFor="send-email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Send welcome email with login instructions
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Course Enrollment</h3>
                  <p className="text-sm text-muted-foreground">Assign courses to the user (optional)</p>
                </div>

                <div className="space-y-2">
                  <Label>Available Courses</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="course-1" />
                      <label
                        htmlFor="course-1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Introduction to Computer Science
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="course-2" />
                      <label
                        htmlFor="course-2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Advanced Mathematics
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="course-3" />
                      <label
                        htmlFor="course-3"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Database Systems
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="course-4" />
                      <label
                        htmlFor="course-4"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Software Engineering
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="batch" className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Batch User Import</h3>
                <p className="text-sm text-muted-foreground">
                  Upload a CSV file with user information to create multiple accounts at once
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Drag and drop a CSV file, or click to browse</p>
                  <p className="text-xs text-muted-foreground">Maximum file size: 10MB</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Upload CSV
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">CSV Template</h4>
                    <Button variant="link" size="sm" className="h-auto p-0">
                      Download Template
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Your CSV file should include the following columns: First Name, Last Name, Email, Role, Department,
                    Year/Group
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Import Options</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="batch-generate-password" defaultChecked />
                      <label
                        htmlFor="batch-generate-password"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Generate temporary passwords for all users
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="batch-send-email" defaultChecked />
                      <label
                        htmlFor="batch-send-email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Send welcome emails with login instructions
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="batch-skip-duplicates" defaultChecked />
                      <label
                        htmlFor="batch-skip-duplicates"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Skip duplicate entries
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
          <Button variant="outline">Cancel</Button>
          <div className="flex gap-2">
            <Button variant="outline">
              <UserPlus className="mr-2 h-4 w-4" />
              Create & Add Another
            </Button>
            <Button className="bg-purple-700 hover:bg-purple-800">
              <UserPlus className="mr-2 h-4 w-4" />
              Create User
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

