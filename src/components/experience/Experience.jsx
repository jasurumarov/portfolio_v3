import React from 'react'
// import './Experience.scss';

// Images
import CompanyImg1 from '../../assets/icons/companies/kindle.jpg'
import CompanyImg2 from '../../assets/icons/companies/aiko.png'
import CompanyImg3 from '../../assets/icons/companies/free.png'

const Experience = () => {
    return (
        <div className="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-black dark:shadow-dark">
            <h3 className="relative z-10 bg-white pb-2 pt-6 text-2xl font-bricolage6 dark:bg-black dark:text-light">
                Tajriba
            </h3>

            <div className="space-y-4 overflow-hidden pb-6 pt-4 [&amp;::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&amp;::-webkit-scrollbar-thumb]:bg-slate-500 [&amp;::-webkit-scrollbar-track]:bg-transparent [&amp;::-webkit-scrollbar]:w-0">
                <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
                    <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                        <p className="mt-1 text-sm font-bricolage5 text-muted dark:text-light/70">
                            2023 - 2024
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="grid h-8 w-8 shrink-0 place-content-center overflow-hidden rounded-lg bg-light dark:bg-dark-2">
                                <img src={CompanyImg1} alt="Kindle market" className="h-8 w-8" />
                            </div>
                            <div className="">
                                <h6 className="text-base font-bricolage6 text-dark dark:text-light/70">
                                    Kindle market
                                </h6>
                                <p className="text-sm text-muted">
                                    React Frontend Developer
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                        <p className="mt-1 text-sm font-bricolage5 text-muted dark:text-light/70">
                            2022 - 2023
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="grid h-8 w-8 shrink-0 overflow-hidden place-content-center rounded-lg bg-light dark:bg-dark-2">
                                <img src={CompanyImg2} alt="AIKO" className="h-8 w-8 object-contain" />
                            </div>
                            <div className="">
                                <h6 className="text-base font-bricolage6 text-dark dark:text-light/70">
                                    AIKO
                                </h6>
                                <p className="text-sm text-muted">
                                    Intern Frontend Developer
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                        <p className="mt-1 text-sm font-bricolage5 text-muted dark:text-light/70">
                            2021 - 2022&nbsp;
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg overflow-hidden bg-light dark:bg-dark-2">
                                <img src={CompanyImg3} alt="Freelancer" className="h-8 w-8" />
                            </div>
                            <div className="">
                                <h6 className="text-base font-bricolage6 text-dark dark:text-light/70">
                                    Freelancer
                                </h6>
                                <p className="text-sm text-muted">React, Next Frontend Develop </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
