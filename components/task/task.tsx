"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Calendar, Flag } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

import TaskMenu from "./task-menu"

// Mock data - replace with your actual data
const projects = [{ id: "proj1", name: "Project 1", icon: "📁" }]

interface TaskProps {
  taskId: any
  title: string
  description?: string
  dueDate?: string
  priority?: "p1" | "p2" | "p3" | "p4"
  subTasks?: any
  tags?: string[]
  projectId?: string
  isSubtask?: boolean
}

const handleDate = (date: string | Date, context?: string) => {
  const d = new Date(date)
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  if (d.toDateString() === today.toDateString()) return "Today"
  if (d.toDateString() === tomorrow.toDateString()) return "Tomorrow"

  return d.toLocaleDateString()
}

const handlePriorityColor = (priority: string) => {
  switch (priority) {
    case "p1":
      return "destructive"
    case "p2":
      return "secondary"
    case "p3":
      return "default"
    case "p4":
      return "outline"
    default:
      return "default"
  }
}

const handlePriorityName = (priority: string) => {
  switch (priority) {
    case "p1":
      return "Urgent"
    case "p2":
      return "Important"
    case "p3":
      return "Moderate"
    case "p4":
      return "Low"
    default:
      return ""
  }
}

export default function Task({
  taskId,
  title,
  description,
  priority,
  dueDate,
  subTasks,
  isSubtask,
  tags,
  projectId,
}: TaskProps) {
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleURLParams = (id: string) => {
    const params = new URLSearchParams(window.location.search)
    !isSubtask ? params.set("task", id) : params.set("subtask", id)
    replace(`${pathname}?${params.toString()}`)
  }

  const project = useMemo(() => {
    return projects.find((p) => p.id === projectId)
  }, [projectId])

  const [inProject, setInProject] = useState<string | null>(null)

  useEffect(() => {
    const match = pathname.match(/\/dashboard\/projects\/project\/([\w-]+)/)
    match && setInProject(match[1])
  }, [pathname])

  return (
    <div className="relative group">
      <Card
        className="cursor-pointer hover:bg-muted/50 transition-colors border-none shadow-none bg-transparent"
        onClick={() => handleURLParams(taskId)}
        onContextMenu={(e) => {
          e.preventDefault()
          handleURLParams(taskId)
        }}
      >
        <CardContent className="flex items-center justify-between p-3">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <Checkbox className="mt-0.5" />

            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm truncate">{title}</h3>
              {description && <p className="text-xs text-muted-foreground truncate mt-1">{description}</p>}
            </div>
          </div>

          <div className="flex items-center gap-2 ml-4">
            {projectId && projectId !== inProject && project?.icon && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="outline" className="text-xs">
                      {project?.icon}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>{project?.name}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {priority && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant={handlePriorityColor(priority) as any} className="text-xs">
                      <Flag className="h-3 w-3" />
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>{handlePriorityName(priority)}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {subTasks && subTasks.length > 0 && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="secondary" className="text-xs">
                      {`0/${subTasks.length}`}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>Subtasks</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {dueDate && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge
                      variant={new Date(dueDate).toDateString() === new Date().toDateString() ? "default" : "outline"}
                      className="text-xs"
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      {handleDate(dueDate, pathname)}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>Due: {new Date(dueDate).toLocaleDateString()}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
        <TaskMenu
          priority={priority}
          taskName={title}
          inView={false}
          projectId={project?.id}
          handleOpenTask={() => handleURLParams(taskId)}
        />
      </div>

      <Separator className="h-px" />
    </div>
  )
}
