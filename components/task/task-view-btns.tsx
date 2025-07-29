"use client"

import { Button } from "@/components/ui/button"
import clsx from "clsx"

interface TaskViewBtnsProps {
  needSave: boolean
  discardChanges: () => void
}

export default function TaskViewBtns({ needSave, discardChanges }: TaskViewBtnsProps) {
  return (
    <div className={clsx("space-y-2", { hidden: !needSave })}>
      <Button variant="outline" onClick={discardChanges} className="w-full bg-transparent">
        Discard
      </Button>
      <Button className="w-full">Save changes</Button>
    </div>
  )
}
