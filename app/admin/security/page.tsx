import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Lock, Key, UserCheck, AlertTriangle, RefreshCw, Eye, EyeOff, Clock, Download } from "lucide-react"

export default function SecurityPage() {
  // Mock security logs
  const securityLogs = [
    {
      id: 1,
      event: "Failed Login Attempt",
      user: "john.smith",
      ip: "192.168.1.105",
      timestamp: "Today, 10:23 AM",
      severity: "high",
    },
    {
      id: 2,
      event: "Password Changed",
      user: "maria.garcia",
      ip: "192.168.1.42",
      timestamp: "Today, 9:15 AM",
      severity: "low",
    },
    {
      id: 3,
      event: "Admin Access",
      user: "admin.user",
      ip: "192.168.1.1",
      timestamp: "Yesterday, 4:30 PM",
      severity: "medium",
    },
    {
      id: 4,
      event: "User Account Locked",
      user: "james.wilson",
      ip: "192.168.1.78",
      timestamp: "Yesterday, 2:45 PM",
      severity: "medium",
    },
    {
      id: 5,
      event: "Multiple Failed Logins",
      user: "sarah.johnson",
      ip: "192.168.1.90",
      timestamp: "2 days ago",
      severity: "high",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Security Settings</h1>
          <p className="text-muted-foreground">Manage platform security and access controls</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Security Logs
          </Button>
          <Button className="bg-purple-700 hover:bg-purple-800">
            <ShieldCheck className="mr-2 h-4 w-4" />
            Security Audit
          </Button>
        </div>
      </div>

      <Tabs defaultValue="settings">
        <TabsList className="mb-4">
          <TabsTrigger value="settings">Security Settings</TabsTrigger>
          <TabsTrigger value="logs">Security Logs</TabsTrigger>
          <TabsTrigger value="access">Access Control</TabsTrigger>
        </TabsList>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Authentication Settings</CardTitle>
              <CardDescription>Configure how users authenticate to the platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center">
                    <Lock className="mr-2 h-4 w-4 text-purple-500" />
                    <Label htmlFor="mfa">Multi-Factor Authentication (MFA)</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">Require two-factor authentication for all users</p>
                </div>
                <Switch id="mfa" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center">
                    <Key className="mr-2 h-4 w-4 text-purple-500" />
                    <Label htmlFor="password-policy">Strong Password Policy</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">Enforce complex passwords with special characters</p>
                </div>
                <Switch id="password-policy" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center">
                    <UserCheck className="mr-2 h-4 w-4 text-purple-500" />
                    <Label htmlFor="account-lockout">Account Lockout</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">Lock accounts after multiple failed login attempts</p>
                </div>
                <Switch id="account-lockout" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-purple-500" />
                    <Label htmlFor="session-timeout">Session Timeout</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">Automatically log out inactive users</p>
                </div>
                <Switch id="session-timeout" defaultChecked />
              </div>

              <div className="pt-4 border-t">
                <div className="space-y-2">
                  <Label htmlFor="max-attempts">Maximum Login Attempts</Label>
                  <Input id="max-attempts" type="number" defaultValue="5" className="w-full md:w-64" />
                  <p className="text-sm text-muted-foreground">Number of failed attempts before account lockout</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password-expiry">Password Expiry (days)</Label>
                <Input id="password-expiry" type="number" defaultValue="90" className="w-full md:w-64" />
                <p className="text-sm text-muted-foreground">Days before users are required to change passwords</p>
              </div>

              <div className="flex justify-end">
                <Button className="bg-purple-700 hover:bg-purple-800">Save Settings</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Protection</CardTitle>
              <CardDescription>Configure data security and encryption settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center">
                    <Eye className="mr-2 h-4 w-4 text-purple-500" />
                    <Label htmlFor="data-encryption">Data Encryption</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">Encrypt all sensitive data stored in the platform</p>
                </div>
                <Switch id="data-encryption" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center">
                    <EyeOff className="mr-2 h-4 w-4 text-purple-500" />
                    <Label htmlFor="anonymize-data">Anonymize Student Data</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">Hide personal identifiers in reports and analytics</p>
                </div>
                <Switch id="anonymize-data" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center">
                    <AlertTriangle className="mr-2 h-4 w-4 text-purple-500" />
                    <Label htmlFor="breach-detection">Breach Detection</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Monitor for unusual access patterns and potential breaches
                  </p>
                </div>
                <Switch id="breach-detection" defaultChecked />
              </div>

              <div className="flex justify-end">
                <Button className="bg-purple-700 hover:bg-purple-800">Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs">
          <Card>
            <CardHeader>
              <CardTitle>Security Logs</CardTitle>
              <CardDescription>Recent security events and alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>IP Address</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Severity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {securityLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-medium">{log.event}</TableCell>
                      <TableCell>{log.user}</TableCell>
                      <TableCell>{log.ip}</TableCell>
                      <TableCell>{log.timestamp}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            log.severity === "high"
                              ? "border-red-500 text-red-500"
                              : log.severity === "medium"
                                ? "border-amber-500 text-amber-500"
                                : "border-green-500 text-green-500"
                          }
                        >
                          {log.severity}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 flex justify-end">
                <Button variant="outline">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh Logs
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="access">
          <Card>
            <CardHeader>
              <CardTitle>Role-Based Access Control</CardTitle>
              <CardDescription>Configure permissions for different user roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Administrator Access</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-users">User Management</Label>
                      <Switch id="admin-users" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-courses">Course Management</Label>
                      <Switch id="admin-courses" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-departments">Department Management</Label>
                      <Switch id="admin-courses" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-security">Security Settings</Label>
                      <Switch id="admin-security" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Teacher Access</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="teacher-courses">Create Courses</Label>
                      <Switch id="teacher-courses" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="teacher-grades">Manage Grades</Label>
                      <Switch id="teacher-grades" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="teacher-students">View Student Data</Label>
                      <Switch id="teacher-students" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="teacher-analytics">Access Analytics</Label>
                      <Switch id="teacher-analytics" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Student Access</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="student-courses">View Courses</Label>
                      <Switch id="student-courses" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="student-grades">View Own Grades</Label>
                      <Switch id="student-grades" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="student-messages">Message Teachers</Label>
                      <Switch id="student-messages" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="student-forums">Participate in Forums</Label>
                      <Switch id="student-forums" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <Button className="bg-purple-700 hover:bg-purple-800">Save Permissions</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

