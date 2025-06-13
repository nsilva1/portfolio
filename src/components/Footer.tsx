import { headerMenuItems, socialLinks } from "../lib/constants"

const Footer = () => {
  return (
    <footer className='bg-gray-100 dark:bg-gray-800 py-12'>
        <div className='container mx-auto px-4 text-center'>
            <div className='flex justify-between items-center mb-8'>
              <div className="flex items-center mb-0">
                <span className="text-xl font-extrabold">Neto</span>
                <span className="text-primary text-2xl ml-1">.</span>
              </div>

              {/* Menu */}
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

              {/* Socials */}
                <div className='flex space-x-4'>
                    {
                    socialLinks.map((link, index) => (
                        <a key={index} href={link.url} target='_blank' rel='noopener noreferrer' className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors'>
                        <div>
                            <img src={link.icon} alt={link.name} className='w-6 h-6' />
                        </div>
                        </a>
                    ))
                    }
                </div>
            </div>
            <div className='text-center text-gray-600 dark:text-gray-400'>
                <p>&copy; {new Date().getFullYear()} Neto. All rights reserved.</p>
              </div>
        </div>
    </footer>
  )
}

export { Footer }