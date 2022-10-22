import '../styles/globals.css'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Layout from '@components/Layout'

const MyApp: NextPage = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
