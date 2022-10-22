import Link from 'next/link'
import { useRouter } from 'next/router'
import Chapter from 'pages/chapter/[chap]'
import { FC, ReactNode, useEffect, useState } from 'react'

function debounce(func: () => void, timeout = 600) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, timeout)
    }
}

const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
    return (
        <div className="flex items-center text-red-50">
            <aside className="w-1/5 h-screen p-12">
                <div className="text-3xl font-bold lowercase">Gita Reader</div>
                <ul className="flex flex-col gap-2 mt-8">
                    <Link href={'/explore'} passHref>
                        <li className="inline-flex items-center w-full gap-2 px-6 py-3 duration-200 bg-red-500 rounded-full cursor-pointer hover:translate-x-2 hover:shadow-lg">
                            <a>explore</a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
                            </svg>
                        </li>
                    </Link>
                    <Jumper />
                </ul>
            </aside>
            <main className="w-4/5 p-8">{children}</main>
        </div>
    )
}

interface Jump {
    chap?: number
    verse?: number
}

const Jumper: FC = () => {
    const router = useRouter()
    const [jump, setJump] = useState<Jump>({
        chap: null,
        verse: null,
    })
    const [submit, setSubmit] = useState<boolean>(false)
    useEffect(() => {
        if (jump.chap && jump.verse) setSubmit(true)
    }, [jump])
    return (
        <>
            <li className="inline-flex items-center w-full gap-2 px-6 py-3 duration-200 bg-red-500 rounded-full cursor-pointer chap">
                {!submit ? (
                    <>
                        <input
                            type="number"
                            name="chapter"
                            id="chapter"
                            className="w-full bg-transparent outline-none chap placeholder:text-red-50"
                            max={18}
                            min={1}
                            placeholder="chapter"
                            onChange={(e) => {
                                debounce(() => {
                                    setJump({
                                        ...jump,
                                        chap: parseInt(e.target.value),
                                    })
                                })()
                            }}
                        />
                        <input
                            type="number"
                            name="verse"
                            id="verse"
                            className="w-full bg-transparent outline-none placeholder:text-red-50 chap"
                            max={150}
                            min={1}
                            placeholder="verse"
                            onChange={(e) => {
                                debounce(() => {
                                    setJump({
                                        ...jump,
                                        verse: parseInt(e.target.value),
                                    })
                                })()
                            }}
                        />
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => {
                                router.push(
                                    `/chapter/${jump.chap}/verse/${jump.verse}`
                                )
                            }}
                            className="w-full font-bold bg-transparent rounded-full outline-none placeholder:text-red-50 hover:bg-red-500"
                        >
                            jump
                        </button>
                        <button
                            className="w-full font-bold bg-transparent rounded-full outline-none placeholder:text-red-50 hover:bg-red-500"
                            onClick={() => {
                                setSubmit(false)
                            }}
                        >
                            back
                        </button>
                    </>
                )}
            </li>
            <span className="px-2 text-xs font-semibold">jump to a verse</span>
        </>
    )
}

export default Layout
