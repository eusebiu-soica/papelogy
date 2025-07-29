"use client"

import { useEffect, useState } from "react"
import { Calendar, Flag, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

// You'll need to implement these components based on your needs
// import DatePicker from "./calendar-component"
// import Tags from "./tags-component"
// import SelectProject from "./select-project-component"

interface ButtonsProps {
  isHide?: boolean
  button: "all" | "priority" | "date" | "tags" | "project"
  className?: string
  isButtonFullWidth?: boolean
  taskData?: any
  isModal?: boolean
  isSubtask?: boolean
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

const handleDate = (date: string | Date, context?: string) => {
  const d = new Date(date)
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  if (d.toDateString() === today.toDateString()) return "Today"
  if (d.toDateString() === tomorrow.toDateString()) return "Tomorrow"

  return d.toLocaleDateString()
}

export default function FunctionalButtons({
  isHide,
  button,
  isModal,
  className,
  isButtonFullWidth,
  taskData,
  isSubtask,
}: ButtonsProps) {
  const currentDate = new Date()
  const [selectedPriority, setSelectedPriority] = useState<string>("")
  const [dateSelected, setDateSelected] = useState<Date | undefined>(undefined)
  const [projectId, setProjectId] = useState<string | null>(null)

  const handleDateChange = (date: Date) => {
    setDateSelected(date)
    console.log(date)
  }

  const handleClearDate = () => {
    setDateSelected(undefined)
  }

  const handleClearPriority = () => {
    setSelectedPriority("")
  }

  useEffect(() => {
    if (isHide) {
      handleClearPriority()
      setDateSelected(undefined)
    }
  }, [isHide])

  useEffect(() => {
    if (taskData) {
      switch (button) {
        case "date":
          setDateSelected(new Date(taskData.dueDate))
          break
        case "priority":
          setSelectedPriority(handlePriorityName(taskData.priority))
          break
        case "project":
          setProjectId(taskData.projectId)
          break
        case "all":
          setDateSelected(new Date(taskData.dueDate))
          setSelectedPriority(handlePriorityName(taskData.priority))
          setProjectId(taskData.projectId)
          break
        default:
          break
      }
    }
  }, [taskData])

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Urgent":
        return "text-red-600"
      case "Important":
        return "text-orange-600"
      case "Moderate":
        return "text-blue-600"
      case "Low":
        return "text-green-600"
      default:
        return ""
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {/* Projects dropdown */}
      {/* {(button === "all" || button === "project") && !isSubtask && (
        <SelectProject
          isHide={isHide}
          fullWidth={isButtonFullWidth}
          className={className}
          projectId={projectId}
          isModal={isModal}
        />
      )} */}

      {/* Set Priority dropdown */}
      {(button === "all" || button === "priority") && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={clsx(
                "justify-start",
                { "w-full": isButtonFullWidth },
                getPriorityColor(selectedPriority),
                className,
              )}
            >
              {selectedPriority ? <Flag className="mr-2 h-4 w-4 fill-current" /> : <Flag className="mr-2 h-4 w-4" />}
              {selectedPriority || "Priority"}
              {selectedPriority && (
                <X
                  className="ml-auto h-4 w-4"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleClearPriority()
                  }}
                />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedPriority("Urgent")} className="text-red-600">
              <Flag className="mr-2 h-4 w-4 fill-current" />
              Urgent
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedPriority("Important")} className="text-orange-600">
              <Flag className="mr-2 h-4 w-4 fill-current" />
              Important
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedPriority("Moderate")} className="text-blue-600">
              <Flag className="mr-2 h-4 w-4 fill-current" />
              Moderate
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedPriority("Low")} className="text-green-600">
              <Flag className="mr-2 h-4 w-4 fill-current" />
              Low
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      {/* Date picker dropdown */}
      {(button === "all" || button === "date") && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={clsx(
                "justify-start",
                { "w-full": isButtonFullWidth, "text-blue-600": dateSelected },
                className,
              )}
            >
              <Calendar className="mr-2 h-4 w-4" />
              {dateSelected ? handleDate(dateSelected, "calendar") : "Due date"}
              {dateSelected && (
                <X
                  className="ml-auto h-4 w-4"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleClearDate()
                  }}
                />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-0">
            {/* <DatePicker onChange={handleDateChange} haveSelectedDate={dateSelected} /> */}
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      {/* Tags dropdown */}
      {/* {(button === "all" || button === "tags") && (
        <Tags isHide={isHide} fullWidth={isButtonFullWidth} className={className} />
      )} */}
    </div>
  )
}
