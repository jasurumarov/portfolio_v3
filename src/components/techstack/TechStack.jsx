import React from 'react'

// Icons
import Icon1 from "../../assets/icons/techstacks/react.webp"
import Icon2 from "../../assets/icons/techstacks/next.svg"
import Icon3 from "../../assets/icons/techstacks/javascript.svg"
import Icon4 from "../../assets/icons/techstacks/typescript.png"
import Icon5 from "../../assets/icons/techstacks/redux.png"
import Icon6 from "../../assets/icons/techstacks/tailwind.svg"

const techstackData = [
    {
        id: 1,
        name: "React",
        img: Icon1
    },
    {
        id: 2,
        name: "Next",
        img: Icon2
    },
    {
        id: 3,
        name: "Javascript",
        img: Icon3
    },
    {
        id: 4,
        name: "TypeScript",
        img: Icon4
    },
    {
        id: 5,
        name: "Redux",
        img: Icon5
    },
    {
        id: 6,
        name: "Tailwind",
        img: Icon6
    },
]

const TechStack = () => {
    let techstacks = techstackData?.map(stack => (
        <div key={stack.id} className="text-center">
            <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                <img src={stack.img} alt={stack.name} className="h-8 w-8" />
            </div>
            <p className="mt-1 text-base font-bricolage5 text-dark dark:text-light/70">
                {stack.name}
            </p>
        </div>
    ))
    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
            <h3 className="text-2xl font-bricolage6 dark:text-light">Tech Stack</h3>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                {techstacks}
            </div>
        </div>
    )
}

export default React.memo(TechStack);