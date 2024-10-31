import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ApiContext } from 'utils/ApiContext'
import MainNavigation from './shared/navigation/MainNavigation'
import ErrorDisplay from './shared/ErrorDisplay'
import ScrollToTop from 'hooks/useScroll'

export default function Layout() {
  const { appError, appReady, initApp } = React.useContext(ApiContext)

  useEffect(() => {
    initApp()
  }, [])

  if (!appReady) {
    return <></>
  }

  return appError ? (
    <ErrorDisplay />
  ) : (
    <>
      <ScrollToTop />
      <div className="w-lg flex min-h-screen flex-col">
        <header className="border border-gray-300 bg-white pt-4">
          <div className="w-lg mx-auto flex flex-col items-center justify-center md:flex-row">
            <MainNavigation />
          </div>
        </header>

        <main className="flex grow bg-black/20">
          <Outlet />
        </main>

        <footer className="bg-gray-800 p-4 text-white">
          <div className="container mx-auto text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Travel Lux</p>
          </div>
        </footer>
      </div>
    </>
  )
}
