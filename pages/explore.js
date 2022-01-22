import { useRouter } from 'next/router'
import useFetch from '../util/useFetch'

const Explore = ({ className }) => {
    const [loading, chapters, error] = useFetch('chapters')
    const router = useRouter()
    const clickHandler = (chap) => {
        router.push(`/chapter/${chap}`)
    }
    if (loading) {
        return <>loading content</>
    }
    return (
        <div className={className + ' grid grid-cols-2 grid-flow-row gap-10'}>
            {chapters.map((chapter) => {
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
