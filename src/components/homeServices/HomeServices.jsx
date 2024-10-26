import React from 'react'
import { Link } from 'react-router-dom'

// Icons
import Icon1 from "../../assets/icons/services/icon1.png"
import Icon2 from "../../assets/icons/services/icon2.png"
import Icon3 from "../../assets/icons/services/icon3.png"
import Icon4 from "../../assets/icons/services/icon4.png"
import Icon5 from "../../assets/icons/services/icon5.png"
import Icon6 from "../../assets/icons/services/icon6.png"

const servicesData = [
    {
        id: 1,
        name: "Landing Page",
        img: Icon1
    },
    {
        id: 2,
        name: "Blog Website",
        img: Icon2
    },
    {
        id: 3,
        name: "Admin Panel",
        img: Icon3
    },
    {
        id: 4,
        name: "Online Market",
        img: Icon4
    },
    {
        id: 5,
        name: "CRM System",
        img: Icon5
    },
    {
        id: 6,
        name: "Telegram Bot",
        img: Icon6
    },
]

const HomeServices = () => {
    let services = servicesData?.map(service => (
        <div key={service.id} className="text-center bg-light dark:bg-dark-2 p-2 pb-4 md:p-4 md:pb-6 rounded-2xl">
            <div className="grid place-content-center rounded-lg bg-white py-[25px] px-[14px] dark:bg-black">
                <img src={service.img} alt={service.name} className="h-[65px] w-[65px]" />
            </div>
            <p className="mt-4 text-base font-bricolage5 text-dark dark:text-light/70">
                {service.name}
            </p>
        </div>
    ))
    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-2xl font-bricolage6 dark:text-light">Xizmatlar</h3>
                <Link to="/services" className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
                    <span className='font-bricolage'>Barchasini Ko'rish</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" className="h-5 w-5">
                        <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5"></path>
                    </svg>
                </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {services}
            </div>
        </div>
    )
}

export default HomeServices
