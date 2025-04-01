'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/navigation/Navbar'
import { supabase } from '@/lib/supabase'

export default function DashboardPage() {
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUserEmail(user?.email ?? null)
    }
    getUser()
  }, [])

  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center flex-col space-y-4">
            <h1 className="text-2xl font-semibold text-gray-900">Welcome to your Style AI Dashboard</h1>
            {userEmail && (
              <p className="text-gray-600">Logged in as: {userEmail}</p>
            )}
            <p className="text-gray-500">This is a protected route - you can only see this if you're authenticated!</p>
          </div>
        </div>
      </main>
    </div>
  )
} 