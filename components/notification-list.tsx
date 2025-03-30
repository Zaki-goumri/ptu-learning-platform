import { Card, CardContent } from "@/components/ui/card"
import { Bell, BookOpen, Award, Calendar } from "lucide-react"

export default function NotificationList() {
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
  ]

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <Card key={notification.id} className={notification.read ? "" : "border-purple-500"}>
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className={`mt-1 p-2 rounded-full ${notification.read ? "bg-muted" : "bg-purple-900/20"}`}>
                {notification.type === "course" ? (
                  <BookOpen className={`h-5 w-5 ${notification.read ? "text-muted-foreground" : "text-purple-400"}`} />
                ) : notification.type === "quiz" ? (
                  <Bell className={`h-5 w-5 ${notification.read ? "text-muted-foreground" : "text-purple-400"}`} />
                ) : notification.type === "achievement" ? (
                  <Award className={`h-5 w-5 ${notification.read ? "text-muted-foreground" : "text-purple-400"}`} />
                ) : (
                  <Calendar className={`h-5 w-5 ${notification.read ? "text-muted-foreground" : "text-purple-400"}`} />
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
    </div>
  )
}

