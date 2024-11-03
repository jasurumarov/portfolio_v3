import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './index.css'
// import './scss/style.scss'

// Pages
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Projects from './pages/projects/Projects'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'

// Components
import Header from './components/header/Header'
import Background from './components/background/Background'


function App() {
	return (
		<div className='relative bg-light text-dark dark:bg-dark-2 dark:text-light'>
			<div className='sticky z-50 mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6'>
				<Toaster
					position="top-right"
					reverseOrder={false}
				/>
				<Header />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/services' element={<Services />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>

			</div>
			<Background />
		</div>
	)
}

export default App