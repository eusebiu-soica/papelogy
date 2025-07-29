import { HomePage } from "@/components/landing-page"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Papelogy - Personal Productivity Platform",
  description: "Manage your time, tasks, and projects with Papelogy. A complete platform for personal productivity and team collaboration.",
}

export default function Page (){
  return <HomePage />
}
