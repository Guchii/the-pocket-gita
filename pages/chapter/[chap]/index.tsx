import {
    GetStaticPropsContext,
    GetStaticProps,
    GetStaticPaths,
    GetStaticPathsContext,
} from 'next'
import { useRouter } from 'next/router'
import usePagination from '../../../util/usePagination'
import verses from '../../../gita/data/verse.json'

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
) => {
    const chapVerses = (verses as Array<any>).filter(
        (verse) => verse.chapter_number == context.params.chap
    )
    return {
        props: {
            chapVerses,
        },
    }
}

export const getStaticPaths: GetStaticPaths = (
    context: GetStaticPathsContext
) => ({
    fallback: false,
    paths: Array(18)
        .fill(0)
        .map((_, i) => ({
            params: {
                chap: (i + 1).toString(),
            },
        })),
})

const Chapter = ({ className, chapVerses }) => {
    const router = useRouter()
    const { chap } = router.query
    const { currentPosts, changePage, navigation } = usePagination<Verse>(
        chapVerses,
        6
    )
    return (
        <div className={className}>
            <div className={'grid grid-cols-2 grid-flow-row gap-10'}>
                {currentPosts.map(({ verse_number, id, text }) => {
                    return (
                        <Card
                            key={id}
                            verse={verse_number}
                            text={text}
                            clickHandler={() =>
                                router.push(
                                    `/chapter/${chap}/verse/${verse_number}`
                                )
                            }
                        />
                    )
                })}
            </div>
            <div className="flex items-center justify-between h-1/6">
                <button
                    className={
                        'font-bold' + ` ${!navigation.back && 'bg-black'}`
                    }
                    onClick={() => changePage(-1)}
                >
                    prev page
                </button>
                <button
                    className={
                        'font-bold' + ` ${!navigation.forward && 'bg-black'}`
                    }
                    onClick={() => changePage(1)}
                >
                    next page
                </button>
            </div>
        </div>
    )
}

const Card = ({ verse, text, clickHandler }) => {
    return (
        <div
            onClick={() => clickHandler(verse)}
            className="p-4 text-2xl font-bold text-black duration-200 bg-yellow-300 cursor-pointer hover:shadow-xl hover:translate-x-2 h-36 rounded-xl "
        >
            <span className="self-end text-xl">{text}</span>
        </div>
    )
}

export default Chapter
