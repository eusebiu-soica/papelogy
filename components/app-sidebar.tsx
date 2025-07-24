// app/your-sidebar-component-path/AppSidebar.tsx
"use client"

import * as React from "react"
import {
  IconCamera,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconHelp,
  IconInnerShadowTop,
  IconFilter,
  IconCheck,
  IconReport,
  IconCalendar,
  IconSearch,
  IconSettings,
  IconNotebook
} from "@tabler/icons-react"

// Importă useUser de la Clerk
import { useUser } from "@clerk/nextjs" // <-- Adaugă asta

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ModeToggle } from "./theme-switch"
import { NavProjects } from "./nav-projects"
import { NavDocuments } from "./nav-documents"

// Păstrează data.navMain, data.navClouds, data.navSecondary, data.documents așa cum sunt
// Dar vom înlocui data.user cu datele reale de la Clerk

const data = {
  // Vom genera obiectul user din useUser()
  // user: {
  //   name: "shadcn",
  //   email: "m@example.com",
  //   avatar: "/avatars/shadcn.jpg",
  // },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Today",
      url: "/today",
      icon: IconCalendar,
    },
    {
      title: "My notes",
      url: "/my-notes",
      icon: IconNotebook,
    },
    {
      title: "Filters & Tags",
      url: "/filters-tags",
      icon: IconFilter,
    },
    {
      title: "Completed",
      url: "/completed",
      icon: IconCheck,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Aici preiei datele utilizatorului de la Clerk
  const { isLoaded, isSignedIn, user } = useUser();

  // Opțional: Poți afișa un placeholder sau un loader cât timp se încarcă datele
  if (!isLoaded) {
    return (
      <Sidebar collapsible="offcanvas" {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem className="flex items-center justify-between gap-3">
              <SidebarMenuButton
                asChild
                className="data-[slot=sidebar-menu-button]:!p-1.5"
              >
                <a href="#">
                  <IconInnerShadowTop className="!size-5" />
                  <span className="text-base font-semibold">Acme Inc.</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
          <NavDocuments items={data.documents} />
        </SidebarContent>
        <SidebarFooter>
          {/* Poți afișa un spinner sau text "Loading user..." */}
          <div className="p-4 text-center text-sm text-gray-400">Loading user...</div>
        </SidebarFooter>
      </Sidebar>
    );
  }

  // Creăm un obiect user specific pentru componenta NavUser, bazat pe datele de la Clerk
  const currentUserData = isSignedIn && user ? {
    name: user.fullName || user.username || user.primaryEmailAddress?.emailAddress || "Guest",
    email: user.primaryEmailAddress?.emailAddress || "",
    avatar: user.imageUrl || "/avatars/default.jpg", // Folosește o imagine de avatar default dacă nu există
  } : {
    // Date pentru utilizator neautentificat sau guest
    name: "Guest",
    email: "",
    avatar: "/avatars/guest.jpg", // O imagine pentru utilizatori neautentificați
  };

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center justify-between gap-3">
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
      </SidebarContent>
      <SidebarFooter>
        {/* Trimite datele utilizatorului autentificat la componenta NavUser */}
        <NavUser user={currentUserData} />
      </SidebarFooter>
    </Sidebar>
  )
}