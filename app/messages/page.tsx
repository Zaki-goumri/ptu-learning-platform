import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Send, Paperclip, MoreVertical } from "lucide-react"

export default function MessagesPage() {
  // Mock conversation data
  const conversations = [
    {
      id: 1,
      name: "Dr. Smith",
      role: "Professor",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Please submit your assignment by Friday",
      time: "10:30 AM",
      unread: true,
    },
    {
      id: 2,
      name: "Jane Cooper",
      role: "Classmate",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Did you understand the lecture on algorithms?",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 3,
      name: "Prof. Johnson",
      role: "Professor",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Office hours are changed to 2-4 PM on Thursdays",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 4,
      name: "Study Group",
      role: "Group",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Let's meet at the library at 6 PM",
      time: "Monday",
      unread: false,
    },
  ]

  // Mock messages for the first conversation
  const messages = [
    {
      id: 1,
      sender: "Dr. Smith",
      content: "Hello! How is your project coming along?",
      time: "10:15 AM",
      isMe: false,
    },
    {
      id: 2,
      sender: "Me",
      content: "Hi Dr. Smith! I'm making good progress. Just finalizing the implementation section.",
      time: "10:20 AM",
      isMe: true,
    },
    {
      id: 3,
      sender: "Dr. Smith",
      content: "Great to hear! Remember that the deadline is this Friday. Please submit your assignment on time.",
      time: "10:25 AM",
      isMe: false,
    },
    {
      id: 4,
      sender: "Me",
      content: "I'll make sure to submit it by then. Thank you for the reminder!",
      time: "10:28 AM",
      isMe: true,
    },
    {
      id: 5,
      sender: "Dr. Smith",
      content: "Please submit your assignment by Friday",
      time: "10:30 AM",
      isMe: false,
    },
  ]

  return (
    <div className="h-[calc(100vh-8rem)]">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100%-4rem)]">
        {/* Conversations List */}
        <Card className="md:col-span-1 overflow-hidden flex flex-col">
          <CardHeader className="px-4 py-3 border-b">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Conversations</CardTitle>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative mt-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-8" />
            </div>
          </CardHeader>
          <CardContent className="p-0 overflow-auto flex-grow">
            <Tabs defaultValue="all" className="w-full">
              <div className="px-4 pt-3">
                <TabsList className="w-full">
                  <TabsTrigger value="all" className="flex-1">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="unread" className="flex-1">
                    Unread
                  </TabsTrigger>
                  <TabsTrigger value="groups" className="flex-1">
                    Groups
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="m-0">
                <div className="divide-y">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`flex items-center gap-3 p-4 hover:bg-muted/50 cursor-pointer ${
                        conversation.id === 1 ? "bg-purple-900/10" : ""
                      }`}
                    >
                      <Avatar>
                        <AvatarImage src={conversation.avatar} alt={conversation.name} />
                        <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-medium truncate">{conversation.name}</h4>
                          <span className="text-xs text-muted-foreground">{conversation.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread && <div className="w-2 h-2 rounded-full bg-purple-500"></div>}
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="unread" className="m-0">
                <div className="divide-y">
                  {conversations
                    .filter((c) => c.unread)
                    .map((conversation) => (
                      <div
                        key={conversation.id}
                        className="flex items-center gap-3 p-4 hover:bg-muted/50 cursor-pointer"
                      >
                        <Avatar>
                          <AvatarImage src={conversation.avatar} alt={conversation.name} />
                          <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-baseline">
                            <h4 className="font-medium truncate">{conversation.name}</h4>
                            <span className="text-xs text-muted-foreground">{conversation.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="groups" className="m-0">
                <div className="divide-y">
                  {conversations
                    .filter((c) => c.role === "Group")
                    .map((conversation) => (
                      <div
                        key={conversation.id}
                        className="flex items-center gap-3 p-4 hover:bg-muted/50 cursor-pointer"
                      >
                        <Avatar>
                          <AvatarImage src={conversation.avatar} alt={conversation.name} />
                          <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-baseline">
                            <h4 className="font-medium truncate">{conversation.name}</h4>
                            <span className="text-xs text-muted-foreground">{conversation.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                        </div>
                        {conversation.unread && <div className="w-2 h-2 rounded-full bg-purple-500"></div>}
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="md:col-span-2 overflow-hidden flex flex-col">
          <CardHeader className="px-6 py-4 border-b flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Smith" />
                  <AvatarFallback>DS</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Dr. Smith</CardTitle>
                  <p className="text-xs text-muted-foreground">Professor • Computer Science</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-6 overflow-auto flex-grow">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${message.isMe ? "bg-purple-700 text-white" : "bg-muted"}`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.isMe ? "text-purple-200" : "text-muted-foreground"}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          <div className="p-4 border-t flex gap-2">
            <Button variant="outline" size="icon">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Input placeholder="Type a message..." className="flex-grow" />
            <Button className="bg-purple-700 hover:bg-purple-800">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

