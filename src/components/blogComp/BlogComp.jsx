import React from 'react'
import { Link } from 'react-router-dom'

const BlogComp = () => {
    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
            <div className="">
                <h2 className="text-3xl font-bricolage6 leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
                    Blog & Articles
                </h2>
                <p className="font-bricolage mt-4 text-lg text-muted dark:text-light/70">
                    Yangiliklar, maslahatlar va tajribalarim bilan shu yerda tanishing.
                </p>
            </div>

            <div className="mt-10 lg:mt-14">
                <div className="mt-6 space-y-6">

                    <div className="">
                        <div className="mt-6">
                            <h2 className="text-xl font-bricolage5 xl:text-2xl">
                                <Link to="1" className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary">
                                    📌 Ko'pchilik yosh dasturchilar beradigan savol: Stack Overflow nima?
                                </Link>
                            </h2>
                            <ul className="mt-1 flex flex-wrap items-center gap-2">
                                <li className="font-bricolage relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                                    &nbsp;3 daq
                                </li>
                                <li className="font-bricolage relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                                    &nbsp;Nov 6, 2024
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogComp
