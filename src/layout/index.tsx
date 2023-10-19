import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderBar from './HeaderBar'

export default function Layout() {
  return (
    <div>
      <HeaderBar />
      <main>
        <div>
        <Suspense>
          <Outlet />
        </Suspense>
        </div>
      </main>
    </div>
  )
}
