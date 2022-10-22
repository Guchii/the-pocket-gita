import { useRouter } from 'next/router'
import useFetch from '../../../../util/useFetch'
import verses from '../../../../gita/data/verse.json'
import {
    GetStaticPropsContext,
    GetStaticProps,
    GetStaticPaths,
    GetStaticPathsContext,
} from 'next'

export const getStaticProps: GetStaticProps = (
    context: GetStaticPropsContext
) => {
    const { chap: chapter_number, verse: verse_number } = context.params
    const verseText = (verses as Array<any>).find(
        (verse) =>
            verse.verse_number == verse_number &&
            verse.chapter_number == chapter_number
    )
    console.log(verseText)

    return {
        props: {
            text: verseText ? verseText : 'Not Found',
        },
    }
}

export const getStaticPaths: GetStaticPaths = (
    context: GetStaticPathsContext
) => ({
    fallback: false,
    paths: (verses as Array<any>).map((verse) => {
        return {
            params: {
                chap: (verse.chapter_number as number).toString(),
                verse: (verse.verse_number as number).toString(),
            },
        }
    }),
})

const Verse = ({ className, text }) => {
    const router = useRouter()
    const { chap, verse } = router.query
    return (
        <div
            className={
                className + ' flex flex-col gap-8 justify-center items-center'
            }
        >
            <div className="text-5xl">{text.text}</div>
            <div className="text-3xl">{text.transliteration}</div>
        </div>
    )
}

export default Verse
