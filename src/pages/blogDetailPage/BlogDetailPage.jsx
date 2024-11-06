import React from 'react'

// Components
import Intro from '../../components/intro/Intro'
import BlogDetail from '../../components/blogComp/BlogDetail'

const BlogDetailPage = () => {
    return (
        <main className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6'>
            <Intro isStretch={'self-start'} />
            <BlogDetail />
        </main>
    )
}

export default BlogDetailPage
