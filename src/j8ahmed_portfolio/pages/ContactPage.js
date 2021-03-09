import React, {useEffect, useMemo } from 'react'
import { load_page_anim } from '../assets/animations'
const Contact_page = () => {
    const social_links_list = useMemo( () => {
        return [
            {
                name: "linkedin",
                link: "https://www.linkedin.com/in/j8ahmed/",
                icon: "fab fa-linkedin-in",
            },
            {
                name: "codepen",
                link: "https://codepen.io/J8ahmed/",
                icon: "fab fa-codepen",
            },
            {
                name: "twitter",
                link: "https://twitter.com/j8ahmed",
                icon: "fab fa-twitter",
            },
            {
                name: "instagram",
                link: "https://www.instagram.com/j8_ahmed/",
                icon: "fab fa-instagram",
            },
            {
                name: "github",
                link: "https://github.com/j8ahmed",
                icon: "fab fa-github",
            },
            {
                name: "youtube",
                link: "https://www.youtube.com/channel/UCam3QW0KOgIbWtlfFz2z83w",
                icon: "fab fa-youtube",
            },
            {
                name: "freecodecamp",
                link: "https://www.freecodecamp.org/j8ahmed",
                icon: "fab fa-free-code-camp",
            },
            {
                name: "hackerrank",
                link: "https://www.hackerrank.com/j8ahmed",
                icon: "fab fa-hackerrank",
            },
        ]
    }, [])

    useEffect(() => {
        window.scrollTo(0,0)
        load_page_anim()
    }, [])
    
    return (
        <main className="site_content_container">
            
            <div className="contact_page_container">

                <h2 className="site_page_heading">Let's Connect</h2>

                <div className="email_container">
                    <h3 className="contact_subheading">Email: </h3>
                    <address className="email_link">
                        <a className="j8ahmed" href="mailto:j8ahmed@gmail.com">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </address>
                </div>
                   
                
                <div className="contact_links_list_container">
                    <h3 className="contact_subheading">Other Platforms: </h3>
                    <ul className="contact_links_list">
                        {social_links_list.map( (item, i) => {
                            const { name, icon, link } = item
                            return (
                                <li key={i} className={`contact_link_item ${name}`}>
                                    <a className={name} href={link} target="_blank" rel="noopener noreferrer">
                                        <i className={icon}></i>
                                    </a>
                                </li>
                            )
                        } )}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Contact_page
