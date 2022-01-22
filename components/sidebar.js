import { useRouter } from 'next/router'
import useFetch from '../util/useFetch'

const Sidebar = ({ openModal }) => {
    const router = useRouter()
    const { chap } = router.query
    const [loading, chapter, error] = useFetch(`chapters/${chap}`)
    const isChapterPage = router.pathname === '/chapter/[chap]'
    return (
        <div className="flex flex-col justify-evenly gap-16 h-screen sticky self-start bg-red-50 p-10 shadow-2xl">
            <h1 className="text-8xl font-black">The Pocket Gita</h1>
            <p className="text-lg">
                {isChapterPage ? (
                    <>
                        {chapter.map((ch) => (
                            <>{ch.chapter_summary}</>
                        ))}
                    </>
                ) : (
                    <>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Enim odio, porro optio quisquam alias, sit
                        laboriosam consectetur labore maiores, nulla eaque odit!
                        Nobis eos sapiente corporis? Amet hic magnam dolore!
                    </>
                )}
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
                    onClick={() => openModal('api')}
                    className="hover:underline underline-offset-1 cursor-pointer"
                >
                    api
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

export default Sidebar
