import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import usePagination from '../util/usePagination'
import chapters from '../gita/data/chapters.json'

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
) => {
    return {
        props: {
            chapters,
        },
    }
}

const Explore = ({ className, chapters }) => {
    const { currentPosts, changePage, navigation } = usePagination<Chapter>(
        chapters,
        6
    )
    const router = useRouter()
    return (
        <div className={className}>
            <div className="grid grid-flow-row grid-cols-2 gap-10 h-5/6">
                {currentPosts.map((chapter) => {
                    return (
                        <Card
                            key={chapter.id}
                            chap={chapter.chapter_number}
                            name={chapter.name}
                            name_meaning={chapter.name_meaning}
                            clickHandler={(chap) =>
                                router.push(`/chapter/${chap}`)
                            }
                        />
                    )
                })}
            </div>
            <div className="flex items-center justify-between h-1/6">
                <button className="font-bold" onClick={() => changePage(-1)}>
                    prev page
                </button>
                <button className="font-bold" onClick={() => changePage(1)}>
                    next page
                </button>
            </div>
        </div>
    )
}

const Card = ({ chap, name, name_meaning, clickHandler }: {
    chap: number
    name: string
    name_meaning: string
    clickHandler: (chap: number) => void
}) => {
    return (
        <div
            onClick={() => clickHandler(chap)}
            className="bg-yellow-300 duration-200 hover:translate-x-2 text-black font-bold text-2xl h-36 rounded-xl hover:shadow-xl p-4 cursor-pointer grid grid-cols-[100px_1fr]"
        >
            <span className="self-center w-full row-span-2 text-center text-7xl">
                {chap}
            </span>
            <span className="self-end text-xl">{name}</span>
            <span className="text-sm">{name_meaning}</span>
        </div>
    )
}

export default Explore
