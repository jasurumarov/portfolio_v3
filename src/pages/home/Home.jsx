import React from 'react'

// Components
import Experience from '../../components/experience/Experience'
import Intro from '../../components/intro/Intro'
import TechStack from '../../components/techstack/TechStack'

const Home = () => {
    return (
        <main className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6'>
            <Intro />
            <div className='grid grid-cols-1 gap-4 lg:gap-6'>
                <Experience />
                <TechStack />
            </div>
        </main>
    )
}

export default Home
