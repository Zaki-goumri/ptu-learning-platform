"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, Building, ArrowUpDown } from "lucide-react"
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for room assignments
const buildings = [
  {
    id: 1,
    name: "Science Building",
    floors: 4,
    totalRooms: 40,
    availableRooms: 12,
  },
  {
    id: 2,
    name: "Engineering Building",
    floors: 5,
    totalRooms: 50,
    availableRooms: 15,
  },
  {
    id: 3,
    name: "Liberal Arts Building",
    floors: 3,
    totalRooms: 30,
    availableRooms: 8,
  },
  {
    id: 4,
    name: "Business Building",
    floors: 4,
    totalRooms: 35,
    availableRooms: 10,
  },
  {
    id: 5,
    name: "Student Center",
    floors: 2,
    totalRooms: 20,
    availableRooms: 5,
  },
]

// Mock data for rooms
const rooms = [
  {
    id: 1,
    number: "101",
    building: "Science Building",
    type: "Classroom",
    capacity: 30,
    features: ["Projector", "Whiteboard", "Computer"],
    accessibility: true,
    availability: "Available",
    conflicts: 0,
  },
  {
    id: 2,
    number: "102",
    building: "Science Building",
    type: "Classroom",
    capacity: 25,
    features: ["Projector", "Whiteboard"],
    accessibility: true,
    availability: "Scheduled",
    conflicts: 1,
  },
  {
    id: 3,
    number: "103",
    building: "Science Building",
    type: "Lecture Hall",
    capacity: 100,
    features: ["Projector", "Audio System", "Computer", "Document Camera"],
    accessibility: true,
    availability: "Available",
    conflicts: 0,
  },
  {
    id: 4,
    number: "201",
    building: "Engineering Building",
    type: "Lab",
    capacity: 24,
    features: ["Specialized Equipment", "Computers", "Whiteboard"],
    accessibility: true,
    availability: "Scheduled",
    conflicts: 0,
  },
  {
    id: 5,
    number: "202",
    building: "Engineering Building",
    type: "Classroom",
    capacity: 35,
    features: ["Projector", "Whiteboard", "Computer"],
    accessibility: true,
    availability: "Maintenance",
    conflicts: 0,
  },
  {
    id: 6,
    number: "301",
    building: "Liberal Arts Building",
    type: "Seminar Room",
    capacity: 20,
    features: ["Projector", "Whiteboard", "Round Table"],
    accessibility: false,
    availability: "Available",
    conflicts: 0,
  },
  {
    id: 7,
    number: "302",
    building: "Liberal Arts Building",
    type: "Classroom",
    capacity: 40,
    features: ["Projector", "Whiteboard", "Computer"],
    accessibility: true,
    availability: "Scheduled",
    conflicts: 2,
  },
]

// Mock data for room schedule
const roomSchedule = [
  {
    id: 1,
    day: "Monday",
    time: "09:00 - 10:30",
    course: "CS101",
    instructor: "Dr. Smith",
    recurring: true,
  },
  {
    id: 2,
    day: "Monday",
    time: "11:00 - 12:30",
    course: "MATH250",
    instructor: "Dr. Johnson",
    recurring: true,
  },
  {
    id: 3,
    day: "Wednesday",
    time: "09:00 - 10:30",
    course: "CS101",
    instructor: "Dr. Smith",
    recurring: true,
  },
  {
    id: 4,
    day: "Wednesday",
    time: "11:00 - 12:30",
    course: "MATH250",
    instructor: "Dr. Johnson",
    recurring: true,
  },
  {
    id: 5,
    day: "Friday",
    time: "09:00 - 10:30",
    course: "CS101",
    instructor: "Dr. Smith",
    recurring: true,
  },
  {
    id: 6,
    day: "April 15, 2025",
    time: "13:00 - 15:00",
    course: "CS101 Midterm",
    instructor: "Dr. Smith",
    recurring: false,
  },
]

export default function RoomAssignmentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBuilding, setSelectedBuilding] = useState("")
  const [selectedRoomType, setSelectedRoomType] = useState("")
  const [isAddRoomOpen, setIsAddRoomOpen] = useState(false)
  const [isViewScheduleOpen, setIsViewScheduleOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState<any>(null)
  const [sortColumn, setSortColumn] = useState("number")
  const [sortDirection, setSortDirection] = useState("asc")

  // Filter rooms based on search query and filters
  const filteredRooms = rooms.filter(room => {
    const matchesSearch = 
      room.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.building.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.type.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesBuilding = selectedBuilding ? room.building === selectedBuilding : true
    const matchesType = selectedRoomType ? room.type === selectedRoomType : true
    
    return matchesSearch && matchesBuilding && matchesType
  })

  // Sort rooms
  const sortedRooms = [...filteredRooms].sort((a, b) => {
    let comparison = 0
    
    if (sortColumn === "number") {
      comparison = a.number.localeCompare(b.number, undefined, { numeric: true })
    } else if (sortColumn === "building") {
      comparison = a.building.localeCompare(b.building)
    } else if (sortColumn === "type") {
      comparison = a.type.localeCompare(b.type)
    } else if (sortColumn === "capacity") {
      comparison = a.capacity - b.capacity
    }
    
    return sortDirection === "asc" ? comparison : -comparison
  })

  // Handle sort
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  // View room schedule
  const handleViewSchedule = (room: any) => {
    setSelectedRoom(room)
    setIsViewScheduleOpen(true)
  }

  // Get badge color based on availability
  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case "Available":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Scheduled":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Maintenance":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Room Assignments</h1>
          <p className="text-muted-foreground">Manage classroom and facility assignments</p>
        </div>
        <Button onClick={() => setIsAddRoomOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Room
        </Button>
      </div>

      <Tabs defaultValue="rooms">
        <TabsList className="mb-4">
          <TabsTrigger value="buildings">Buildings</TabsTrigger>
          <TabsTrigger value="rooms">Rooms</TabsTrigger>
        </TabsList>

        <TabsContent value="buildings" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {buildings.map((building) => (
              <Card key={building.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    {building.name}
                  </CardTitle>
                  <CardDescription>{building.floors} floors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total Rooms:</span>
                      <span className="font-medium">{building.totalRooms}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Available Rooms:</span>
                      <span className="font-medium">{building.availableRooms}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 dark:bg-gray-700">
                      <div 
                        className="bg-purple-600 h-2.5 rounded-full" 
                        style={{ width: `${(building.availableRooms / building.totalRooms) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" onClick={() => setSelectedBuilding(building.name)}>
                      View Rooms
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="rooms" className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="relative w-full sm:w-auto flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search rooms..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedBuilding} onValueChange={setSelectedBuilding}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="All Buildings" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Buildings</SelectItem>
                {buildings.map((building) => (
                  <SelectItem key={building.id} value={building.name}>{building.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedRoomType} onValueChange={setSelectedRoomType}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="All Room Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Room Types</SelectItem>
                <SelectItem value="Classroom">Classroom</SelectItem>
                <SelectItem value="Lecture Hall">Lecture Hall</SelectItem>
                <SelectItem value="Lab">Lab</SelectItem>
                <SelectItem value="Seminar Room">Seminar Room</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => handleSort("number")}
                    >
                      <div className="flex items-center">
                        Room Number
                        {sortColumn === "number" && (
                          <ArrowUpDown className={`ml-1 h-4 w-4 ${sortDirection === "desc" ? "rotate-180" : ""}`} />
                        )}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => handleSort("building")}
                    >
                      <div className="flex items-center">
                        Building
                        {sortColumn === "building" && (
                          <ArrowUpDown className={`ml-1 h-4 w-4 ${sortDirection === "desc" ? "rotate-180" : ""}`} />
                        )}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => handleSort("type")}
                    >
                      <div className="flex items-center">
                        Type
                        {sortColumn === "type" && (
                          <ArrowUpDown className={`ml-1 h-4 w-4 ${sortDirection === "desc" ? "rotate-180" : ""}`} />
                        )}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => handleSort("capacity")}
                    >
                      <div className="flex items-center">
                        Capacity
                        {sortColumn === "capacity" && (
                          <ArrowUpDown className={`ml-1 h-4 w-4 ${sortDirection === "desc" ? "rotate-180" : ""}\`)} />
                        )}
                      </div>
                    </TableHead>
                    <TableHead>Availability</TableHead>
                    <TableHead>Features</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedRooms.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-6">
                        <div className="flex flex-col items-center justify-center">
                          <AlertCircle className="h-10 w-10 text-muted-foreground mb-2" />
                          <p className="text-lg font-medium">No rooms found</p>
                          <p className="text-sm text-muted-foreground">
                            Try adjusting your search or filters
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    sortedRooms.map((room) => (
                      <TableRow key={room.id} className={room.conflicts > 0 ? "bg-red-50 dark:bg-red-950/20" : ""}>
                        <TableCell className="font-medium">{room.number}</TableCell>
                        <TableCell>{room.building}</TableCell>
                        <TableCell>{room.type}</TableCell>
                        <TableCell>{room.capacity}</TableCell>
                        <TableCell>
                          <Badge className={getAvailabilityBadge(room.availability)}>
                            {room.availability}
                          </Badge>
                          {room.conflicts > 0 && (
                            <Badge variant="destructive" className="ml-2">
                              {room.conflicts} Conflicts
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {room.features.slice(0, 2).map((feature, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                            {room.features.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{room.features.length - 2} more
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => handleViewSchedule(room)}>
                              View Schedule
                            </Button>
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={isAddRoomOpen} onOpenChange={setIsAddRoomOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Add New Room</DialogTitle>
            <DialogDescription>
              Add a new room to the room inventory
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="room-number" className="text-right">
                Room Number
              </Label>
              <Input id="room-number" placeholder="e.g. 101" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="building" className="text-right">
                Building
              </Label>
              <Select className="col-span-3">
                <SelectTrigger id="building">
                  <SelectValue placeholder="Select building" />
                </SelectTrigger>
                <SelectContent>
                  {buildings.map((building) => (
                    <SelectItem key={building.id} value={building.name}>{building.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="room-type" className="text-right">
                Room Type
              </Label>
              <Select className="col-span-3">
                <SelectTrigger id="room-type">
                  <SelectValue placeholder="Select room type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Classroom">Classroom</SelectItem>
                  <SelectItem value="Lecture Hall">Lecture Hall</SelectItem>
                  <SelectItem value="Lab">Lab</SelectItem>
                  <SelectItem value="Seminar Room">Seminar Room</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="capacity" className="text-right">
                Capacity
              </Label>
              <Input id="capacity" type="number" placeholder="e.g. 30" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="features" className="text-right">
                Features
              </Label>
              <div className="col-span-3 space-y-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="projector" className="rounded" />
                  <Label htmlFor="projector">Projector</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="whiteboard" className="rounded" />
                  <Label htmlFor="whiteboard">Whiteboard</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="computer" className="rounded" />
                  <Label htmlFor="computer">Computer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="audio" className="rounded" />
                  <Label htmlFor="audio">Audio System</Label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="accessibility" className="text-right">
                Accessibility
              </Label>
              <div className="flex items-center space-x-2 col-span-3">
                <input type="checkbox" id="accessibility" className="rounded" />
                <Label htmlFor="accessibility">Wheelchair Accessible</Label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddRoomOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsAddRoomOpen(false)}>
              Add Room
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isViewScheduleOpen} onOpenChange={setIsViewScheduleOpen}>
        <DialogContent className="sm:max-w-[650px]">
          <DialogHeader>
            <DialogTitle>
              Room {selectedRoom?.number} Schedule - {selectedRoom?.building}
            </DialogTitle>
            <DialogDescription>
              View and manage room schedule and assignments
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{selectedRoom?.type}</Badge>
                  <span className="text-sm">Capacity: {selectedRoom?.capacity}</span>
                </div>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Schedule
                </Button>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Day/Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roomSchedule.map((schedule) => (
                    <TableRow key={schedule.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {schedule.day}
                          {schedule.recurring && (
                            <Badge variant="outline" className="text-xs">Recurring</Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{schedule.time}</TableCell>
                      <TableCell>{schedule.course}</TableCell>
                      <TableCell>{schedule.instructor}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                            Remove
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

