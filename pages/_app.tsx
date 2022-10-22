import '../styles/globals.css'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Sidebar from '../components/sidebar'

const MyApp: NextPage = ({ Component, pageProps }: AppProps) => {
    return (
        <div className="flex">
            <Sidebar openModal={() => null} />
            <Component
                className="w-3/5 h-screen p-8 overflow-auto text-white"
                {...pageProps}
            />
        </div>
    )
}

export default MyApp
