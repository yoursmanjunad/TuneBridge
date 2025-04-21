"use client"

import * as React from "react"
import { BarChartIcon, CircleDollarSign, FolderIcon, LayoutDashboardIcon, ListIcon, UsersIcon } from 'lucide-react';
import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react"

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
const data = {
  user: {
    name: "Manjunath",
    email: "imanjunad@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  // navMain: [
  //   {
  //     title: "Dashboard",
  //     url: "#",
  //     icon: IconDashboard,
  //   },
  //   {
  //     title: "Analytics",
  //     url: "/analytics",
  //     icon: IconChartBar,
  //   },
  //   {
  //     title: "Playlists",
  //     url: "#",
  //     icon: IconFolder,
  //   },
  // ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard", // Update with proper route
      icon: LayoutDashboardIcon,
    },
    {
      title: "Lifecycle",
      url: "/lifecycle", // Update with proper route
      icon: ListIcon,
    },
    {
      title: "Analytics",
      url: "/analytics", // Update with proper route
      icon: BarChartIcon,
    },
    {
      title: "Projects",
      url: "/projects", // Update with proper route
      icon: FolderIcon,
    },
    {
      title: "Team",
      url: "/team", // Update with proper route
      icon: UsersIcon,
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
      title: "Pricing",
      url: "#",
      icon: CircleDollarSign,
    },
  ],
  documents: [
    
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">TuneBridge</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
