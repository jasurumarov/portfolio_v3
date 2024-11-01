import React from 'react'

// Components
import Intro from '../../components/intro/Intro'
import ProjectsComp from '../../components/projectsComp/ProjectsComp'

const Projects = () => {
    return (
        <main className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6'>
            <Intro isStretch={"self-start"} />
            <ProjectsComp />
        </main>
    )
}

export default Projects
