import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Book, Settings } from 'lucide-react'

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <Home className="inline-block mr-2" size={20} />
          Dashboard
        </Link>
        <Link to="/docs" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <Book className="inline-block mr-2" size={20} />
          Function Docs
        </Link>
        <Link to="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <Settings className="inline-block mr-2" size={20} />
          Settings
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar