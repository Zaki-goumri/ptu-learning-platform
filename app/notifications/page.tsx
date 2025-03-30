import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, BookOpen, Award, Calendar, MessageSquare, FileCheck } from "lucide-react"

export default function NotificationsPage() {
  // Mock notifications data
  const notifications = [
    {
      id: 1,
      title: "New course material available",
      message: "Database Systems: Module 3 has been published",
      time: "2 hours ago",
      type: "course",
      read: false,
    },
    {
      id: 2,
      title: "Quiz reminder",
      message: "Software Engineering quiz closes in 24 hours",
      time: "Yesterday",
      type: "quiz",
      read: false,
    },
    {
      id: 3,
      title: "You've earned a badge!",
      message: "Congratulations! You've earned the 'Quiz Master' badge",
      time: "3 days ago",
      type: "achievement",
      read: true,
    },
    {
      id: 4,
      title: "Department announcement",
      message: "Computer Science department meeting on Friday, 2PM",
      time: "4 days ago",
      type: "announcement",
      read: true,
    },
    {
      id: 5,
      title: "New message from Dr. Smith",
      message: "Please submit your assignment by Friday",
      time: "5 days ago",
      type: "message",
      read: true,
    },
    {
      id: 6,
      title: "Grade posted",
      message: "Your grade for 'Introduction to Computer Science' has been posted",
      time: "1 week ago",
      type: "grade",
      read: true,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <div className="flex gap-2">
          <Button variant="outline">Mark All as Read</Button>
          <Button variant="outline" className="text-red-500 hover:text-red-600">
            Clear All
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id} className={notification.read ? "" : "border-purple-500"}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className={`mt-1 p-2 rounded-full ${notification.read ? "bg-muted" : "bg-purple-900/20"}`}>
                    {notification.type === "course" ? (
                      <BookOpen
                        className={`h-5 w-5 ${notification.read ? "text-muted-foreground" : "text-purple-400"}`}
                      />
                    ) : notification.type === "quiz" ? (
                      <FileCheck
                        className={`h-5 w-5 ${notification.read ? "text-muted-foreground" : "text-purple-400"}`}
                      />
                    ) : notification.type === "achievement" ? (
                      <Award className={`h-5 w-5 ${notification.read ? "text-muted-foreground" : "text-purple-400"}`} />
                    ) : notification.type === "announcement" ? (
                      <Calendar
                        className={`h-5 w-5 ${notification.read ? "text-muted-foreground" : "text-purple-400"}`}
                      />
                    ) : notification.type === "message" ? (
                      <MessageSquare
                        className={`h-5 w-5 ${notification.read ? "text-muted-foreground" : "text-purple-400"}`}
                      />
                    ) : (
                      <Bell className={`h-5 w-5 ${notification.read ? "text-muted-foreground" : "text-purple-400"}`} />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{notification.title}</h4>
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="unread" className="space-y-4">
          {notifications
            .filter((n) => !n.read)
            .map((notification) => (
              <Card key={notification.id} className="border-purple-500">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="mt-1 p-2 rounded-full bg-purple-900/20">
                      {notification.type === "course" ? (
                        <BookOpen className="h-5 w-5 text-purple-400" />
                      ) : notification.type === "quiz" ? (
                        <FileCheck className="h-5 w-5 text-purple-400" />
                      ) : notification.type === "achievement" ? (
                        <Award className="h-5 w-5 text-purple-400" />
                      ) : notification.type === "announcement" ? (
                        <Calendar className="h-5 w-5 text-purple-400" />
                      ) : notification.type === "message" ? (
                        <MessageSquare className="h-5 w-5 text-purple-400" />
                      ) : (
                        <Bell className="h-5 w-5 text-purple-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{notification.title}</h4>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          {notifications.filter((n) => !n.read).length === 0 && (
            <div className="text-center py-12">
              <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium">No unread notifications</h3>
              <p className="text-muted-foreground">You're all caught up!</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          {notifications
            .filter((n) => n.type === "course" || n.type === "quiz")
            .map((notification) => (
              <Card key={notification.id} className={notification.read ? "" : "border-purple-500"}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className={`mt-1 p-2 rounded-full ${notification.read ? "bg-muted" : "bg-purple-900/20"}`}>
                      {notification.type === "course" ? (
                        <BookOpen
                          className={`h-5 w-5 ${notification.read ? "text-muted-foreground" : "text-purple-400"}`}
                        />
                      ) : (
                        <FileCheck
                          className={`h-5 w-5 ${notification.read ? "text-muted-foreground" : "text-purple-400"}`}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{notification.title}</h4>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          {notifications
            .filter((n) => n.type === "message")
            .map((notification) => (
              <Card key={notification.id} className={notification.read ? "" : "border-purple-500"}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className={`mt-1 p-2 rounded-full ${notification.read ? "bg-muted" : "bg-purple-900/20"}`}>
                      <MessageSquare
                        className={`h-5 w-5 ${notification.read ? "text-muted-foreground" : "text-purple-400"}`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{notification.title}</h4>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          {notifications.filter((n) => n.type === "message").length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium">No message notifications</h3>
              <p className="text-muted-foreground">You have no new messages</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-course">Course Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications when new course materials are available
                      </p>
                    </div>
                    <Switch id="email-course" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-assignment">Assignment Reminders</Label>
                      <p className="text-sm text-muted-foreground">Get reminders about upcoming assignment deadlines</p>
                    </div>
                    <Switch id="email-assignment" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-announcement">Announcements</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive important announcements from your department
                      </p>
                    </div>
                    <Switch id="email-announcement" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">In-App Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="app-message">New Messages</Label>
                      <p className="text-sm text-muted-foreground">Show notifications for new messages</p>
                    </div>
                    <Switch id="app-message" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="app-grade">Grade Updates</Label>
                      <p className="text-sm text-muted-foreground">Get notified when new grades are posted</p>
                    </div>
                    <Switch id="app-grade" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="app-achievement">Achievements</Label>
                      <p className="text-sm text-muted-foreground">
                        Show notifications when you earn badges or achievements
                      </p>
                    </div>
                    <Switch id="app-achievement" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-purple-700 hover:bg-purple-800">Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

