import React from 'react'
import { Link } from 'react-router-dom'

const HomeContact = () => {
    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
            <marquee behavior="scroll" direction="left" className="overflow-hidden text-nowrap rounded-lg bg-light p-3 text-lg font-bricolage5 text-muted dark:bg-dark-2">
                Startup 🚀 Loyiha 🗂️ Intervyu 🎥 Investitsiya 💰 Sherikchilik ✊ 
            </marquee>

            <h2 className="mt-4 text-[40px] font-bricolage6 leading-snug text-dark dark:text-light">
                Birga 🤝
                <br />
                Ishlaymizmi?
            </h2>

            <Link to="/contact" className="mt-6 inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
                <span className='font-bricolage'>Bog'lanish</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
                    <path d="M17.5 11.667v-5h-5"></path>
                    <path d="m17.5 6.667-7.5 7.5-7.5-7.5"></path>
                </svg>
            </Link>
        </div>
    )
}

export default HomeContact