import { Route, Routes } from 'react-router-dom'
import './index.css'
// import './scss/style.scss'

// Pages
import Home from './pages/home/Home'

// Components
import Header from './components/header/Header'
import Projects from './pages/projects/Projects'
import Background from './components/background/Background'


function App() {
	return (
		<div className=' h-screen overflow-y-auto overflow-x-hidden bg-light text-dark dark:bg-dark-2 dark:text-light'>
			<div className='mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6'>
				<Header />

				<Routes>
					{/* <Route path='/' element={<Home />} /> */}
					{/* <Route path='/projects' element={<Projects />} /> */}
				</Routes>

			</div>
			<Background />
		</div>
	)
}

export default App