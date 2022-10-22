import { useEffect, useState } from 'react'
import { DotLoader } from 'react-spinners'
const Loading = ({ className }) => {
    const [delay, setDelay] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setDelay(true)
        }, 5000)
    }, [])
    return (
        <div
            className={`${className} flex flex-col w-full justify-center items-center text-center`}
        >
            <DotLoader color="white" />
            <p className="mt-16 text-2xl font-bold">
                Fetching data from our API
            </p>
            {delay && (
                <p className="w-1/2 mt-10 text-lg font-bold">
                    Our server may be on a cold start, please be patient
                    it&apos;ll become responsive in no time
                </p>
            )}
        </div>
    )
}

export default Loading
