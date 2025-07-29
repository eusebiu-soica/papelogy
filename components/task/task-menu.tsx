"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  CheckCircle,
  Edit,
  Flag,
  FolderOpen,
  Link,
  MoreHorizontal,
  SquareStackIcon as RectangleStack,
  Trash,
} from "lucide-react"
import { useRouter } from "next/navigation"
import clsx from "clsx"

interface TaskMenuProps {
  priority: "p1" | "p2" | "p3" | "p4" | undefined
  taskName: string | null
  inView?: boolean
  projectId?: string | null | undefined
  handleOpenTask?: () => void
}

export default function TaskMenu({ priority, taskName, inView, projectId, handleOpenTask }: TaskMenuProps) {
  const router = useRouter()

  const goToProject = (id: string | undefined | null) => {
    if (id) {
      router.push(`/dashboard/projects/project/${id}`)
    }
  }

  const handleDeleteTask = () => {
    // Dispatch delete modal action
    console.log("Delete task:", taskName)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open task menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        {!inView && (
          <DropdownMenuItem onClick={handleOpenTask}>
            <Edit className="mr-2 h-4 w-4" />
            Edit task
          </DropdownMenuItem>
        )}

        <DropdownMenuItem onClick={() => goToProject(projectId)}>
          <RectangleStack className="mr-2 h-4 w-4" />
          Go to project page
        </DropdownMenuItem>

        <DropdownMenuItem>
          <CheckCircle className="mr-2 h-4 w-4" />
          Mark as completed
        </DropdownMenuItem>

        {!inView && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Change Priority</DropdownMenuLabel>

            <DropdownMenuItem className={clsx("text-red-600", { "bg-red-50": priority === "p1" })}>
              <Flag className="mr-2 h-4 w-4" />
              Urgent
            </DropdownMenuItem>

            <DropdownMenuItem className={clsx("text-orange-600", { "bg-orange-50": priority === "p2" })}>
              <Flag className="mr-2 h-4 w-4" />
              Important
            </DropdownMenuItem>

            <DropdownMenuItem className={clsx("text-blue-600", { "bg-blue-50": priority === "p3" })}>
              <Flag className="mr-2 h-4 w-4" />
              Moderate
            </DropdownMenuItem>

            <DropdownMenuItem className={clsx("text-green-600", { "bg-green-50": priority === "p4" })}>
              <Flag className="mr-2 h-4 w-4" />
              Low
            </DropdownMenuItem>
          </>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Actions</DropdownMenuLabel>

        <DropdownMenuItem>
          <Link className="mr-2 h-4 w-4" />
          Copy link to task
        </DropdownMenuItem>

        {!inView && (
          <>
            <DropdownMenuItem>
              <FolderOpen className="mr-2 h-4 w-4" />
              Move to project...
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Calendar className="mr-2 h-4 w-4" />
              Change due date
            </DropdownMenuItem>
          </>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Danger zone</DropdownMenuLabel>

        <DropdownMenuItem className="text-red-600 focus:text-red-600" onClick={handleDeleteTask}>
          <Trash className="mr-2 h-4 w-4" />
          Delete task
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
