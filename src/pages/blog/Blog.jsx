import React, { useEffect } from 'react'

// Components
import Intro from '../../components/intro/Intro'
import BlogComp from '../../components/blogComp/BlogComp'

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main className=' h-screen'>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6'>
                <Intro />
                <BlogComp />
            </div>
        </main>
    )
}

export default Blog
