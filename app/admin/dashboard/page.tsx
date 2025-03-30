import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Users, BookOpen, GraduationCap, BarChart, ArrowUpRight, ArrowDownRight, Plus, Download } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your institution's platform</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-purple-700 hover:bg-purple-800">
            <Plus className="mr-2 h-4 w-4" />
            Add New User
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
              <span className="text-green-500 font-medium">12%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">86</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
              <span className="text-green-500 font-medium">4%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Departments</CardTitle>
            <GraduationCap className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <span>No change</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Platform Usage</CardTitle>
            <BarChart className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowDownRight className="h-3 w-3 mr-1 text-red-500" />
              <span className="text-red-500 font-medium">3%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users">
        <TabsList className="mb-4">
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="courses">Course Management</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Distribution</CardTitle>
              <CardDescription>Breakdown of users by role and department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span className="text-sm font-medium">Students</span>
                    </div>
                    <span className="text-sm font-medium">1,024 (82%)</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm font-medium">Teachers</span>
                    </div>
                    <span className="text-sm font-medium">156 (12.5%)</span>
                  </div>
                  <Progress value={12.5} className="h-2 bg-muted [&>div]:bg-blue-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium">Administrators</span>
                    </div>
                    <span className="text-sm font-medium">68 (5.5%)</span>
                  </div>
                  <Progress value={5.5} className="h-2 bg-muted [&>div]:bg-green-500" />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Top Departments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span className="text-sm">Computer Science</span>
                        <span className="text-sm font-medium">312</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-sm">Engineering</span>
                        <span className="text-sm font-medium">256</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-sm">Business</span>
                        <span className="text-sm font-medium">198</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-sm">Mathematics</span>
                        <span className="text-sm font-medium">145</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Recent Registrations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span className="text-sm">John Smith (Student)</span>
                        <span className="text-xs text-muted-foreground">2 hours ago</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-sm">Maria Garcia (Teacher)</span>
                        <span className="text-xs text-muted-foreground">Yesterday</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-sm">Ahmed Hassan (Student)</span>
                        <span className="text-xs text-muted-foreground">Yesterday</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-sm">Sarah Johnson (Student)</span>
                        <span className="text-xs text-muted-foreground">3 days ago</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 flex justify-end">
                <Link href="/admin/users">
                  <Button variant="outline">View All Users</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Statistics</CardTitle>
              <CardDescription>Overview of course enrollment and activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Most Popular Courses</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                          <span className="text-sm">Introduction to Computer Science</span>
                          <span className="text-sm font-medium">245</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-sm">Business Analytics</span>
                          <span className="text-sm font-medium">198</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-sm">Artificial Intelligence</span>
                          <span className="text-sm font-medium">176</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Completion Rates</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Average</span>
                            <span>68%</span>
                          </div>
                          <Progress value={68} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Computer Science</span>
                            <span>72%</span>
                          </div>
                          <Progress value={72} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Business</span>
                            <span>65%</span>
                          </div>
                          <Progress value={65} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Recently Added</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                          <span className="text-sm">Advanced Machine Learning</span>
                          <span className="text-xs text-muted-foreground">2 days ago</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-sm">Web Development with React</span>
                          <span className="text-xs text-muted-foreground">5 days ago</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-sm">Financial Accounting</span>
                          <span className="text-xs text-muted-foreground">1 week ago</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 flex justify-end">
                  <Link href="/admin/courses">
                    <Button variant="outline">Manage Courses</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Analytics</CardTitle>
              <CardDescription>Usage statistics and performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Daily Active Users</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[200px] flex items-center justify-center">
                      <p className="text-muted-foreground">Chart visualization would appear here</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Feature Usage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Course Viewing</span>
                            <span>92%</span>
                          </div>
                          <Progress value={92} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Quiz Participation</span>
                            <span>78%</span>
                          </div>
                          <Progress value={78} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Messaging</span>
                            <span>64%</span>
                          </div>
                          <Progress value={64} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Profile Updates</span>
                            <span>45%</span>
                          </div>
                          <Progress value={45} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">System Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Average Response Time</p>
                        <div className="flex items-center">
                          <span className="text-2xl font-bold">245</span>
                          <span className="text-sm text-muted-foreground ml-1">ms</span>
                        </div>
                        <p className="text-xs text-green-500 flex items-center">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          12% improvement
                        </p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium">Uptime</p>
                        <div className="flex items-center">
                          <span className="text-2xl font-bold">99.98</span>
                          <span className="text-sm text-muted-foreground ml-1">%</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Last 30 days</p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium">Error Rate</p>
                        <div className="flex items-center">
                          <span className="text-2xl font-bold">0.05</span>
                          <span className="text-sm text-muted-foreground ml-1">%</span>
                        </div>
                        <p className="text-xs text-green-500 flex items-center">
                          <ArrowDownRight className="h-3 w-3 mr-1" />
                          0.02% decrease
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 flex justify-end">
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export Analytics Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

