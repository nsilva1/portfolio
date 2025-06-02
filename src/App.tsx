
import { Header } from "./components/Header"
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from "./components/About"

const App = () => {

  return (
    <div>
      {/* Dark mode background gradient */}
      <div className='fixed inset-0 -z-10 opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10'></div>
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* About Section */}
      <About />
    </div>
  )
}

export default App
