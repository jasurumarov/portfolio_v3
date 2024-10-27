import React from 'react'
import { Link } from 'react-router-dom'

// Images
import Img1 from "../../assets/images/youtube/v1.png"
import Img2 from "../../assets/images/youtube/v2.png"
import Img3 from "../../assets/images/youtube/v1.png"
import Img4 from "../../assets/images/youtube/v2.png"

const videoData = [
    {
        id: 1,
        link: 'https://www.youtube.com/@JasurCoder',
        img: Img1,
        name: 'Bot yaratish'
    },
    {
        id: 2,
        link: 'https://www.youtube.com/@JasurCoder',
        img: Img2,
        name: 'Bot yaratish'
    },
    {
        id: 3,
        link: 'https://www.youtube.com/@JasurCoder',
        img: Img3,
        name: 'Bot yaratish'
    },
    {
        id: 4,
        link: 'https://www.youtube.com/@JasurCoder',
        img: Img4,
        name: 'Bot yaratish'
    },
]

const Youtube = () => {
    let video = videoData?.map(video => (
        <div key={video.id} className="rounded-2xl bg-light text-center dark:bg-dark-2">
            <Link target="_blank" to={video.link}>
                <div className="grid place-content-center rounded-lg bg-white dark:bg-black overflow-hidden hover:shadow-md transition duration-200">
                    <img src={video.img} alt={video.name} />
                </div>
            </Link>
        </div>
    ))
    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-2xl font-bricolage6 dark:text-light">Youtube Videolar ▶️</h3>
                <Link target="_blank" to="https://www.youtube.com/@JasurCoder" className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
                    <span className='font-bricolage'>Barchasini Ko'rish</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
                        <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5"></path>
                    </svg>
                </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-4">
                {video}
            </div>
        </div>
    )
}

export default Youtube
