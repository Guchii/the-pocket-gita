import { useRouter } from 'next/router'
import Loading from '../components/loading'
import useFetch from '../util/useFetch'
import usePagination from '../util/usePagination'

const Explore = ({ className }) => {
    const [loading, chapters, error] = useFetch('chapters')
    const [currentPosts, setCurrentPage] = usePagination(chapters, 8)
    const router = useRouter()
    const clickHandler = (chap) => router.push(`/chapter/${chap}`)
    if (loading) return <Loading className={className} />
    return (
        <div className={className}>
            <div className="h-5/6 grid grid-cols-2 grid-flow-row gap-10">
                {currentPosts.map((chapter) => {
                    return (
                        <Card
                            key={chapter.id}
                            chap={chapter.chapter_number}
                            name={chapter.name}
                            name_meaning={chapter.name_meaning}
                            clickHandler={clickHandler}
                        />
                    )
                })}
            </div>
            <div className="h-1/6 flex justify-between items-center">
                <button
                    className="font-bold"
                    onClick={() => setCurrentPage(-1)}
                >
                    prev page
                </button>
                <button className="font-bold" onClick={() => setCurrentPage(1)}>
                    next page
                </button>
            </div>
        </div>
    )
}

const Card = ({ chap, name, name_meaning, clickHandler }) => {
    return (
        <div
            onClick={() => clickHandler(chap)}
            className="bg-yellow-300 duration-200 active:translate-y-1 text-black font-bold text-2xl h-36 rounded-xl shadow-xl p-4 cursor-pointer grid grid-cols-[100px_1fr]"
        >
            <span className="self-center row-span-2 text-7xl w-full text-center">
                {chap}
            </span>
            <span className="text-xl self-end">{name}</span>
            <span className="text-sm">{name_meaning}</span>
        </div>
    )
}

export default Explore
