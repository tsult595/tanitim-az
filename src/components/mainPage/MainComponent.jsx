'use client'

import Header from "./Header"

const MainComponent = () => {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-7xl mx-auto px-4">
       <header className="fixed top-0 left-0 right-0 z-10 bg-white border-b border-gray-100 shadow-sm">
        <div className="block md:hidden">
          <Header />
        </div>
      </header>
    </div>
  )
}

export default MainComponent