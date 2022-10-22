export default function Home() {
    const bgImage =
        'https://images.unsplash.com/photo-1609133799670-2c2a82f3624c?&auto=format&fit=crop&w=1170&q=80'
    return (
        <div
            style={{
                background: `url(${bgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        ></div>
    )
}
