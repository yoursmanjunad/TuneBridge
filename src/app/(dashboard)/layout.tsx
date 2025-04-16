// app/(dashboard)/layout.tsx
import Sidebar from "@/components/sidebar"
import type { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-muted/40">{children}</main>
    </div>
  )
}
