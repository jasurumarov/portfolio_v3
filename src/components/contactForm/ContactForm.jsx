import React from 'react'

// Icons
import Icon1 from '../../assets/icons/socialMedia/youtube.svg'
import Icon2 from '../../assets/icons/socialMedia/telegram.svg'
import Icon3 from '../../assets/icons/socialMedia/whatsapp.png'
import Icon4 from '../../assets/icons/socialMedia/gmail.svg'
import Icon5 from '../../assets/icons/socialMedia/github.png'
import Icon6 from '../../assets/icons/socialMedia/instagram.svg'
import Icon7 from '../../assets/icons/socialMedia/linkedin.svg'
import Icon8 from '../../assets/icons/socialMedia/facebook.svg'
import { Link } from 'react-router-dom'

const socialData = [
    {
        id: 1,
        img: Icon1,
        Link: 'https://www.youtube.com/@JasurCoder',
        alt: 'Youtube'
    },
    {
        id: 2,
        img: Icon2,
        Link: 'https://t.me/UmarovJasurbek',
        alt: 'Telegram'
    },
    {
        id: 3,
        img: Icon3,
        Link: 'https://wa.me/+998942918646',
        alt: 'Whatsapp'
    },
    {
        id: 6,
        img: Icon6,
        Link: 'https://www.instagram.com/jasur.coder',
        alt: 'Instagram'
    },
    {
        id: 5,
        img: Icon5,
        Link: 'https://github.com/jasurumarov',
        alt: 'Github'
    },
    {
        id: 7,
        img: Icon7,
        Link: 'https://www.linkedin.com/in/jasurumarov',
        alt: 'Linkedin'
    },
    {
        id: 8,
        img: Icon8,
        Link: 'https://www.facebook.com/share/VCGJijCnSLU3pEAk/?mibextid=LQQJ4d',
        alt: 'Facebook'
    },
    {
        id: 4,
        img: Icon4,
        Link: 'mailto:umarovjasurcoder@gmail.com',
        alt: 'Gmail'
    },
]

const ContactForm = () => {
    let socialMedia = socialData?.map(item => (
        <Link key={item.id} to={item.Link} target="_blank" className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
            <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                <img src={item.img} alt={item.alt} className="h-16 rounded-lg" />
            </div>
        </Link>
    ))
    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
            <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
                <div className="">
                    <h2 className="text-3xl font-bricolage6 text-dark dark:text-light lg:text-[40px]">
                        Men <span className="text-primary">bilan</span> Ishlang 👋
                    </h2>
                    <p className="mt-4 font-bricolage text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl">
                        Hamkorlik, taklif, maslahat va har qanday savol va mavzu bo'yicha&nbsp;
                        <span className="font-bricolage6 text-dark dark:text-white">
                            Men bilan bog'laning!
                        </span>
                    </p>
                </div>
                <div className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-bricolage5 leading-none text-primary dark:bg-dark-2 lg:text-lg">
                    <span className="relative flex h-2 w-2 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-light"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    <span className='font-bricolage'>Online</span>
                </div>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:mt-14">
                {socialMedia}
            </div>

        </div>
    )
}

export default ContactForm
