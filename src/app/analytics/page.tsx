import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { SiteHeader } from "@/components/site-header"
const AnalyticsPage = ()=> {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <h1 className="px-4 text-2xl font-bold lg:px-6">Analytics</h1>
              {/* Analytics content goes here */}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
export default AnalyticsPage