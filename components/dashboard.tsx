"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BarChart3, ClipboardList, FileText, Home, LogOut, Moon, Search, Settings, Sun, User } from "lucide-react"
import { signOut, useSession } from "next-auth/react";




export  function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const {data : session}= useSession()
  

  
  useEffect(() => {

    const fetchSession = async () => {
      
    }
    fetchSession()


    const isDark = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }
  
  const handleLogout = () => {
    signOut({ callbackUrl: '/signin' });  // Redirect to the homepage after logout
  }

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Left Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-cyan-700 to-cyan-900 dark:from-gray-800 dark:to-gray-900 text-white shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold">PermitFlow</h1>
        </div>
        <nav className="mt-4">
          <a href="#" className="flex items-center px-4 py-2 bg-cyan-600 dark:bg-gray-700">
            <Home className="mr-3 h-5 w-5" />
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-2 hover:bg-cyan-600 dark:hover:bg-gray-700 transition-colors duration-200">
            <FileText className="mr-3 h-5 w-5" />
            New Application
          </a>
          <a href="#" className="flex items-center px-4 py-2 hover:bg-cyan-600 dark:hover:bg-gray-700 transition-colors duration-200">
            <ClipboardList className="mr-3 h-5 w-5" />
            My Applications
          </a>
          <a href="#" className="flex items-center px-4 py-2 hover:bg-cyan-600 dark:hover:bg-gray-700 transition-colors duration-200">
            <BarChart3 className="mr-3 h-5 w-5" />
            Reports
          </a>
        </nav>
        <div className="absolute bottom-0 w-64 p-4 border-t border-cyan-600 dark:border-gray-700">
          <a href="#" className="flex items-center px-4 py-2 hover:bg-cyan-600 dark:hover:bg-gray-700 transition-colors duration-200">
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-100 dark:bg-gray-900">
        {/* Top Navigation */}
        <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
          <h2 className="text-xl font-semibold text-cyan-800 dark:text-cyan-200">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-gray-700"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full text-teal-300 text-lg ">
                  <Avatar className="h-8 w-8 text-radium">
                    {/* <AvatarImage src="/placeholder.svg" alt="User avatar" /> */}
                    <AvatarFallback >{session?.user.username.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{session?.user.name || session?.user.username}</p>
                    <p className="text-xs leading-none text-muted-foreground">{session?.user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                 
                <DropdownMenuItem onClick={handleLogout}>
                 
                  <LogOut  className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                 
                </DropdownMenuItem>
                
              </DropdownMenuContent>
            </DropdownMenu>
            
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6">
        <div className="mb-6">
            <h1 className="text-3xl font-bold text-cyan-800 dark:text-cyan-200">Welcome back, {session?.user.name || session?.user.username}!</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Here&apos;s what&apos;s happening with your permit applications today.</p>
          </div>
         
         {/* Data*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card className="bg-gradient-to-br from-cyan-50 to-white dark:from-gray-800 dark:to-gray-700 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-cyan-800 dark:text-cyan-200">Total Applications</CardTitle>
                <FileText className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-cyan-900 dark:text-white">128</div>
                <p className="text-xs text-cyan-600 dark:text-cyan-400">+10% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-cyan-50 to-white dark:from-gray-800 dark:to-gray-700 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-cyan-800 dark:text-cyan-200">Pending Review</CardTitle>
                <ClipboardList className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-cyan-900 dark:text-white">12</div>
                <p className="text-xs text-cyan-600 dark:text-cyan-400">3 urgent</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-cyan-50 to-white dark:from-gray-800 dark:to-gray-700 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-cyan-800 dark:text-cyan-200">Approved</CardTitle>
                <BarChart3 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-cyan-900 dark:text-white">72</div>
                <p className="text-xs text-cyan-600 dark:text-cyan-400">+18% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-cyan-50 to-white dark:from-gray-800 dark:to-gray-700 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-cyan-800 dark:text-cyan-200">Average Processing Time</CardTitle>
                <Settings className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-cyan-900 dark:text-white">14 days</div>
                <p className="text-xs text-cyan-600 dark:text-cyan-400">-2 days from last month</p>
              </CardContent>
            </Card>
          </div>



              {/* AI-Powered Document Analysis & Recommendations */}
          <Card className="mb-6 bg-white dark:bg-gray-800 shadow-md">
            <CardHeader>
              <CardTitle className="text-cyan-800 dark:text-cyan-200">AI Document Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-cyan-800 dark:text-cyan-200">Building Plans</span>
                  <Badge variant="outline" className="bg-green-100 text-green-800">Complete</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-cyan-800 dark:text-cyan-200">Environmental Impact Report</span>
                  <Badge variant="outline" className="bg-red-100 text-red-800">Missing</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-cyan-800 dark:text-cyan-200">Zoning Compliance Form</span>
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Incomplete</Badge>
                </div>
              </div>
              <Button className="mt-4 w-full">View AI Recommendations</Button>
            </CardContent>
          </Card>



              {/*recent Applications*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardHeader>
                <CardTitle className="text-cyan-800 dark:text-cyan-200">Recent Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: 'APP001', type: 'Residential', status: 'Pending' },
                    { id: 'APP002', type: 'Commercial', status: 'Approved' },
                    { id: 'APP003', type: 'Industrial', status: 'Under Review' },
                  ].map((app) => (
                    <div key={app.id} className="flex items-center">
                      <Avatar className="h-9 w-9 bg-cyan-100 dark:bg-cyan-800">
                        <AvatarFallback className="text-cyan-700 dark:text-cyan-200">{app.id.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none text-cyan-800 dark:text-cyan-200">{app.id}</p>
                        <p className="text-sm text-cyan-600 dark:text-cyan-400">{app.type}</p>
                      </div>
                      <div className={`ml-auto font-medium ${
                        app.status === 'Approved' ? 'text-green-500' :
                        app.status === 'Pending' ? 'text-yellow-500' : 'text-blue-500'
                      }`}>
                        {app.status}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardHeader>
                <CardTitle className="text-cyan-800 dark:text-cyan-200">Upcoming Inspections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: 'INS001', address: '123 Main St', date: '2023-06-15' },
                    { id: 'INS002', address: '456 Elm St', date: '2023-06-16' },
                    { id: 'INS003', address: '789 Oak St', date: '2023-06-17' },
                  ].map((inspection) => (
                    <div key={inspection.id} className="flex items-center">
                      <Avatar className="h-9 w-9 bg-cyan-100 dark:bg-cyan-800">
                        <AvatarFallback className="text-cyan-700 dark:text-cyan-200">{inspection.id.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none text-cyan-800 dark:text-cyan-200">{inspection.address}</p>
                        <p className="text-sm text-cyan-600 dark:text-cyan-400">{inspection.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Collaboration Tools */}
          <Card className="mb-6 bg-white dark:bg-gray-800 shadow-md ">
            <CardHeader>
              <CardTitle className="text-cyan-800 dark:text-cyan-200">Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="team" className="w-full">
                <TabsList>
                  <TabsTrigger value="team">Team</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="messages">Messages</TabsTrigger>
                </TabsList>
                <TabsContent value="team">
                  <div className="space-y-4">
                  <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="/images/Opt.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium text-cyan-800 dark:text-cyan-200">{session?.user.name || session?.user.username} (Client)</span>
                    </div>
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="" />
                        <AvatarFallback>RG</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium text-cyan-800 dark:text-cyan-200">Roger (Architect)</span>
                    </div>
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="/images/co.jpg" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium text-cyan-800 dark:text-cyan-200">Alex Smith (Engineer)</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="activity">
                  <div className="space-y-2">
                    <p className="text-sm text-cyan-800 dark:text-cyan-200">John uploaded new blueprints (2 hours ago)</p>
                    <p className="text-sm text-cyan-800 dark:text-cyan-200">Jane commented on environmental report (1 day ago)</p>
                  </div>
                </TabsContent>
                <TabsContent value="messages">
                  <div className="space-y-2">
                    <Input placeholder="Type a message..." />
                    <Button className="w-full">Send Message</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
  }
 
 

  




