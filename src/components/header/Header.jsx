import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.scss"

const navlistData = [
    {
        id: 1,
        label: "Asosiy",
        SvgComponent: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                <path d="M15.833 7.258 11.39 3.802a2.222 2.222 0 0 0-2.728 0L4.216 7.258a2.22 2.22 0 0 0-.858 1.754v6a1.667 1.667 0 0 0 1.667 1.667h10a1.667 1.667 0 0 0 1.667-1.666v-6c0-.686-.317-1.334-.859-1.755Z"></path>
                <path d="M13.333 12.5c-1.841 1.11-4.826 1.11-6.667 0"></path>
            </svg>
        ),
        path: '/'
    },
    // {
    //     id: 2,
    //     label: "Xizmatlar",
    //     SvgComponent: () => (
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke='currentColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" className="h-6 w-6 -mb-[4px] -mr-1 ml-[1.5px] text-center text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
    //             <path d="M7.99967 1.3335L1.33301 4.66683L7.99967 8.00016L14.6663 4.66683L7.99967 1.3335Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
    //             <path d="M1.33301 8L7.99967 11.3333L14.6663 8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" ></path>
    //             <path d="M1.33301 11.3335L7.99967 14.6668L14.6663 11.3335" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" ></path>
    //         </svg>
    //     ),
    //     path: '/services'
    // },
    {
        id: 3,
        label: "Loyihalar",
        SvgComponent: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                <path d="m3.503 5.998 5.949-2.591a.8.8 0 0 1 1.058.439l4.103 9.918a.834.834 0 0 1-.428 1.087l-5.948 2.59a.8.8 0 0 1-1.059-.438l-4.103-9.92a.833.833 0 0 1 .428-1.085ZM13 3.333h.833a.833.833 0 0 1 .834.834v2.916M17.167 5c.22.093.433.18.64.263a.833.833 0 0 1 .442 1.092l-1.915 4.478"></path>
            </svg>
        ),
        path: '/projects'
    },
    {
        id: 4,
        label: "Blog",
        SvgComponent: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                <path d="m14.667 9.167 1.25-1.25a2.357 2.357 0 1 0-3.333-3.334l-8.75 8.75v3.334h3.333L8.834 15m2.916-9.583 3.333 3.333m.417 9.583 2.792-2.736a1.785 1.785 0 0 0 .004-2.56 1.87 1.87 0 0 0-2.608-.005l-.186.184-.186-.184a1.869 1.869 0 0 0-2.607-.005 1.787 1.787 0 0 0-.005 2.56l2.796 2.746Z"></path>
            </svg>
        ),
        path: '/blog'
    },
    {
        id: 5,
        label: "A'loqa",
        SvgComponent: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                <path d="M6.667 7.5h6.666m-6.666 3.333h5M15 3.333a2.5 2.5 0 0 1 2.5 2.5V12.5A2.5 2.5 0 0 1 15 15h-4.167l-4.166 2.5V15H5a2.5 2.5 0 0 1-2.5-2.5V5.833a2.5 2.5 0 0 1 2.5-2.5h10Z"></path>
            </svg>
        ),
        path: '/contact'
    }
];

const Header = () => {
    const [theme, setTheme] = useState("light");
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    const toggleDarkMode = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };



    let navListItem = navlistData.map(item => (
        <li key={item.id} className='group'>
            <NavLink
                className={'header__navlink inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white'}
                to={item.path}
            >
                <item.SvgComponent />
                <span className='font-bricolage5'>{item.label}</span>
            </NavLink>
        </li>
    ));
    let mobileNavListItem = navlistData.map(item => (
        <li onClick={handleMobileMenuToggle} key={item.id} className="group/menu-item">
            <NavLink to={item.path} className="header__navlink group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-bricolage5 text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                <item.SvgComponent />
                <span>{item.label}</span>
            </NavLink>
        </li>
    ));
    return (
        <>
            <header className='sticky top-0 z-50'>
                <nav className='flex items-center justify-between rounded-2xl bg-white p-3 shadow dark:bg-black dark:shadow-dark'>
                    <NavLink to={'/'} className="inline-flex items-center gap-3 px-3 text-2xl font-bricolage6 text-dark dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                            <path fill="currentColor" d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"></path>
                        </svg>
                        <span> Jasur<span className='text-primary'>Coder</span> </span>
                    </NavLink>
                    <ul className='hidden flex-1 gap-1 flex-wrap items-center justify-center lg:flex'>
                        {navListItem}
                    </ul>
                    <div className="hidden items-center gap-4 lg:flex">
                        <button onClick={toggleDarkMode} type="button" className="flex h-10 w-10 items-center justify-center rounded-lg text-center font-medium hover:bg-light  dark:hover:bg-dark dark:text-[#FD7E41]" data-hs-theme-click-value="dark">
                            {theme === "light" ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                                    <path d="M11.8 3a8.656 8.656 0 0 0-4.523 1.28A8.918 8.918 0 0 0 4.04 7.756a9.167 9.167 0 0 0 .44 9.24 8.863 8.863 0 0 0 3.553 3.137 8.633 8.633 0 0 0 4.624.824 8.69 8.69 0 0 0 4.381-1.723 8.973 8.973 0 0 0 2.892-3.78c.3-.738-.419-1.48-1.142-1.179a5.604 5.604 0 0 1-3.892.15 5.74 5.74 0 0 1-3.083-2.431 5.956 5.956 0 0 1-.848-3.886c.17-1.357.8-2.61 1.78-3.541l.069-.072c.485-.567.099-1.488-.668-1.488h-.234l-.06-.005L11.8 3Z"></path>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                                    <path d="M10 15.833a.833.833 0 0 1 .828.736l.005.098v.833a.833.833 0 0 1-1.66.097l-.006-.097v-.833a.833.833 0 0 1 .833-.834Zm5.26-1.741.08.069.582.583a.833.833 0 0 1-1.1 1.248l-.078-.07-.583-.583a.833.833 0 0 1 1.015-1.306l.085.059Zm-9.42.068a.833.833 0 0 1 .068 1.1l-.069.08-.583.582a.833.833 0 0 1-1.248-1.1l.07-.078.583-.583a.833.833 0 0 1 1.178 0ZM3.333 9.167a.833.833 0 0 1 .098 1.66l-.098.006H2.5a.833.833 0 0 1-.098-1.66l.098-.006h.833Zm14.167 0a.833.833 0 0 1 .098 1.66l-.098.006h-.833a.833.833 0 0 1-.098-1.66l.098-.006h.833ZM5.178 4.008l.078.07.583.583a.833.833 0 0 1-1.1 1.247l-.078-.069-.583-.583A.833.833 0 0 1 5.092 3.95l.086.058Zm10.744.069a.833.833 0 0 1 .07 1.1l-.07.079-.583.583a.833.833 0 0 1-1.247-1.1l.069-.078.583-.584a.833.833 0 0 1 1.178 0ZM10 1.667a.833.833 0 0 1 .828.736l.005.097v.833a.833.833 0 0 1-1.66.098l-.006-.098V2.5A.833.833 0 0 1 10 1.667Zm0 4.166a4.167 4.167 0 1 1-4.163 4.348L5.833 10l.004-.18A4.167 4.167 0 0 1 10 5.832Z"></path>
                                </svg>
                            )}
                        </button>

                        <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-dark px-6 py-4 text-center text-base font-bricolage6 leading-tight text-white transition hover:bg-primary dark:bg-dark-2 dark:text-white dark:hover:bg-primary dark:hover:text-white">
                            <span>Birga ishlang</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
                                <path d="M17.5 11.667v-5h-5"></path>
                                <path d="m17.5 6.667-7.5 7.5-7.5-7.5"></path>
                            </svg>
                        </Link>
                    </div>
                    <button onClick={handleMobileMenuToggle} type="button" className="text-dark transition dark:text-white/70 lg:hidden" data-hs-overlay="#mobile-menu" aria-controls="mobile-menu" aria-label="Toggle navigation">
                        <span className="sr-only">Navigatsiya</span>
                        <svg className="h-9 w-9 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                        </svg>
                    </button>
                </nav>
                <aside id="mobile-menu" className={`hs-overlay fixed bottom-0 start-0 top-0 z-[60] h-full w-64 -translate-x-full transform overflow-y-auto bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : ''} dark:bg-black [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-thumb]:bg-gray-300 [&amp;::-webkit-scrollbar-track]:bg-gray-100 [&amp;::-webkit-scrollbar]:w-2 open opened`} tabIndex="-1">
                    <div className="flex h-full flex-col justify-between gap-5 p-5">
                        <div className="">
                            <Link onClick={handleMobileMenuToggle} to="/" className="inline-flex items-center gap-3 px-3 text-2xl font-bricolage6 text-dark dark:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                                    <path fill="currentColor" d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"></path>
                                </svg>

                                <span> JCoder </span>
                            </Link>
                        </div>

                        <ul className="mt-4 flex flex-1 flex-col gap-2">
                            {mobileNavListItem}
                        </ul>

                        <div className="flex flex-col gap-3">
                            <button onClick={toggleDarkMode} data-hs-theme-click-value="dark" className="hs-dark-mode flex w-full items-center font-bricolage5 justify-start gap-2 rounded-lg px-4 py-2 text-center text-sm text-muted transition hover:bg-light hs-dark-mode-active:hidden dark:hover:bg-dark dark:hover:text-white">
                                {theme === "light" ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                                            <path d="M11.8 3a8.656 8.656 0 0 0-4.523 1.28A8.918 8.918 0 0 0 4.04 7.756a9.167 9.167 0 0 0 .44 9.24 8.863 8.863 0 0 0 3.553 3.137 8.633 8.633 0 0 0 4.624.824 8.69 8.69 0 0 0 4.381-1.723 8.973 8.973 0 0 0 2.892-3.78c.3-.738-.419-1.48-1.142-1.179a5.604 5.604 0 0 1-3.892.15 5.74 5.74 0 0 1-3.083-2.431 5.956 5.956 0 0 1-.848-3.886c.17-1.357.8-2.61 1.78-3.541l.069-.072c.485-.567.099-1.488-.668-1.488h-.234l-.06-.005L11.8 3Z"></path>
                                        </svg>

                                        <span>Qora</span>
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                                            <path d="M10 15.833a.833.833 0 0 1 .828.736l.005.098v.833a.833.833 0 0 1-1.66.097l-.006-.097v-.833a.833.833 0 0 1 .833-.834Zm5.26-1.741.08.069.582.583a.833.833 0 0 1-1.1 1.248l-.078-.07-.583-.583a.833.833 0 0 1 1.015-1.306l.085.059Zm-9.42.068a.833.833 0 0 1 .068 1.1l-.069.08-.583.582a.833.833 0 0 1-1.248-1.1l.07-.078.583-.583a.833.833 0 0 1 1.178 0ZM3.333 9.167a.833.833 0 0 1 .098 1.66l-.098.006H2.5a.833.833 0 0 1-.098-1.66l.098-.006h.833Zm14.167 0a.833.833 0 0 1 .098 1.66l-.098.006h-.833a.833.833 0 0 1-.098-1.66l.098-.006h.833ZM5.178 4.008l.078.07.583.583a.833.833 0 0 1-1.1 1.247l-.078-.069-.583-.583A.833.833 0 0 1 5.092 3.95l.086.058Zm10.744.069a.833.833 0 0 1 .07 1.1l-.07.079-.583.583a.833.833 0 0 1-1.247-1.1l.069-.078.583-.584a.833.833 0 0 1 1.178 0ZM10 1.667a.833.833 0 0 1 .828.736l.005.097v.833a.833.833 0 0 1-1.66.098l-.006-.098V2.5A.833.833 0 0 1 10 1.667Zm0 4.166a4.167 4.167 0 1 1-4.163 4.348L5.833 10l.004-.18A4.167 4.167 0 0 1 10 5.832Z"></path>
                                        </svg>

                                        <span>Oq</span>
                                    </>
                                )}

                            </button>

                            <button data-hs-theme-click-value="light" className="hs-dark-mode hidden w-full items-center font-bricolage5 justify-start gap-2 rounded-lg px-4 py-2 text-center text-sm text-muted transition hover:bg-light hs-dark-mode-active:flex dark:hover:bg-dark dark:hover:text-white">

                            </button>

                            <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-dark px-6 py-4 text-center text-base font-bricolage6 leading-tight text-white transition hover:bg-primary dark:bg-dark-2 dark:text-white dark:hover:bg-primary dark:hover:text-white">
                                <span>Birga ishlang</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
                                    <path d="M17.5 11.667v-5h-5"></path>
                                    <path d="m17.5 6.667-7.5 7.5-7.5-7.5"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </aside>
                <div id="mobile-menu-backdrop" onClick={handleMobileMenuToggle} style={{ zIndex: "59" }} data-hs-overlay-backdrop-template="" className={`${isMobileMenuOpen ? 'block' : "hidden"} duration fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 dark:bg-neutral-900 `}></div>
            </header>
        </>
    );
}

export default Header;
