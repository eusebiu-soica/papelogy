import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"
import Task from "@/components/task/task"

export const metadata = {
  title: "Dashboard"
}

export default function Page() {
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <DataTable data={data} />
            {/* <Task taskId={data[0].id} title={data[0].header} description={data[0].description} dueDate={data[0].dueDate} priority={data[0].priority} subTasks={data[0].subTasks} tags={data[0].tags} projectId={data[0].projectId} /> */}
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
