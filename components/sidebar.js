import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useFetch from '../util/useFetch'

const Sidebar = ({ openModal }) => {
    const router = useRouter()
    const { chap } = router.query
    const [loading, chapter, error] = useFetch(`chapters/${chap}`)
    const isChapterPage = router.pathname === '/chapter/[chap]'
    return (
        <div className="h-screen w-2/5 bg-red-50 flex flex-col justify-center gap-8 p-8 shadow-2xl">
            <h1 className="text-7xl capitalize">
                <Link href="/">
                    <a>Pocket Gita</a>
                </Link>
            </h1>
            <p className="text-lg text-justify">
                {isChapterPage ? (
                    <>
                        {chapter.map((ch) => (
                            <>{ch.chapter_summary}</>
                        ))}
                    </>
                ) : (
                    <>
                        Bhagavad Gita, also known as the Gita - "The Song of
                        God" is a practical guide to one's life that guides one
                        to re-organise their life, achieve inner peace and
                        approach the Supreme (the Ultimate Reality).
                    </>
                )}
            </p>
            <button
                onClick={() => router.push('/explore')}
                className="btn mb-auto"
            >
                explore
            </button>
            <div className="flex gap-2 items-center text-2xl">
                <label htmlFor="cars" className="">
                    choose your language
                </label>
                <select className="w-48 rounded-xl" name="cars" id="cars">
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                </select>
            </div>
            <Jumper />
            <ul className="flex justify-between gap-2">
                {['about', 'api', 'credits', 'contribute'].map((to) => (
                    <LinkItem to={to} key={to} openModal={openModal} />
                ))}
            </ul>
        </div>
    )
}

const LinkItem = ({ to, openModal }) => (
    <li onClick={() => openModal(to)} className="nav-link">
        {to}
    </li>
)

const Jumper = () => {
    const router = useRouter()
    const [chapter, setChapter] = useState(null)
    const [verse, setVerse] = useState(null)
    const handler = () => {
        if (chapter && verse) {
            if (parseInt(chapter) <= 18) {
                router.push(`/chapter/${chapter}/verse/${verse}`)
            }
        }
    }
    return (
        <div className="">
            <span className="mb-1">
                Jump to a verse {chapter}
                {verse}
            </span>
            <div className="flex gap-2">
                <input
                    type="number"
                    placeholder="Chapter Number"
                    className="rounded-xl indent-3"
                    value={chapter}
                    onChange={(e) => {
                        if (chapter > 18) setChapter(1)
                        else setChapter(e.target.value)
                    }}
                />
                <input
                    type="number"
                    className="rounded-xl indent-3"
                    placeholder="Verse"
                    value={verse}
                    onChange={(e) => setVerse(e.target.value)}
                />
                <button onClick={handler} className="btn">
                    →
                </button>
            </div>
        </div>
    )
}

export default Sidebar
