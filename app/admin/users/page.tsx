import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Download,
  UserPlus,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

export default function UsersPage() {
  // Mock users data
  const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.j@example.com",
      role: "student",
      department: "Computer Science",
      year: "3rd Year",
      status: "active",
      lastLogin: "2 hours ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.g@example.com",
      role: "student",
      department: "Engineering",
      year: "2nd Year",
      status: "active",
      lastLogin: "Yesterday",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Dr. Smith",
      email: "dr.smith@example.com",
      role: "teacher",
      department: "Computer Science",
      year: "Faculty",
      status: "active",
      lastLogin: "3 days ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "James Wilson",
      email: "james.w@example.com",
      role: "student",
      department: "Mathematics",
      year: "1st Year",
      status: "inactive",
      lastLogin: "2 weeks ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Prof. Johnson",
      email: "prof.johnson@example.com",
      role: "teacher",
      department: "Mathematics",
      year: "Faculty",
      status: "active",
      lastLogin: "1 day ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Sarah Ahmed",
      email: "sarah.a@example.com",
      role: "student",
      department: "Business",
      year: "4th Year",
      status: "pending",
      lastLogin: "Never",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      name: "Admin User",
      email: "admin@example.com",
      role: "admin",
      department: "Administration",
      year: "Staff",
      status: "active",
      lastLogin: "5 minutes ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-muted-foreground">Manage all users in the system</p>
        </div>
        <div className="flex gap-2">
          <Link href="/signup">
            <Button className="bg-purple-700 hover:bg-purple-800">
              <UserPlus className="mr-2 h-4 w-4" />
              Add User
            </Button>
          </Link>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input className="pl-8" placeholder="Search users..." />
        </div>

        <div className="w-full md:w-48">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="student">Students</SelectItem>
              <SelectItem value="teacher">Teachers</SelectItem>
              <SelectItem value="admin">Administrators</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-48">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="eng">Engineering</SelectItem>
              <SelectItem value="math">Mathematics</SelectItem>
              <SelectItem value="business">Business</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-48">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Users</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="teachers">Teachers</TabsTrigger>
          <TabsTrigger value="admins">Administrators</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Year/Group</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p>{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            user.role === "student"
                              ? "border-blue-400 text-blue-400"
                              : user.role === "teacher"
                                ? "border-purple-400 text-purple-400"
                                : "border-amber-400 text-amber-400"
                          }
                        >
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.department}</TableCell>
                      <TableCell>{user.year}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {user.status === "active" ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : user.status === "inactive" ? (
                            <XCircle className="h-4 w-4 text-red-500" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-amber-500" />
                          )}
                          <span
                            className={
                              user.status === "active"
                                ? "text-green-500"
                                : user.status === "inactive"
                                  ? "text-red-500"
                                  : "text-amber-500"
                            }
                          >
                            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Showing <strong>1-7</strong> of <strong>100</strong> users
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                3
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="students">
          <Card>
            <CardHeader>
              <CardTitle>Students</CardTitle>
              <CardDescription>Manage student accounts</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">User</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users
                    .filter((user) => user.role === "student")
                    .map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p>{user.name}</p>
                              <p className="text-xs text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{user.department}</TableCell>
                        <TableCell>{user.year}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {user.status === "active" ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : user.status === "inactive" ? (
                              <XCircle className="h-4 w-4 text-red-500" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-amber-500" />
                            )}
                            <span
                              className={
                                user.status === "active"
                                  ? "text-green-500"
                                  : user.status === "inactive"
                                    ? "text-red-500"
                                    : "text-amber-500"
                              }
                            >
                              {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teachers">
          <Card>
            <CardHeader>
              <CardTitle>Teachers</CardTitle>
              <CardDescription>Manage teacher accounts</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">User</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Courses</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users
                    .filter((user) => user.role === "teacher")
                    .map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p>{user.name}</p>
                              <p className="text-xs text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{user.department}</TableCell>
                        <TableCell>
                          <Badge>3 Courses</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {user.status === "active" ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : user.status === "inactive" ? (
                              <XCircle className="h-4 w-4 text-red-500" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-amber-500" />
                            )}
                            <span
                              className={
                                user.status === "active"
                                  ? "text-green-500"
                                  : user.status === "inactive"
                                    ? "text-red-500"
                                    : "text-amber-500"
                              }
                            >
                              {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="admins">
          <Card>
            <CardHeader>
              <CardTitle>Administrators</CardTitle>
              <CardDescription>Manage administrator accounts</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">User</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Permissions</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users
                    .filter((user) => user.role === "admin")
                    .map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p>{user.name}</p>
                              <p className="text-xs text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{user.department}</TableCell>
                        <TableCell>
                          <Badge className="border-amber-400 text-amber-400">Full Access</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {user.status === "active" ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : user.status === "inactive" ? (
                              <XCircle className="h-4 w-4 text-red-500" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-amber-500" />
                            )}
                            <span
                              className={
                                user.status === "active"
                                  ? "text-green-500"
                                  : user.status === "inactive"
                                    ? "text-red-500"
                                    : "text-amber-500"
                              }
                            >
                              {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

