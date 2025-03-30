import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Star, Clock, BookOpen, FileCheck, Users, Share2 } from "lucide-react"

export default function AchievementsPage() {
  // Mock achievements data
  const earnedAchievements = [
    {
      id: 1,
      name: "Fast Learner",
      description: "Completed 5 courses in 30 days",
      icon: <Clock className="h-6 w-6" />,
      date: "October 15, 2023",
      rarity: "common",
      points: 50,
    },
    {
      id: 2,
      name: "Quiz Master",
      description: "Achieved 100% in 10 quizzes",
      icon: <Star className="h-6 w-6" />,
      date: "November 2, 2023",
      rarity: "rare",
      points: 100,
    },
    {
      id: 3,
      name: "Perfect Attendance",
      description: "Never missed a lecture",
      icon: <BookOpen className="h-6 w-6" />,
      date: "September 30, 2023",
      rarity: "uncommon",
      points: 75,
    },
  ]

  const inProgressAchievements = [
    {
      id: 4,
      name: "Course Collector",
      description: "Complete 10 courses",
      icon: <Trophy className="h-6 w-6" />,
      progress: 60,
      rarity: "rare",
      points: 100,
    },
    {
      id: 5,
      name: "Assignment Ace",
      description: "Submit 20 assignments on time",
      icon: <FileCheck className="h-6 w-6" />,
      progress: 75,
      rarity: "uncommon",
      points: 75,
    },
    {
      id: 6,
      name: "Social Scholar",
      description: "Participate in 15 course discussions",
      icon: <Users className="h-6 w-6" />,
      progress: 40,
      rarity: "common",
      points: 50,
    },
  ]

  const lockedAchievements = [
    {
      id: 7,
      name: "Academic Excellence",
      description: "Maintain an A average for a full semester",
      icon: <Award className="h-6 w-6" />,
      rarity: "legendary",
      points: 200,
    },
    {
      id: 8,
      name: "Research Pioneer",
      description: "Complete a research project with a professor",
      icon: <BookOpen className="h-6 w-6" />,
      rarity: "epic",
      points: 150,
    },
  ]

  // Helper function to get badge color based on rarity
  const getBadgeColor = (rarity) => {
    switch (rarity) {
      case "common":
        return "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200"
      case "uncommon":
        return "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "rare":
        return "bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "epic":
        return "bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "legendary":
        return "bg-amber-200 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
      default:
        return "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Achievements</h1>
          <p className="text-muted-foreground">Track your progress and earn rewards</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground">Total Points</p>
            <p className="text-2xl font-bold">225</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground">Rank</p>
            <p className="text-2xl font-bold">Silver</p>
          </div>
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Achievement Progress</CardTitle>
          <CardDescription>Your journey towards mastery</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-purple-400" />
                  <span className="font-medium">Overall Progress</span>
                </div>
                <span>3/10 Achievements</span>
              </div>
              <Progress value={30} className="h-2" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                  <span className="text-sm">Common</span>
                </div>
                <Progress value={50} className="h-2 bg-muted [&>div]:bg-slate-400" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Uncommon</span>
                </div>
                <Progress value={33} className="h-2 bg-muted [&>div]:bg-green-500" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm">Rare</span>
                </div>
                <Progress value={25} className="h-2 bg-muted [&>div]:bg-blue-500" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <span className="text-sm">Legendary</span>
                </div>
                <Progress value={0} className="h-2 bg-muted [&>div]:bg-amber-500" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="earned">
        <TabsList className="mb-4">
          <TabsTrigger value="earned">Earned</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="locked">Locked</TabsTrigger>
        </TabsList>

        <TabsContent value="earned" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {earnedAchievements.map((achievement) => (
              <Card key={achievement.id} className="overflow-hidden">
                <div className="bg-gradient-to-r from-purple-900/20 to-purple-700/20 p-6 flex justify-center">
                  <div className="bg-purple-900/20 p-4 rounded-full">{achievement.icon}</div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{achievement.name}</CardTitle>
                    <Badge className={getBadgeColor(achievement.rarity)}>
                      {achievement.rarity.charAt(0).toUpperCase() + achievement.rarity.slice(1)}
                    </Badge>
                  </div>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Earned on {achievement.date}</span>
                    <span className="font-medium">+{achievement.points} pts</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {inProgressAchievements.map((achievement) => (
              <Card key={achievement.id} className="overflow-hidden">
                <div className="bg-gradient-to-r from-slate-900/20 to-slate-700/20 p-6 flex justify-center">
                  <div className="bg-slate-900/20 p-4 rounded-full">{achievement.icon}</div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{achievement.name}</CardTitle>
                    <Badge className={getBadgeColor(achievement.rarity)}>
                      {achievement.rarity.charAt(0).toUpperCase() + achievement.rarity.slice(1)}
                    </Badge>
                  </div>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span>{achievement.progress}%</span>
                    </div>
                    <Progress value={achievement.progress} />
                  </div>
                  <div className="flex justify-end items-center text-sm">
                    <span className="font-medium">{achievement.points} pts</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="locked" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lockedAchievements.map((achievement) => (
              <Card key={achievement.id} className="overflow-hidden opacity-75">
                <div className="bg-gradient-to-r from-gray-900/20 to-gray-700/20 p-6 flex justify-center">
                  <div className="bg-gray-900/20 p-4 rounded-full">{achievement.icon}</div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{achievement.name}</CardTitle>
                    <Badge className={getBadgeColor(achievement.rarity)}>
                      {achievement.rarity.charAt(0).toUpperCase() + achievement.rarity.slice(1)}
                    </Badge>
                  </div>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-end items-center text-sm">
                    <span className="font-medium">{achievement.points} pts</span>
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

