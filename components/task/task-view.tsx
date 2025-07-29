"use client"

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Maximize, Minimize } from "lucide-react"
import { Suspense, useEffect, useState, useRef } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
// import { useHotkeys } from "react-hotkeys-hook"
import clsx from "clsx"

import TaskMenu from "./task-menu"
import TaskViewBtns from "./task-view-btns"
import NewTask from "../new-task/new-task"
import TaskComponent from "./task"
// import FunctionalButtons from "../task-buttons-component"

// Mock data - replace with your actual data imports
const tasks = [{ id: "1", title: "Sample Task", description: "Sample description", projectId: "proj1" }]
const subtasks = [{ id: "sub1", title: "Sample Subtask", taskId: "1", description: "Subtask description" }]

interface TaskInterface {
  id: string
  title: string
  description?: string
  projectId?: string
  taskId?: string
  subTasks?: Array<{}>
}

const removeQueryParam = (param: string, router: any) => {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  params.delete(param)
  router.replace(`${url.pathname}?${params.toString()}`)
}

const filterSubtasks = (taskId: string | undefined | null) => {
  return subtasks.filter((item) => item.taskId === taskId)
}

const handleAddedDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}

export default function TaskView() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTask, setCurrentTask] = useState<TaskInterface | null>(null)
  const [haveChanges, setHaveChanges] = useState<boolean>(false)
  const [taskTitle, setTaskTitle] = useState<string>("")
  const [taskDescription, setTaskDescription] = useState<string>("")
  const [projectId, setProjectId] = useState<string | null>(null)
  const [taskSubtasks, setTaskSubtasks] = useState<TaskInterface[]>([])
  const [principalTask, setPrincipalTask] = useState<TaskInterface | null>(null)
  const [fullScreen, setFullScreen] = useState<boolean>(false)

  const URLParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const taskTitleRef = useRef<HTMLInputElement>(null)
  const taskDescriptionRef = useRef<HTMLTextAreaElement>(null)

  const taskId = URLParams?.get("task")
  const subtaskId = URLParams?.get("subtask")

  useEffect(() => {
    if (taskId) {
      openTask(taskId)
    } else {
      closeModal()
    }
  }, [taskId])

  useEffect(() => {
    if (subtaskId) openSubtask(subtaskId)
    if (!subtaskId) document.title = principalTask?.title || document.title
  }, [subtaskId])

  useEffect(() => {
    if (currentTask) {
      setTaskTitle(currentTask.title || "")
      setTaskDescription(currentTask.description || "")
      setProjectId(currentTask.projectId || principalTask?.projectId || null)
      setTaskSubtasks(filterSubtasks(currentTask.id))
      setHaveChanges(false)
      document.title = currentTask.title || "Task View"
    }
  }, [currentTask])

  useEffect(() => {
    const hasTitleChanged = taskTitle !== currentTask?.title
    const hasDescriptionChanged = taskDescription !== currentTask?.description
    setHaveChanges(hasTitleChanged || hasDescriptionChanged)
  }, [taskTitle, taskDescription, currentTask])

  const openTask = (id: string | undefined | null, goBack?: boolean) => {
    if (goBack) removeQueryParam("subtask", router)
    setIsOpen(true)
    if (!id) return
    const task = tasks.find((item) => item.id === id)
    if (task) {
      setCurrentTask(task)
      setPrincipalTask(task)
    }
  }

  const openSubtask = (id: string) => {
    setIsOpen(true)
    const subtask = subtasks.find((item) => item.id === id && item.taskId === taskId)
    if (subtask) {
      setCurrentTask(subtask)
    } else {
      openTask(taskId, true)
    }
  }

  const closeModal = () => {
    router.replace(pathname, undefined)
    setCurrentTask(null)
    setIsOpen(false)
  }

  const discardChanges = () => {
    if (haveChanges && currentTask) {
      setTaskTitle(currentTask.title)
      setTaskDescription(currentTask?.description || "")
      setHaveChanges(false)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("fullScreenView")
      if (storedValue) {
        setFullScreen(storedValue === "true")
      }
    }
  }, [])

  const handleFullScreen = () => {
    if (isOpen) {
      setFullScreen(!fullScreen)
      localStorage.setItem("fullScreenView", JSON.stringify(!fullScreen))
    }
  }

  // useHotkeys("f", handleFullScreen)

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className={clsx("max-w-4xl h-[85vh] p-0 overflow-hidden", { "max-w-full h-screen": fullScreen })}>
        <Suspense fallback={<div>Loading...</div>}>
          <DialogHeader className="flex flex-row justify-between items-center p-4 border-b">
            <div className={clsx("text-sm text-muted-foreground", { hidden: subtaskId })}>
              Added {handleAddedDate("2024-12-03")} • 17:22
            </div>

            {subtaskId && (
              <div className="flex-1 mx-4">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        onClick={() => openTask(principalTask?.id, true)}
                        className="cursor-pointer hover:text-foreground"
                      >
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="max-w-32 truncate block">{principalTask?.title}</span>
                            </TooltipTrigger>
                            <TooltipContent>{principalTask?.title}</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="max-w-32 truncate block">{currentTask?.title}</span>
                          </TooltipTrigger>
                          <TooltipContent>{currentTask?.title}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            )}

            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" onClick={handleFullScreen} className="hidden sm:flex">
                      {fullScreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{fullScreen ? "Exit Full Screen (F)" : "Full Screen (F)"}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TaskMenu priority="p1" projectId={projectId} taskName={currentTask?.title || null} inView />
            </div>
          </DialogHeader>

          <div className="flex flex-col sm:flex-row h-full overflow-hidden">
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="flex items-center gap-3 mb-4">
                <Checkbox />
                <Input
                  ref={taskTitleRef}
                  placeholder="Task name"
                  value={taskTitle || ""}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  className="border-none text-lg font-medium p-0 h-auto focus-visible:ring-0"
                />
              </div>

              <div className="ml-7">
                <Textarea
                  ref={taskDescriptionRef}
                  placeholder="Description"
                  value={taskDescription || ""}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  className="border-none resize-none p-0 focus-visible:ring-0 min-h-[100px]"
                />

                {taskSubtasks?.length > 0 && (
                  <>
                    <div className="text-sm text-muted-foreground mt-6 mb-3">
                      {`Subtasks • 0/${taskSubtasks.length}`}
                    </div>
                    {taskSubtasks.map((item: any) => (
                      <div key={item.id}>
                        <TaskComponent
                          taskId={item.id}
                          title={item.title}
                          description={item.description}
                          priority={item.priority}
                          dueDate={item.dueDate}
                          isSubtask
                        />
                      </div>
                    ))}
                  </>
                )}

                {!subtaskId && (
                  <div className="mt-4">
                    <NewTask isModal={false} isSubTask />
                  </div>
                )}
              </div>
            </div>

            <div
              className={clsx("w-full sm:w-80 border-l bg-muted/30 p-4 flex flex-col justify-between", {
                "sm:w-72": fullScreen,
              })}
            >
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block">Project</label>
                  {/* <FunctionalButtons taskData={currentTask} className="h-9" button="project" isButtonFullWidth /> */}
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block">Priority</label>
                  {/* <FunctionalButtons taskData={currentTask} className="h-9" button="priority" isButtonFullWidth /> */}
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block">Due date</label>
                  {/* <FunctionalButtons taskData={currentTask} className="h-9" button="date" isButtonFullWidth /> */}
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block">Tags</label>
                  {/* <FunctionalButtons taskData={currentTask} className="h-9" button="tags" isButtonFullWidth /> */}
                </div>
              </div>

              <TaskViewBtns needSave={haveChanges} discardChanges={discardChanges} />
            </div>
          </div>
        </Suspense>
      </DialogContent>
    </Dialog>
  )
}
