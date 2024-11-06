import React from 'react'

// Components
import Experience from '../../components/experience/Experience'
import Intro from '../../components/intro/Intro'
import TechStack from '../../components/techstack/TechStack'
import HomeProjects from '../../components/homeProjects/HomeProjects'
// import Youtube from '../../components/youtube/Youtube'
import HomeContact from '../../components/homeContact/HomeContact'
import HomeServices from '../../components/homeServices/HomeServices'

const Home = () => {
    return (
        <main className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6'>
            <Intro />
            <div className='grid grid-cols-1 gap-4 lg:gap-6'>
                <Experience />
                <TechStack />
            </div>
            <HomeProjects />
            <HomeServices />
            {/* <Youtube /> */}
            <HomeContact />
        </main>
    )
}

export default Home
