import { headerMenuItems } from "../lib/constants"
import { Sun, Moon } from "lucide-react"

const Header = () => {
    
  return (
    <div className='fixed w-full top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-sm transition-all duration-300'>
        <div className='container mx-auto px-4'>
            <nav className="flex justify-between items-center py-4">
                <div className="flex items-center">
                    <span className="text-xl font-extrabold">Neto</span>
                    <span className="text-primary text-2xl ml-1">.</span>
                </div>
                <ul className="md:flex space-x-8 hidden">
                    {
                        headerMenuItems.map((menuItem, index) => (
                            <li key={index}>
                                <a href={`#${menuItem.link}`} className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                                    {menuItem.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hidden dark:block">
                        <Sun className="w-5 h-5 text-yellow-500" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors dark:hidden">
                        <Moon className="w-5 h-5 text-blue-500" />
                    </button>
                    <button className='p-2 md:hidden' id='menuToggle' aria-label='Toggle Menu' aria-controls='menu' aria-expanded='false'>
                        <div className='w-6 h-6 flex flex-col justify-between'>
                            <span className='w-full h-0.5 bg-gray-600 dark:bg-gray-400 transition-all'></span>
                            <span className='w-full h-0.5 bg-gray-600 dark:bg-gray-400 transition-all'></span>
                            <span className='w-full h-0.5 bg-gray-600 dark:bg-gray-400 transition-all'></span>
                        </div>
                    </button>
                </div>
            </nav>
        </div>
    </div>
  )
}

export { Header }