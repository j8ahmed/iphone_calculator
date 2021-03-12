import React, { useEffect } from 'react'
import { load_page_anim } from '../assets/animations'

const Error_page = () => {

    useEffect(() => {
        window.scrollTo(0,0)
        load_page_anim()
    }, [])

    return (
        <main id="error_page" className="site_content_container">
            <h1>404 Error</h1>
            <h2>Page not found.</h2>
        </main>
    )
}

export default Error_page
