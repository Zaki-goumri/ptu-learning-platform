"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Bell, Lock, Eye, Globe } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function SettingsPage() {
  // State for settings
  const [emailCourse, setEmailCourse] = useState(false)
  const [emailAssignment, setEmailAssignment] = useState(true)
  const [emailAnnouncement, setEmailAnnouncement] = useState(true)
  const [appMessage, setAppMessage] = useState(true)
  const [appGrade, setAppGrade] = useState(true)
  const [appAchievement, setAppAchievement] = useState(true)
  const [language, setLanguage] = useState("en")
  const [direction, setDirection] = useState("ltr")
  const [dateFormat, setDateFormat] = useState("mdy")
  const [timeFormat, setTimeFormat] = useState("12h")
  const [fontSize, setFontSize] = useState("medium")
  const [colorScheme, setColorScheme] = useState("purple")
  const [reducedMotion, setReducedMotion] = useState(false)
  const [highContrast, setHighContrast] = useState(false)

  const { theme, setTheme } = useTheme()
  const [darkMode, setDarkMode] = useState(false)

  // Load settings from cookies on initial render
  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop().split(";").shift()
    }

    // Load language settings
    const savedLanguage = getCookie("language")
    if (savedLanguage) setLanguage(savedLanguage)

    const savedDirection = getCookie("direction")
    if (savedDirection) setDirection(savedDirection)

    const savedDateFormat = getCookie("dateFormat")
    if (savedDateFormat) setDateFormat(savedDateFormat)

    const savedTimeFormat = getCookie("timeFormat")
    if (savedTimeFormat) setTimeFormat(savedTimeFormat)

    // Load appearance settings
    const savedTheme = getCookie("theme")
    if (savedTheme) {
      setDarkMode(savedTheme === "dark")
    } else {
      setDarkMode(theme === "dark")
    }

    const savedFontSize = getCookie("fontSize")
    if (savedFontSize) setFontSize(savedFontSize)

    const savedColorScheme = getCookie("colorScheme")
    if (savedColorScheme) setColorScheme(savedColorScheme)

    // Load notification settings
    const savedEmailCourse = getCookie("emailCourse")
    if (savedEmailCourse) setEmailCourse(savedEmailCourse === "true")

    const savedEmailAssignment = getCookie("emailAssignment")
    if (savedEmailAssignment) setEmailAssignment(savedEmailAssignment === "true")

    const savedEmailAnnouncement = getCookie("emailAnnouncement")
    if (savedEmailAnnouncement) setEmailAnnouncement(savedEmailAnnouncement === "true")

    const savedAppMessage = getCookie("appMessage")
    if (savedAppMessage) setAppMessage(savedAppMessage === "true")

    const savedAppGrade = getCookie("appGrade")
    if (savedAppGrade) setAppGrade(savedAppGrade === "true")

    const savedAppAchievement = getCookie("appAchievement")
    if (savedAppAchievement) setAppAchievement(savedAppAchievement === "true")
  }, [theme])

  // Save settings to cookies
  const saveSettings = () => {
    // Save language settings
    document.cookie = `language=${language}; path=/; max-age=31536000`
    document.cookie = `direction=${direction}; path=/; max-age=31536000`
    document.cookie = `dateFormat=${dateFormat}; path=/; max-age=31536000`
    document.cookie = `timeFormat=${timeFormat}; path=/; max-age=31536000`

    // Save appearance settings
    document.cookie = `theme=${darkMode ? "dark" : "light"}; path=/; max-age=31536000`
    document.cookie = `fontSize=${fontSize}; path=/; max-age=31536000`
    document.cookie = `colorScheme=${colorScheme}; path=/; max-age=31536000`

    // Save notification settings
    document.cookie = `emailCourse=${emailCourse}; path=/; max-age=31536000`
    document.cookie = `emailAssignment=${emailAssignment}; path=/; max-age=31536000`
    document.cookie = `emailAnnouncement=${emailAnnouncement}; path=/; max-age=31536000`
    document.cookie = `appMessage=${appMessage}; path=/; max-age=31536000`
    document.cookie = `appGrade=${appGrade}; path=/; max-age=31536000`
    document.cookie = `appAchievement=${appAchievement}; path=/; max-age=31536000`

    // Apply theme
    setTheme(darkMode ? "dark" : "light")

    // Apply language direction
    document.documentElement.dir = direction
    document.documentElement.lang = language

    // Show success message
    alert("Settings saved successfully!")
  }

  // Handle dark mode toggle
  const handleDarkModeChange = (checked) => {
    setDarkMode(checked)
  }

  // Simulate notification
  const simulateNotification = (type) => {
    alert(`${type} notification simulated!`)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Settings</h1>
        <Button className="bg-purple-700 hover:bg-purple-800" onClick={saveSettings}>
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="notifications">
        <TabsList className="mb-6">
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="account" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Account
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Appearance
          </TabsTrigger>
          <TabsTrigger value="language" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Language
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how you want to receive notifications</CardDescription>
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
                    <Switch id="email-course" checked={emailCourse} onCheckedChange={setEmailCourse} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-assignment">Assignment Reminders</Label>
                      <p className="text-sm text-muted-foreground">Get reminders about upcoming assignment deadlines</p>
                    </div>
                    <Switch id="email-assignment" checked={emailAssignment} onCheckedChange={setEmailAssignment} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-announcement">Announcements</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive important announcements from your department
                      </p>
                    </div>
                    <Switch
                      id="email-announcement"
                      checked={emailAnnouncement}
                      onCheckedChange={setEmailAnnouncement}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">In-App Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="app-message">New Messages</Label>
                      <p className="text-sm text-muted-foreground">Show notifications for new messages</p>
                    </div>
                    <Switch id="app-message" checked={appMessage} onCheckedChange={setAppMessage} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="app-grade">Grade Updates</Label>
                      <p className="text-sm text-muted-foreground">Get notified when new grades are posted</p>
                    </div>
                    <Switch id="app-grade" checked={appGrade} onCheckedChange={setAppGrade} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="app-achievement">Achievements</Label>
                      <p className="text-sm text-muted-foreground">
                        Show notifications when you earn badges or achievements
                      </p>
                    </div>
                    <Switch id="app-achievement" checked={appAchievement} onCheckedChange={setAppAchievement} />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Simulation (Demo)</h3>
                <p className="text-sm text-muted-foreground">
                  For demonstration purposes, you can trigger notifications to see how they appear
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" onClick={() => simulateNotification("Course Update")}>
                    Simulate Course Update
                  </Button>
                  <Button variant="outline" onClick={() => simulateNotification("New Message")}>
                    Simulate New Message
                  </Button>
                  <Button variant="outline" onClick={() => simulateNotification("Assignment Reminder")}>
                    Simulate Assignment Reminder
                  </Button>
                  <Button variant="outline" onClick={() => simulateNotification("Achievement")}>
                    Simulate Achievement
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account information and security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="full-name">Full Name</Label>
                    <Input id="full-name" defaultValue="Alex Johnson" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" defaultValue="alex.johnson@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-id">Student ID</Label>
                    <Input id="student-id" defaultValue="12345678" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Input id="department" defaultValue="Computer Science" disabled />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Password & Security</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>
                <Button variant="outline" className="mt-2">
                  Change Password
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch id="2fa" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize how the application looks and feels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Theme</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">Toggle between light and dark mode</p>
                  </div>
                  <Switch id="dark-mode" checked={darkMode} onCheckedChange={handleDarkModeChange} />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Display Settings</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="font-size">Font Size</Label>
                    <Select value={fontSize} onValueChange={setFontSize}>
                      <SelectTrigger id="font-size">
                        <SelectValue placeholder="Select font size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="color-scheme">Color Scheme</Label>
                    <Select value={colorScheme} onValueChange={setColorScheme}>
                      <SelectTrigger id="color-scheme">
                        <SelectValue placeholder="Select color scheme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="purple">Purple</SelectItem>
                        <SelectItem value="blue">Blue</SelectItem>
                        <SelectItem value="green">Green</SelectItem>
                        <SelectItem value="orange">Orange</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Accessibility</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="reduced-motion">Reduced Motion</Label>
                      <p className="text-sm text-muted-foreground">Minimize animations throughout the interface</p>
                    </div>
                    <Switch id="reduced-motion" checked={reducedMotion} onCheckedChange={setReducedMotion} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="high-contrast">High Contrast</Label>
                      <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
                    </div>
                    <Switch id="high-contrast" checked={highContrast} onCheckedChange={setHighContrast} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="language">
          <Card>
            <CardHeader>
              <CardTitle>Language Settings</CardTitle>
              <CardDescription>Choose your preferred language and region settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Interface Language</h3>
                <div className="space-y-2">
                  <Label htmlFor="language">Select Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="ar">العربية</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Text Direction</h3>
                <div className="space-y-2">
                  <Label htmlFor="direction">Text Direction</Label>
                  <Select value={direction} onValueChange={setDirection}>
                    <SelectTrigger id="direction">
                      <SelectValue placeholder="Select text direction" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ltr">Left to Right (LTR)</SelectItem>
                      <SelectItem value="rtl">Right to Left (RTL)</SelectItem>
                      <SelectItem value="auto">Auto (Based on language)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Date & Time Format</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="date-format">Date Format</Label>
                    <Select value={dateFormat} onValueChange={setDateFormat}>
                      <SelectTrigger id="date-format">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time-format">Time Format</Label>
                    <Select value={timeFormat} onValueChange={setTimeFormat}>
                      <SelectTrigger id="time-format">
                        <SelectValue placeholder="Select time format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                        <SelectItem value="24h">24-hour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

