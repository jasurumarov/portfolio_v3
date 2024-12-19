import React from 'react'
import StackOverflowImg from '../../assets/images/stackoverflow.jpg'
import DarrovLogoImg from '../../assets/icons/companies/darrov.png'
import { Link, useParams } from 'react-router-dom'

const BlogDetail = () => {
    const { id } = useParams()

    return (
        <>
            {
                id == 1 ?
                    <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
                        <figure className="aspect-video overflow-hidden rounded-lg">
                            <img src={StackOverflowImg} alt="Stackoverflow" className="h-full w-full object-cover" />
                        </figure>

                        <ul className="mt-4 flex flex-wrap items-center gap-4 md:gap-6">
                            <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                                3 daq
                            </li>
                            <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                                Nov 6, 2024
                            </li>
                        </ul>

                        <article className="prose mt-6 dark:prose-invert xl:prose-lg prose-headings:font-bricolage5 prose-blockquote:border-primary lg:mt-10">
                            <h2 className="font-bricolage5 text-3xl text-[#111827] dark:text-white mb-6">📌 Ko'pchilik yosh dasturchilar beradigan savol: Stack Overflow nima?</h2>
                            <p className={"font-bricolage text-lg leading-8"}>
                                Stack Overflow - bu professional va beginner dasturchilar uchun savol-javoblar sayti.
                                Bu sayt 2008 yilda Jeff Atwood va Joel Spolsky tomonidan yaratilgan. Unda dasturlashning turli mavzulariga oid savol javoblar mavjud.
                            </p>

                            <h2 className={"font-bricolage5 mb-6 text-[#111827 dark:text-white text-3xl mt-12"}>Stackoverflow nomi kelib chiqishi 💡</h2>
                            <p className={"font-bricolage text-lg leading-8"}>
                                Web sayt nomi 2008-yil aprel oyida mashhur dasturlash blogi bo'lgan "Coding Horror" o'quvchilari tomonidan ovoz berish yo'li orqali tanlangan.
                            </p>
                        </article>

                        <div className="mt-10 flex flex-wrap justify-between gap-4">
                            <div className="flex flex-wrap items-center gap-5">
                                <h6 className="text-lg font-bricolage5 text-dark dark:text-light">Teglar:</h6>

                                <div className="flex flex-wrap gap-2">
                                    <p className="cursor-pointer inline-flex items-center justify-center gap-2 rounded border border-light bg-white px-2 py-1 text-center text-xs font-bricolage5 leading-none text-dark transition hover:bg-primary hover:text-white dark:border-dark dark:bg-dark-2 dark:text-light/70 dark:hover:bg-primary dark:hover:text-white">
                                        Dasturchilar
                                    </p>
                                    <p className="cursor-pointer inline-flex items-center justify-center gap-2 rounded border border-light bg-white px-2 py-1 text-center text-xs font-bricolage5 leading-none text-dark transition hover:bg-primary hover:text-white dark:border-dark dark:bg-dark-2 dark:text-light/70 dark:hover:bg-primary dark:hover:text-white">
                                        StackOverflow
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-5">
                                <h6 className="text-lg font-bricolage5 text-dark dark:text-light">Sahifalar:</h6>

                                <div className="flex flex-wrap items-center gap-2">
                                    <Link to="https://www.instagram.com/jasur.coder" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram h-6 w-6">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>
                                    </Link>
                                    <Link to="https://www.youtube.com/@JasurCoder" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                            <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022ZM10 15.5l6-3.5-6-3.5v7Z"></path>
                                        </svg>
                                    </Link>
                                    <Link to="https://github.com/jasurumarov" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                            <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"></path>
                                        </svg>
                                    </Link>
                                    <Link to="https://t.me/jasurcodes" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="currentColor" height="24" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>
                    : id == 2 ?
                        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
                            <figure className="aspect-video overflow-hidden rounded-lg">
                                <img src={DarrovLogoImg} alt="Darrov Logo" className="h-full w-full object-cover" />
                            </figure>

                            <ul className="mt-4 flex flex-wrap items-center gap-4 md:gap-6">
                                <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                                    2 daq
                                </li>
                                <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                                    Dec 19, 2024
                                </li>
                            </ul>

                            <article className="prose mt-6 dark:prose-invert xl:prose-lg prose-headings:font-bricolage5 prose-blockquote:border-primary lg:mt-10">
                                <h2 className="font-bricolage5 text-3xl text-[#111827] dark:text-white mb-6">📌 "DARROV" Dashboard: Restoranlar uchun yangi imkoniyatlar</h2>
                                <p className={"font-bricolage text-lg leading-8"}>
                                    Yaqinda men "DARROV" nomli ovqat yetkazib berish biznesi uchun maxsus restoranlar ishlatadigan dashboardni yaratdim. Ushbu loyiha restoran egalari va menejerlari uchun biznes jarayonlarini boshqarishni osonlashtirish va samaradorlikni oshirishga qaratilgan edi.
                                </p>

                                <h2 className={"font-bricolage5 mb-6 text-[#111827 dark:text-white text-3xl mt-12"}>Muammolar va Yechimlar 🛠️</h2>
                                <ul className='list-disc'>
                                    <li className={"list-inside font-bricolage text-lg leading-8"}>Buyurtmalarni boshqarishning murakkabligi.</li>
                                    <li className={"list-inside font-bricolage text-lg leading-8"}>Mahsulot qoldiqlarini kuzatishda qiyinchiliklar.</li>
                                    <li className={"list-inside font-bricolage text-lg leading-8"}>Analitik ma'lumotlarning yetishmasligi.</li>
                                </ul>

                                <h2 className={"font-bricolage5 mb-6 text-[#111827 dark:text-white text-3xl mt-12"}>Yechimlar 🚀</h2>
                                <ul className='list-disc'>
                                    <li className={"list-inside font-bricolage text-lg leading-8"}>Har bir buyurtmaning holatini real vaqt rejimida kuzatish.</li>
                                    <li className={"list-inside font-bricolage text-lg leading-8"}>Ombor qoldiqlarini avtomatik hisoblash va ogohlantirishlar.</li>
                                    <li className={"list-inside font-bricolage text-lg leading-8"}>Foydalanuvchilarga sotuvlar bo'yicha tahliliy ma'lumotlarni ko'rsatish.</li>
                                </ul>

                                <h2 className={"font-bricolage5 mb-6 text-[#111827 dark:text-white text-3xl mt-12"}>Texnologiyalar ⚙️</h2>
                                <ul className='list-disc'>
                                    <li className={"list-inside font-bricolage text-lg leading-8"}><b>Frontend:</b> React va Tailwind CSS yordamida qulay va intuitiv interfeys yaratildi.</li>
                                    <li className={"list-inside font-bricolage text-lg leading-8"}><b>Backend:</b> Node.js va Express ishlatilib, ma'lumotlarni tezkor qayta ishlash ta'minlandi.</li>
                                    <li className={"list-inside font-bricolage text-lg leading-8"}><b>Ma'lumotlar bazasi:</b> PostgreSQL orqali restoranlar ma'lumotlari xavfsiz saqlandi.</li>
                                </ul>

                                <h2 className={"font-bricolage5 mb-6 text-[#111827 dark:text-white text-3xl mt-12"}>Natijalar 📊</h2>
                                <ul className='list-disc'>
                                    <li className={"list-inside font-bricolage text-lg leading-8"}>Buyurtmalarni boshqarish tezligi sezilarli darajada oshdi.</li>
                                    <li className={"list-inside font-bricolage text-lg leading-8"}>Mahsulot zaxiralari haqida to'g'ri ma'lumotlar tufayli chiqindilar kamaydi.</li>
                                    <li className={"list-inside font-bricolage text-lg leading-8"}>Restoran egalari uchun qaror qabul qilish jarayonlari osonlashdi.</li>
                                </ul>

                                <h2 className={"font-bricolage5 mb-6 text-[#111827 dark:text-white text-3xl mt-12"}>Xulosa 📝</h2>
                                <p className={"font-bricolage text-lg leading-8"}>
                                    "DARROV" dashboardi restoranlar uchun nafaqat qulay boshqaruv vositasi, balki ularning biznesini yangi bosqichga olib chiqadigan innovatsion yechimga aylandi. Hozirda men ushbu kompaniyada ishlashni davom ettirib, loyihani yanada rivojlantirish ustida ishlamoqdaman.
                                    Portfolioimdagi boshqa loyihalar bilan ham tanishing va agar sizga shunga o'xshash yechim kerak bo'lsa, albatta bog'laning!
                                </p>
                            </article>

                            <div className="mt-10 flex flex-wrap justify-between gap-4">
                                <div className="flex flex-wrap items-center gap-5">
                                    <h6 className="text-lg font-bricolage5 text-dark dark:text-light">Teglar:</h6>

                                    <div className="flex flex-wrap gap-2">
                                        <p className="cursor-pointer inline-flex items-center justify-center gap-2 rounded border border-light bg-white px-2 py-1 text-center text-xs font-bricolage5 leading-none text-dark transition hover:bg-primary hover:text-white dark:border-dark dark:bg-dark-2 dark:text-light/70 dark:hover:bg-primary dark:hover:text-white">
                                            DARROV
                                        </p>
                                        <p className="cursor-pointer inline-flex items-center justify-center gap-2 rounded border border-light bg-white px-2 py-1 text-center text-xs font-bricolage5 leading-none text-dark transition hover:bg-primary hover:text-white dark:border-dark dark:bg-dark-2 dark:text-light/70 dark:hover:bg-primary dark:hover:text-white">
                                            CRM System
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center gap-5">
                                    <h6 className="text-lg font-bricolage5 text-dark dark:text-light">Sahifalar:</h6>

                                    <div className="flex flex-wrap items-center gap-2">
                                        <Link to="https://www.instagram.com/jasur.coder" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram h-6 w-6">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                            </svg>
                                        </Link>
                                        <Link to="https://www.youtube.com/@JasurCoder" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                                <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022ZM10 15.5l6-3.5-6-3.5v7Z"></path>
                                            </svg>
                                        </Link>
                                        <Link to="https://github.com/jasurumarov" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"></path>
                                            </svg>
                                        </Link>
                                        <Link to="https://t.me/jasurcodes" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="currentColor" height="24" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>
                                        </Link>
                                    </div>
                                </div>

                            </div>

                        </div>
                        : <></>
            }
        </>
    )
}
export default BlogDetail
