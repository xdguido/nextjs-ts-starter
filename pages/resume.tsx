import Button from '@ui/Button';
import { FiPrinter } from 'react-icons/fi';
import { NextSeo } from 'next-seo';
export default function Resume() {
    return (
        <>
            <NextSeo title="Guido Gennari | Resume" />
            <div
                id="resume"
                className="flex flex-col gap-20 lg:gap-28 print:gap-6 relative pt-[6rem] md:pt-[8rem] lg:pt-[12rem] min-h-screen print:pt-8 print:text-black"
            >
                <div className="flex flex-col gap-3 print:gap-2">
                    <div className="flex justify-between">
                        <h1 className="text-5xl sm:text-7xl">
                            <span className="font-bold">GUIDO</span> GENNARI
                        </h1>
                        <Button
                            className="print:hidden"
                            style="link"
                            onClick={() => window.print()}
                        >
                            Print <FiPrinter />
                        </Button>
                    </div>
                    <h2 className="text-xl">Full-stack web developer</h2>
                </div>
                <section id="about" className="flex flex-col gap-6 print:gap-4">
                    <div className="grid items-baseline print:grid-cols-4 lg:grid-cols-4">
                        <h3 className="print:col-start-2 lg:col-start-2 text-2xl font-semibold text-blue-600">
                            About
                        </h3>
                    </div>
                    <div className="grid items-baseline print:grid-cols-4 lg:grid-cols-4">
                        <p className="sm:text-sm print:col-start-2 lg:col-start-2 print:col-span-3 lg:col-span-3 mb-2">
                            I{"'"}m a <span className="font-semibold">full-stack developer</span>{' '}
                            with expertise in building web sites and web applications. As much as I
                            enjoy the technical aspects of my work, I also value collaboration and
                            teamwork. I{"'"}m currently looking for opportunities to work with a
                            team where I can contribute my skills and work with others to create
                            <span className="font-semibold"> high-quality products.</span>
                        </p>
                        <p className="sm:text-sm print:col-start-2 lg:col-start-2 print:col-span-3 lg:col-span-3 mb-2">
                            My experience includes UI and API development, database management,
                            production code writing and testing. I{"'"}m comfortable working with a
                            variety of programming languages and frameworks, and I{"'"}m always
                            eager to learn new tools and technologies. I{"'"}m passionate about
                            creating products that are user-friendly, efficient, and scalable.
                        </p>
                        <p className="sm:text-sm print:col-start-2 lg:col-start-2 print:col-span-3 lg:col-span-3">
                            If you{"'"}re looking for a{' '}
                            <span className="font-semibold">team player</span> who is dedicated to
                            delivering high-quality work, I{"'"}d love to hear from you. Please don
                            {"'"}t hesitate to get in touch if you think I could be a good fit for
                            your team.
                        </p>
                    </div>
                </section>
                <section id="experience" className="flex flex-col gap-6 print:gap-4">
                    <div className="grid items-baseline print:grid-cols-4 lg:grid-cols-4">
                        <h3 className="print:col-start-2 lg:col-start-2 text-2xl font-semibold text-blue-600">
                            Experience
                        </h3>
                    </div>
                    <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
                        <div className="print:text-right lg:text-right">
                            <span className="">Mar 2023 - Present</span>
                        </div>
                        <div className="print:col-span-3 lg:col-span-3">
                            <h2 className="mb-2">
                                <span className="font-semibold">Full-stack web developer</span>
                            </h2>
                        </div>
                        <div className="text-sm print:text-right lg:text-right">
                            <span className="">Self-employed</span>
                        </div>
                        <div className="print:col-span-3 lg:col-span-3">
                            <p className="sm:text-sm mb-2">
                                Developing a fully-functional E-commerce Web Application for a
                                Furniture Factory. The application will feature an easy-to-use
                                interface where customers can browse products, add items to their
                                shopping cart, and complete their purchase securely.
                            </p>
                            <ul className="ml-5  sm:text-sm list-disc">
                                <li className="mb-1">
                                    Designed and developed an e-commerce Frontend using Next.js,
                                    TailwindCSS and React headless components.
                                </li>
                                <li className="mb-1">
                                    Designed and developed an e-commerce Backend and Data Base using
                                    Next.js API Routes, Prisma and PosgreSQL.
                                </li>
                                <li className="mb-1">
                                    Deployment with Vercel, Heroku and GitHub Actions.
                                </li>
                                <li className="mb-1">
                                    Worked closely with the client to understand their requirements,
                                    and provided recommendations on user experience, design and
                                    functionality to improve customer engagement and sales.
                                </li>
                                <li className="mb-1">
                                    Integrated User Authentication and Purchase Order Gateways.
                                </li>
                                <li className="mb-1">
                                    Optimized the website for search engines and accessibility
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
                        <div className="print:text-right lg:text-right">
                            <span className="">Feb 2023 - Present</span>
                        </div>
                        <div className="print:col-span-3 lg:col-span-3">
                            <h2 className="mb-2">
                                <span className="font-semibold">Front-end web developer </span>
                                at UpWork
                            </h2>
                        </div>
                        <div className="text-sm print:text-right lg:text-right">
                            <span className="">Remote contractor</span>
                        </div>
                        <div className="print:col-span-3 lg:col-span-3">
                            {/* <p className="sm:text-sm mb-2"></p> */}
                            <ul className="ml-5  sm:text-sm list-disc">
                                <li className="mb-1">
                                    Developed a portfolio of landing websites for clients on UpWork,
                                    with a focus on improving conversion rates and lead generation.
                                </li>
                                <li className="mb-1">
                                    Utilized Next.js to build high-quality, responsive landing
                                    websites that were optimized for search engines and social media
                                    sharing.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="education" className="flex flex-col gap-6 print:gap-4 ">
                    <div className="grid items-baseline print:grid-cols-4 lg:grid-cols-4">
                        <h3 className="print:col-start-2 lg:col-start-2 text-2xl font-semibold text-blue-600">
                            Education
                        </h3>
                    </div>
                    <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
                        <div className="print:text-right lg:text-right">
                            <span className="">Mar 2023 - Present</span>
                        </div>
                        <div className="print:col-span-3 lg:col-span-3">
                            <h2 className="mb-2 text-lg sm:text-base">
                                <span className="font-semibold">
                                    Software development & IT mentoring program
                                </span>{' '}
                                at Technology with Purpose Foundation
                            </h2>
                            <p className="sm:text-sm mb-2">This program is designed to:</p>
                            <ul className="ml-5  sm:text-sm list-disc">
                                <li className="mb-1">
                                    Give hands-on experience in building a production web
                                    application in a team environment.
                                </li>
                                <li className="mb-1">
                                    Learn how to collaborate with others, use industry-standard
                                    tools and practices, and deliver a working product that provides
                                    value to the community.
                                </li>
                                <li className="mb-1">
                                    Stand out to potential employers and increase chances of getting
                                    hired in the IT job market.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
                        <div className="print:text-right lg:text-right">
                            <span className="">Dec 2021 - Present</span>
                        </div>
                        <div className="print:col-span-3 lg:col-span-3">
                            <h2 className="mb-2 text-lg sm:text-base">
                                <span className="font-semibold">Software development </span>
                                as self-taught student
                            </h2>
                            <p className="sm:text-sm mb-2">
                                I started studying at open-source academies such as freeCodeCamp,
                                where I learned the basics. I continued with more advanced tutorials
                                and code challenges, gaining experience in building production-grade
                                software through this process.
                            </p>
                            <ul className="ml-5  sm:text-sm list-disc">
                                <li className="mb-1">
                                    Software development environment and version control
                                </li>
                                <li className="mb-1">JavaScript Algorithms and Data Scructures</li>
                                <li className="mb-1">Front end development</li>
                                <li className="mb-1">Back end development</li>
                                <li className="mb-1">Relational Databases</li>
                                <li className="mb-1">Non-Relational Databases</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
                        <div className="print:text-right lg:text-right">
                            <span className="">Mar 2015 - Dic 2020</span>
                        </div>
                        <div className="print:col-span-3 lg:col-span-3">
                            <h2 className="mb-2 text-lg sm:text-base">
                                <span className="font-semibold">Engineer{"'"}s degree </span>
                                in agriculture at National University of Comahue
                            </h2>
                            <p className="sm:text-sm mb-2">
                                Dropped out at last year. Participated in several field studies
                                including:
                            </p>
                            <ul className="ml-5  sm:text-sm list-disc">
                                <li className="mb-1">
                                    Development of Water Distribution Plan for the inhabitants of
                                    Cerro Saturnino in Mallin Ahogado, Rio Negro
                                </li>
                                <li className="mb-1">
                                    Modeling infections of Strawberry in nearby crops
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
                        <div className="print:text-right lg:text-right">
                            <span className="">Mar 2011 - Mar 2015</span>
                        </div>
                        <div className="print:col-span-3 lg:col-span-3">
                            <h2 className="mb-2 text-lg sm:text-base">
                                <span className="font-semibold">English </span>
                                lessons at SELC Language Institute
                            </h2>
                            <p className="sm:text-sm mb-2">
                                I received a B1 grade on the First Certificate of English exam from
                                the University of Cambridge.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="stack" className="flex flex-col gap-6 print:gap-4">
                    <div className="grid items-baseline print:grid-cols-4 lg:grid-cols-4">
                        <h3 className="print:col-start-2 lg:col-start-2 print:col-span-3 lg:col-span-3 text-2xl font-semibold text-blue-600">
                            Skills and Tech Stack
                        </h3>
                    </div>
                    <div className="grid items-baseline print:grid-cols-4 lg:grid-cols-4">
                        <div className="print:col-start-2 lg:col-start-2 print:col-span-3 lg:col-span-3">
                            <h2 className="font-bold mb-2">Tech Stack:</h2>
                            <ul className="ml-5 list-disc sm:text-sm ">
                                <li className="mb-1">JavaScript / TypeScript</li>
                                <li className="mb-1">React.js / Next.js</li>
                                <li className="mb-1">Node.js / Express.js</li>
                                <li className="mb-1">Prisma ORM / Mongoose ORM</li>
                                <li className="mb-1">PostgreSQL / MongoDB</li>
                                <li className="mb-1">TailwindCSS / Sass / PostCSS</li>
                                <li className="mb-1">Docker</li>
                            </ul>
                            <h2 className="font-bold mb-2">Tools:</h2>
                            <ul className="ml-5 list-disc sm:text-sm ">
                                <li className="mb-1">GitHub / GitHub Actions</li>
                                <li className="mb-1">Webpack / Babel</li>
                                <li className="mb-1">Jest / React Testing Library / Cypress</li>
                                <li className="mb-1">ESLint / Prettier</li>
                            </ul>
                            <h2 className="font-bold mb-2">Skills:</h2>
                            <ul className="ml-5 list-disc sm:text-sm ">
                                <li className="mb-1">Native Spanish and professional English</li>
                                <li className="mb-1">Leadership</li>
                                <li className="mb-1">Problem-solving</li>
                                <li className="mb-1">Attention to detail</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="contact" className="flex flex-col gap-6 print:gap-4">
                    <div className="grid items-baseline print:grid-cols-4 lg:grid-cols-4">
                        <h3 className="print:col-start-2 lg:col-start-2 print:col-span-3 lg:col-span-3 text-2xl font-semibold text-blue-600">
                            Contact
                        </h3>
                    </div>
                    <div className="grid items-baseline print:grid-cols-4 lg:grid-cols-4">
                        <ul className="ml-5 list-disc sm:text-sm print:col-start-2 lg:col-start-2 print:col-span-3 lg:col-span-3">
                            <li className="mb-1">
                                Personal Website:{' '}
                                <a
                                    className="font-semibold"
                                    target={'_blank'}
                                    href="https://guidogennari.vercel.app/"
                                    rel="noreferrer"
                                >
                                    guidogennari.vercel.app
                                </a>
                            </li>
                            <li className="mb-1">
                                LinkedIn:{' '}
                                <a
                                    className="font-semibold"
                                    target={'_blank'}
                                    href="https://www.linkedin.com/in/guido-gennari/"
                                    rel="noreferrer"
                                >
                                    linkedin.com/in/guido-gennari/
                                </a>
                            </li>
                            <li className="mb-1">
                                GitHub:{' '}
                                <a
                                    className="font-semibold"
                                    target={'_blank'}
                                    href="https://github.com/xdguido"
                                    rel="noreferrer"
                                >
                                    github.com/xdguido
                                </a>
                            </li>
                            <li className="mb-1">
                                Location: Neuquen, Argentina (open to relocation)
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}
