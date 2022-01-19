import { useRouter } from 'next/router'
import chapters from '../data/chapters'

const Sidebar = ({ openModal }) => {
    const router = useRouter()
    if (router.pathname === '/chapter/[chap]') {
        return (
            <div className="flex flex-col justify-evenly gap-16 h-screen sticky self-start bg-red-50 p-10 shadow-2xl">
                <h1 className="text-4xl font-black">Bhagwad Gita</h1>
                <p className="text-xl">
                    {
                        chapters.filter(
                            (chapter) =>
                                chapter.chapter_number == router.query.chap
                        )[0].chapter_summary
                    }
                </p>
                <ul className="flex justify-start w-full font-bold text-3xl space-x-6">
                    <li className="hover:underline underline-offset-1 cursor-pointer">
                        about
                    </li>
                    <li className="hover:underline underline-offset-1 cursor-pointer">
                        credits
                    </li>
                    <li className="hover:underline underline-offset-1 cursor-pointer">
                        contribute
                    </li>
                </ul>
            </div>
        )
    }
    return <Home openModal={openModal} />
}

const Home = ({ openModal }) => {
    const router = useRouter()
    return (
        <div className="flex flex-col justify-evenly gap-16 h-screen sticky self-start bg-red-50 p-10 shadow-2xl">
            <h1 className="text-8xl font-black">Bhagwad Gita</h1>
            <p className="text-3xl">
                Bhagavad Gita, also known as the Gita - &#34;The Song of
                God&#34; is a practical guide to one&apos;s life that guides one
                to re-organise their life, achieve inner peace and approach the
                Supreme (the Ultimate Reality).
            </p>
            {/* button */}
            <button
                onClick={() => router.push('/explore')}
                className="duration-200 bg-red-600 hover:bg-red-700 active:translate-y-1 text-white text-2xl w-1/2 p-4 font-bold rounded-xl"
            >
                Explore
            </button>
            <ul className="flex justify-start w-full font-bold text-3xl space-x-6">
                <li
                    onClick={() => openModal('about')}
                    className="hover:underline underline-offset-1 cursor-pointer"
                >
                    about
                </li>
                <li
                    onClick={() => openModal('credits')}
                    className="hover:underline underline-offset-1 cursor-pointer"
                >
                    credits
                </li>
                <li
                    onClick={() => openModal('contribute')}
                    className="hover:underline underline-offset-1 cursor-pointer"
                >
                    contribute
                </li>
            </ul>
        </div>
    )
}

const Chapter = () => {
    return (
        <>
            <div className="flex flex-col justify-evenly gap-16 h-screen sticky self-start bg-red-50 p-10 shadow-2xl">
                <h1 className="text-8xl font-black">Bhagwad Gita</h1>
                <p className="text-3xl">
                    Bhagavad Gita, also known as the Gita - &#34;The Song of
                    God&#34; is a practical guide to one&apos;s life that guides
                    one to re-organise their life, achieve inner peace and
                    approach the Supreme (the Ultimate Reality).
                </p>
                {/* button */}
                <button
                    onClick={() => router.push('/explore')}
                    className="duration-200 bg-red-600 hover:bg-red-700 active:translate-y-1 text-white text-2xl w-1/2 p-4 font-bold rounded-xl"
                >
                    Explore
                </button>
                <ul className="flex justify-start w-full font-bold text-3xl space-x-6">
                    <li className="hover:underline underline-offset-1 cursor-pointer">
                        about
                    </li>
                    <li className="hover:underline underline-offset-1 cursor-pointer">
                        credits
                    </li>
                    <li className="hover:underline underline-offset-1 cursor-pointer">
                        contribute
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Sidebar
