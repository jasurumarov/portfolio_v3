import React, { useMemo } from 'react'
import ExperienceData from './ExperienceData'
// import './Experience.scss';

const Experience = () => {
    const experiences = useMemo(() =>
        ExperienceData?.map(experience => (
            <div key={experience.id} className={`flex flex-col items-start md:items-center gap-1 md:flex-row ${experience.isPresent ? "md:gap-[14px]" : "md:gap-8"}`}>
                <p className="mt-1 text-nowrap text-sm font-bricolage5 text-muted dark:text-light/70">
                    {experience.startYear} - {experience.endYear}
                </p>
                <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 shrink-0 place-content-center overflow-hidden rounded-lg bg-light dark:bg-dark-2">
                        <img src={experience.img} alt={experience.name} className="h-8 w-8" />
                    </div>
                    <div>
                        <h6 className="text-base font-bricolage6 text-dark dark:text-light/70">
                            {experience.name}
                        </h6>
                        <p className="text-sm text-muted">
                            {experience.desc}
                        </p>
                    </div>
                </div>
            </div>
        )), [ExperienceData]);
    return (
        <div className="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-black dark:shadow-dark">
            <h3 className="relative z-10 bg-white pb-2 pt-6 text-2xl font-bricolage6 dark:bg-black dark:text-light">
                Tajriba
            </h3>

            <div className="space-y-4 overflow-hidden pb-6 pt-4 [&amp;::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&amp;::-webkit-scrollbar-thumb]:bg-slate-500 [&amp;::-webkit-scrollbar-track]:bg-transparent [&amp;::-webkit-scrollbar]:w-0">
                <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
                    {experiences}
                </div>
            </div>
        </div>
    )
}

export default React.memo(Experience);