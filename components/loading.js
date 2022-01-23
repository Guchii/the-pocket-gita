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
            <DotLoader color="white" css={{ marginBottom: '80px' }} />
            <p className="font-bold text-2xl">Fetching data from our API</p>
            {delay && (
                <p className="font-bold text-lg w-1/2 mt-10">
                    Our server may be on a cold start, please be patient
                    it&apos;ll become responsive in no time
                </p>
            )}
        </div>
    )
}

export default Loading
