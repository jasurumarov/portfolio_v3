import React from 'react'

// Images
import Img1 from "../../assets/images/projects/nornlightpr.png"
import Img2 from "../../assets/images/projects/aikopr.png"
import Img3 from "../../assets/images/projects/e-commpr.png"
import Img4 from "../../assets/images/projects/u-devspr.png"
import { Link } from 'react-router-dom'

const projectsData = [
    {
        id: 1,
        img: Img1,
        name: "Nornlight - Clone",
        desc: "Rossiyadagi 'Nornlight' online bozorining clone versiyasi",
        link: "https://nornlight-pearl.vercel.app/"
    },
    {
        id: 2,
        img: Img2,
        name: "AIKO - Admin Dashboard",
        desc: "'AIKO' kompanyasi uchun admin dashboard. Maxfiyligi sabab link qo'ymadim",
        link: "/"
    },
    {
        id: 3,
        img: Img3,
        name: "E-Comm",
        desc: "Kwork freelancing platform orqali olingan loyiha, productionga chiqmagani sababli fake api ulab loyihalarim orasiga qo'shdim",
        link: "https://e-comm7.vercel.app/"
    },
    {
        id: 4,
        img: Img4,
        name: "Udevs - Clone",
        desc: "Apex tech kompanyasiga ishga kirayotganimda texnik suhbatda berilgan task",
        link: "https://udevs-clone-omega.vercel.app/"
    }
]

const ProjectsComp = () => {
    let projects = projectsData?.map(project => (
        <div key={project.id}>
            <div className="relative">
                <a href={project.link} target="_blank" className="group max-h-[180px] block aspect-6/4 overflow-hidden rounded-lg">
                    <img src={project.img} alt={project.name} className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105" />
                </a>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-bricolage5 xl:text-2xl">
                    <a href={project.link} target="_blank" className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary">
                        {project.name}
                    </a>
                </h2>
                <p className="font-bricolage lg:text-base mt-1 text-gray-400 text-sm">
                    {project.desc}
                </p>
            </div>
        </div>
    ))
    return (
        <section className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
            <div className="">
                <h2 className="text-3xl font-bricolage6 leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
                    Loyihalar
                </h2>
                <p className="font-bricolage mt-4 text-lg text-muted dark:text-light/70">
                    Startaplar va mustaqil ishlangan dasturiy loyihalarim
                </p>
            </div>

            <div className="mt-10 lg:mt-14">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
                    {projects}
                </div>
            </div>
            <marquee behavior="scroll" direction="left" className="mt-16 overflow-hidden text-nowrap rounded-lg bg-light p-3 sm:p-4 lg:p-5 text-xl sm:text-2xl lg:text-3xl font-bricolage5 text-muted dark:bg-dark-2">
                <Link to={'/contact'} className='hover:text-black dark:hover:text-white transition'>
                    Birga ishlaymizmi?👋 Startup 🚀 Loyiha 🗂️ Intervyu 🎥 Investitsiya 💰 Sherikchilik ✊ Birga ishlaymizmi?👋 Startup 🚀 Loyiha 🗂️ Intervyu 🎥 Investitsiya 💰 Sherikchilik ✊ Birga ishlaymizmi?👋 Startup 🚀 Loyiha 🗂️ Intervyu 🎥 Investitsiya 💰 Sherikchilik ✊
                </Link>
            </marquee>
        </section>
    )
}

export default React.memo(ProjectsComp);