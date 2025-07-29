"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import NewTask from "./new-task"

interface NewTaskModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export default function NewTaskModal({ isOpen, onOpenChange }: NewTaskModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 max-w-2xl">
        <NewTask isModal onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  )
}
