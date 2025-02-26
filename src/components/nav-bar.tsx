"use client"

import { Home, PenSquare, Play, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800">
      <div className="flex justify-around items-center h-16">
        <Link href="/timer" className={`p-2 ${pathname === "/timer" ? "text-green-500" : "text-gray-400"}`}>
          <Play size={24} />
        </Link>
        {/* <Link href="/notes" className={`p-2 ${pathname === "/notes" ? "text-green-500" : "text-gray-400"}`}>
          <PenSquare size={24} />
        </Link> */}
        {/* <Link href="/meditate" className={`p-2 ${pathname === "/meditate" ? "text-green-500" : "text-gray-400"}`}>
          <Play size={24} />
        </Link> */}
        {/* <Link href="/history" className={`p-2 ${pathname === "/history" ? "text-green-500" : "text-gray-400"}`}>
          <Clock size={24} />
        </Link> */}
        <Link href="/user" className={`p-2 ${pathname === "/profile" ? "text-green-500" : "text-gray-400"}`}>
          <User size={24} />
        </Link>
      </div>
    </nav>
  )
}
