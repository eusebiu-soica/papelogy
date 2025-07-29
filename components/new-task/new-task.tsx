"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import clsx from "clsx"

// import FunctionalButtons from "../task-buttons-component"

interface NewTaskProps {
  isModal: boolean
  isSubTask?: boolean
  onClose?: () => void
}

export default function NewTask({ isModal, isSubTask, onClose }: NewTaskProps) {
  const [taskName, setTaskName] = useState<string>("")
  const [taskDescription, setTaskDescription] = useState<string>("")
  const [isDisabled, setIsDisabled] = useState(true)
  const [isHide, setIsHide] = useState<boolean>(true)

  const taskNameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isHide) {
      setTimeout(() => {
        taskNameRef.current?.focus()
      }, 100)
    } else {
      setTaskDescription("")
      setTaskName("")
    }

    if (isModal) setIsHide(false)
  }, [isHide, isModal])

  useEffect(() => {
    setIsDisabled(taskName.trim() === "")
  }, [taskName])

  const createTask = (taskName: string, description: string) => {
    return { name: taskName, description }
  }

  const handleSave = () => {
    if (taskName.trim()) {
      const isTaskCreated = createTask(taskName, taskDescription)
      console.log("Task", isTaskCreated)
      setTaskName("")
      setTaskDescription("")
    }

    if (isModal && onClose) {
      onClose()
    }
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      if (taskName.trim()) {
        handleSave()
      }
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <Button variant="ghost" size="sm" onClick={() => setIsHide(false)} className={clsx("mt-2", { hidden: isHide })}>
          <Plus className="mr-2 h-4 w-4" />
          {isSubTask ? "Add subtask" : "Add task"}
        </Button>
      </div>

      <Card className={clsx("", { hidden: isHide, "mt-4 mb-4": !isModal })}>
        <CardHeader className="pb-3">
          <Input
            ref={taskNameRef}
            placeholder={isSubTask ? "Subtask name" : "Task name"}
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            onKeyDown={handleEnter}
            className="border-none text-base p-0 h-auto focus-visible:ring-0"
          />
        </CardHeader>

        <CardContent className="pt-0">
          <Textarea
            placeholder="Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="border-none resize-none p-0 focus-visible:ring-0 min-h-[60px]"
          />

          {/* <div className="mt-4">
            <FunctionalButtons isSubtask={isSubTask} isModal={isModal} isHide={isHide} button="all" />
          </div> */}
        </CardContent>

        <CardFooter className="flex justify-end gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              if (isModal && onClose) {
                onClose()
              } else {
                setIsHide(true)
              }
            }}
          >
            Cancel
          </Button>

          <Button
            size="sm"
            onClick={handleSave}
            disabled={isDisabled}
            className={clsx({ "cursor-not-allowed": isDisabled })}
          >
            {isSubTask ? "Add subtask" : "Add task"}
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
