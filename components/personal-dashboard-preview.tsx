"use client"

import { useState } from "react"
import {
  Clock,
  Target,
  CheckCircle2,
  Calendar,
  TrendingUp,
  Play,
  Pause,
  MoreHorizontal,
  Plus,
  Flame,
  Zap,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function PersonalDashboardPreview() {
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [currentTime] = useState("25:00")

  const todayTasks = [
    { id: 1, title: "Review quarterly reports", completed: true, priority: "high", time: "2h 15m" },
    { id: 2, title: "Prepare presentation slides", completed: false, priority: "high", time: "1h 30m" },
    { id: 3, title: "Team standup meeting", completed: true, priority: "medium", time: "30m" },
    { id: 4, title: "Update project documentation", completed: false, priority: "low", time: "45m" },
    { id: 5, title: "Code review for new feature", completed: false, priority: "medium", time: "1h" },
  ]

  const habits = [
    { name: "Morning workout", completed: true, streak: 12 },
    { name: "Read 30 minutes", completed: true, streak: 8 },
    { name: "Meditate", completed: false, streak: 5 },
    { name: "No social media before 10 AM", completed: true, streak: 15 },
  ]

  const weeklyGoals = [
    { title: "Complete project milestone", progress: 75, target: "100%" },
    { title: "Exercise 5 times", progress: 60, target: "5 sessions" },
    { title: "Read 2 books", progress: 40, target: "2 books" },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6 bg-background">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Bună dimineața, Alex! 👋</h1>
          <p className="text-muted-foreground">Astăzi e o zi perfectă pentru productivitate</p>
        </div>
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Timp lucrat azi</p>
                <p className="text-2xl font-bold">6h 45m</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Task-uri completate</p>
                <p className="text-2xl font-bold">8/12</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Obiective săptămână</p>
                <p className="text-2xl font-bold">3/4</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Flame className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-sm text-muted-foreground">Streak obiceiuri</p>
                <p className="text-2xl font-bold">15 zile</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Focus Timer */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Focus Session</span>
            </CardTitle>
            <CardDescription>Pomodoro Timer - Deep Work</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-mono font-bold text-primary">{currentTime}</div>
              <p className="text-sm text-muted-foreground mt-2">Sesiune de concentrare</p>
            </div>
            <div className="flex justify-center space-x-2">
              <Button onClick={() => setIsTimerRunning(!isTimerRunning)} className="flex items-center space-x-2">
                {isTimerRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span>{isTimerRunning ? "Pauză" : "Start"}</span>
              </Button>
              <Button variant="outline">Reset</Button>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Sesiuni completate azi</span>
                <span>4/6</span>
              </div>
              <Progress value={67} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Today's Tasks */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Task-urile de azi</CardTitle>
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-1" />
                Adaugă task
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {todayTasks.map((task) => (
                <div key={task.id} className="flex items-center space-x-3 p-3 rounded-lg border">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      task.completed ? "bg-green-500 border-green-500" : "border-gray-300"
                    }`}
                  >
                    {task.completed && <CheckCircle2 className="h-3 w-3 text-white" />}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                      {task.title}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge
                        variant={
                          task.priority === "high"
                            ? "destructive"
                            : task.priority === "medium"
                              ? "default"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {task.priority}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{task.time}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Goals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span>Obiective săptămânale</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {weeklyGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{goal.title}</span>
                  <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <p className="text-xs text-muted-foreground">Target: {goal.target}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Daily Habits */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Flame className="h-5 w-5" />
              <span>Obiceiuri zilnice</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {habits.map((habit, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      habit.completed ? "bg-green-500 border-green-500" : "border-gray-300"
                    }`}
                  >
                    {habit.completed && <CheckCircle2 className="h-3 w-3 text-white" />}
                  </div>
                  <span className={`font-medium ${habit.completed ? "text-muted-foreground" : ""}`}>{habit.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Flame className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium">{habit.streak}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Productivity Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Productivitatea acestei săptămâni</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-end justify-between space-x-2">
            {["Lun", "Mar", "Mie", "Joi", "Vin", "Sâm", "Dum"].map((day, index) => {
              const heights = [60, 80, 45, 90, 75, 30, 20]
              return (
                <div key={day} className="flex flex-col items-center space-y-2 flex-1">
                  <div
                    className="w-full bg-primary rounded-t-md transition-all duration-300 hover:bg-primary/80"
                    style={{ height: `${heights[index]}%` }}
                  />
                  <span className="text-xs text-muted-foreground">{day}</span>
                </div>
              )
            })}
          </div>
          <div className="mt-4 flex justify-between text-sm text-muted-foreground">
            <span>0h</span>
            <span>4h</span>
            <span>8h</span>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Acțiuni rapide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col space-y-2 bg-transparent">
              <Plus className="h-6 w-6" />
              <span className="text-sm">Task nou</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2 bg-transparent">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">Planifică</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2 bg-transparent">
              <Target className="h-6 w-6" />
              <span className="text-sm">Obiectiv nou</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2 bg-transparent">
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm">Rapoarte</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
