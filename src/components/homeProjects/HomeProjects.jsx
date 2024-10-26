import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';

// Images
import Image1 from "../../assets/images/projects/nornlight1.png";
import Image2 from "../../assets/images/projects/e-comm1.png";

const HomeProjects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    // Array of project links
    const projectLinks = [
        "https://nornlight-pearl.vercel.app/",
        "https://e-comm7.vercel.app/"
    ];

    const openLightbox = (image) => {
        setCurrentImage(image);
        setIsOpen(true);
    };

    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-2xl font-bricolage6 dark:text-light">Loyihalar</h3>
                <Link to="/projects" className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
                    <span className='font-bricolage'>Barchasi</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
                        <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5"></path>
                    </svg>
                </Link>
            </div>

            <div className="mt-6 space-y-6">
                {[Image1, Image2].map((image, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
                        <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                            <img
                                src={image}
                                alt={`project-${index}`}
                                className="max-h-[208px] w-full rounded-t-lg object-cover object-top transition cursor-pointer"
                            />

                            {/* The button that opens the lightbox */}
                            <button
                                onClick={() => openLightbox(image)} // Open lightbox on button click
                                className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
                                    <path d="M10 4.167v11.666M4.167 10h11.666"></path>
                                </svg>
                            </button>

                            <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                                <a href={projectLinks[index]} target="_blank" rel="noopener noreferrer">
                                    <span className="rounded bg-white px-2 py-1 text-xs font-bricolage5 text-primary shadow">
                                        {index === 0 ? 'Nornlight' : 'E-comm'}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isOpen && (
                <Lightbox
                    image={currentImage}
                    title="Project Image"
                    onClose={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default HomeProjects;