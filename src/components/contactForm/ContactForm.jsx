import React from 'react'
import { useGetInputValue } from '../../hooks/useGetInputValue'

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

// Token and ID
const BOT_TOKEN = "7167621990:AAFEFIaAPwbfqpugbkwxmUFp0CyADqu1J8Y"
const CHAT_ID = "-1002035440165"

// InitialState
let initialState = {
    name: "",
    number: "",
    message: ""
}

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
    const { formData, setFormData, handleChange } = useGetInputValue(initialState)
    const handleSendToTelegram = e => {
        e.preventDefault()
        console.log(formData);
        let text = `FIO: <b>${formData.name}</b>`
        text += "%0A"
        text += `Tel: <b>${formData.number}</b>`
        text += "%0A"
        text += `Message: <b>${formData.message}</b>`
        text += "%0A"
        text += "%0A"
        text += `<b>Messages from JasurCoder Platform</b>`

        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`
        let api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()

        setFormData(initialState)
    }

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
            <form onSubmit={handleSendToTelegram} className='bg-light dark:bg-dark-2 rounded-lg p-6 mt-10 lg:mt-10 grid grid-cols-2 gap-y-6'>
                <div className='col-span-3 flex flex-col sm:flex-row gap-6'>
                    <div className='flex flex-col gap-[6px] w-full'>
                        <label className='text-[15px] font-bricolage dark:text-light/70' htmlFor="name">Ism Familya</label>
                        <input onChange={handleChange} value={formData.name} required className='w-full py-4 px-6 dark:bg-black font-bricolage rounded-lg border border-solid border-[#DBDFE5] focus:border-dark outline-none dark:border-dark transition-colors' placeholder='Ismingizni kiriting' id='name' name='name' type="text" />
                    </div>
                    <div className='flex flex-col gap-[6px] w-full'>
                        <label className='text-[15px] font-bricolage dark:text-light/70' htmlFor="number">Telefon Raqam</label>
                        <input onChange={handleChange} value={formData.number} required className='w-full py-4 px-6 dark:bg-black font-bricolage rounded-lg border border-solid border-[#DBDFE5] focus:border-dark outline-none dark:border-dark transition-colors' placeholder='Raqamingizni kiriting' id='number' name='number' type="tel" />
                    </div>
                </div>
                <div className='flex flex-col gap-[6px] col-span-3'>
                    <label className='text-[15px] font-bricolage dark:text-light/70' htmlFor="message">Xabar</label>
                    <textarea onChange={handleChange} value={formData.message} required rows={6} className='w-full py-4 px-6 dark:bg-black font-bricolage rounded-lg border border-solid border-[#DBDFE5] focus:border-dark outline-none dark:border-dark transition-colors' placeholder='Xabaringizni kiriting' name="message" id="message"></textarea>
                </div>
                <button className='col-span-3 rounded-lg bg-primary py-4 font-bricolage5 text-white '>Jo'natish</button>
            </form>
            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
                {socialMedia}
            </div>

        </div>
    )
}

export default ContactForm
