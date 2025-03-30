import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MapPin, School, BookOpen, Coffee, ExternalLink, Info } from "lucide-react"
import Image from "next/image"

export default function CampusMapPage() {
  const buildings = [
    { id: 1, name: "Main Building", description: "Administrative offices and main lecture halls", type: "admin" },
    { id: 2, name: "Science Block", description: "Laboratories and research facilities", type: "academic" },
    { id: 3, name: "Library", description: "Main library and study spaces", type: "academic" },
    { id: 4, name: "Student Center", description: "Student services and cafeteria", type: "services" },
    { id: 5, name: "Sports Complex", description: "Gymnasium and sports facilities", type: "services" },
    { id: 6, name: "Computer Science Department", description: "CS labs and faculty offices", type: "academic" },
  ]

  const emergencyPoints = [
    { id: 1, location: "Main Building - North Exit", type: "exit" },
    { id: 2, location: "Science Block - Ground Floor", type: "exit" },
    { id: 3, location: "Library - Main Entrance", type: "exit" },
    { id: 4, location: "Student Center - East Side", type: "exit" },
    { id: 5, location: "Between Main Building and Library", type: "firstaid" },
    { id: 6, location: "Sports Complex - Entry Hall", type: "firstaid" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Campus Map</h1>

      <div className="relative overflow-hidden rounded-lg border bg-background min-h-[500px]">
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Campus Map"
          className="object-cover"
          width={1200}
          height={500}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="outline"
            className="bg-background border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-800"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View Interactive Map
          </Button>
        </div>
      </div>

      <Tabs defaultValue="buildings">
        <TabsList>
          <TabsTrigger value="buildings">Buildings</TabsTrigger>
          <TabsTrigger value="emergency">Emergency Information</TabsTrigger>
        </TabsList>

        <TabsContent value="buildings" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {buildings.map((building) => (
              <Card key={building.id}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-purple-900/20 mt-0.5">
                      {building.type === "admin" ? (
                        <School className="h-5 w-5 text-purple-400" />
                      ) : building.type === "academic" ? (
                        <BookOpen className="h-5 w-5 text-purple-400" />
                      ) : (
                        <Coffee className="h-5 w-5 text-purple-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{building.name}</h3>
                      <p className="text-sm text-muted-foreground">{building.description}</p>
                      <Button variant="link" className="p-0 h-auto mt-1 text-sm text-purple-400 hover:text-purple-300">
                        <MapPin className="h-3 w-3 mr-1" />
                        View on map
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="emergency" className="mt-6">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="h-5 w-5 mr-2 text-red-500" />
                Emergency Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Emergency Contact:</strong> Campus Security - 123-456-7890
                </p>
                <p>
                  <strong>Medical Services:</strong> Health Center - Building 4, Ground Floor
                </p>
                <p>
                  <strong>Operating Hours:</strong> 24/7 Emergency Services
                </p>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-xl font-bold mb-4">Emergency Exits & First Aid Stations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyPoints.map((point) => (
              <Card key={point.id} className={point.type === "firstaid" ? "border-red-500" : ""}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${point.type === "firstaid" ? "bg-red-100" : "bg-amber-100"}`}>
                      {point.type === "exit" ? (
                        <ExternalLink className="h-5 w-5 text-amber-600" />
                      ) : (
                        <Info className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium">{point.type === "exit" ? "Emergency Exit" : "First Aid Station"}</h4>
                      <p className="text-sm text-muted-foreground">{point.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

