import { Home, BarChart2, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-white border-r p-4 space-y-4">
      <h1 className="text-2xl font-bold text-grey-600">TuneBridge</h1>
      <nav className="space-y-2">
        <Link href="/dashboard"><Button variant="ghost" className="w-full justify-start "><Home className="mr-2 " />Dashboard</Button></Link>
        <Link href="/trends"><Button variant="ghost" className="w-full justify-start"><BarChart2 className="mr-2" />Trends</Button></Link>
        <Link href="/profile"><Button variant="ghost" className="w-full justify-start"><User className="mr-2" />Profile</Button></Link>
        <Button variant="ghost" className="w-full justify-start text-red-600"><LogOut className="mr-2" />Logout</Button>
      </nav>
    </aside>
  )
}
