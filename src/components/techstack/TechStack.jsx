import React from 'react'

// Icons
import Icon1 from "../../assets/icons/techstacks/react.webp"
import Icon2 from "../../assets/icons/techstacks/next.svg"
import Icon3 from "../../assets/icons/techstacks/javascript.svg"
import Icon4 from "../../assets/icons/techstacks/typescript.png"
import Icon5 from "../../assets/icons/techstacks/redux.png"
import Icon6 from "../../assets/icons/techstacks/tailwind.svg"

const TechStack = () => {
    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
            <h3 className="text-2xl font-bricolage6 dark:text-light">Tech Stack</h3>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                <div className="text-center">
                    <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                        <img src={Icon1} alt="" className="h-8 w-8" />
                    </div>
                    <p className="mt-1 text-base font-bricolage5 text-dark dark:text-light/70">
                        React
                    </p>
                </div>
                <div className="text-center">
                    <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                        <img src={Icon2} alt="" className="h-8 w-8" />
                    </div>
                    <p className="mt-1 text-base font-bricolage5 text-dark dark:text-light/70">
                        Next
                    </p>
                </div>
                <div className="text-center">
                    <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                        <img src={Icon3} alt="" className="h-8 w-8" />
                    </div>
                    <p className="mt-1 text-base font-bricolage5 text-dark dark:text-light/70">
                        Javascript
                    </p>
                </div>
                <div className="text-center">
                    <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                        <img src={Icon4} alt="" className="h-8 w-8" />
                    </div>
                    <p className="mt-1 text-base font-bricolage5 text-dark dark:text-light/70">
                        TypeScript
                    </p>
                </div>
                <div className="text-center">
                    <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                        <img src={Icon5} alt="" className="h-8 w-8" />
                    </div>
                    <p className="mt-1 text-base font-bricolage5 text-dark dark:text-light/70">
                        Redux
                    </p>
                </div>
                <div className="text-center">
                    <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                        <img src={Icon6} alt="" className="h-8 w-8" />
                    </div>
                    <p className="mt-1 text-base font-bricolage5 text-dark dark:text-light/70">
                        Tailwind
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TechStack
