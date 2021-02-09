import React, { useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import { default_menu_links } from '../assets/defaults'
import Logo from "../assets/images/icons/logo_icon.svg"
// const desktop_view_min_width = 800
// const {log} = console

const Header = () => {
    const [ showLinks, setShowLinks ] = useState(false)
    const header = useRef(null)
    const mobile_menu_container = useRef(null)
    // const init = useRef(false)

    
    // const handle_header_resize = useCallback( () => {
    //     if(window.innerWidth > 800){
    //         header.current.style.height = `auto`
    //         window.removeEventListener('resize', handle_header_resize)
    //     }
    // },[])
    
    // const set_header_height = useCallback( () => {
    
    //     if(window.innerWidth < desktop_view_min_width){
    //         const { height } = mobile_menu_container.current.getBoundingClientRect()
    //         header.current.style.height = `${height}px`
    //         window.addEventListener('resize', handle_header_resize)
    //     } else {
    //         header.current.style.height = `auto`
    //     }
    // }, [handle_header_resize])

    // useEffect(() => {
    //     if(window.innerWidth < desktop_view_min_width){
    //         window.addEventListener('resize', handle_header_resize)
    //     }
    // }, [handle_header_resize])  

    // useEffect(() => {
    //     set_header_height()
    // }, [showLinks, set_header_height])

    // useEffect(() => {
    //     init.current = true
    // }, [])

    return (
        <header ref={header} className={`site_header`}>
            <div className="site_header_navbar_container">
                <div className="site_header_navbar">
                    <div className="site_header_navbar_logo_container">
                        <img src={Logo} alt="J8ahmed logo"/>
                    </div>
                    <nav className={`site_header_navbar_links_list_container`}>
                        <ul className="site_header_navbar_links_list">
                            {default_menu_links.map( (link, i) => {
                                return(
                                    <li key={i} className="site_header_navbar_link_item">
                                        <Link className="site_link" to={link === "home" ? "/" : `/${link}`}>
                                        {link}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <div className="site_header_navbar_mobile_menu_button_container">
                        <button className="site_header_navbar_mobile_menu_button" onClick={() => setShowLinks(showLinks => !showLinks)}>
                            <div className={`btn_bar ${showLinks ? "close_btn" : ""}`}></div>
                            <div className={`btn_bar ${showLinks ? "close_btn" : ""}`}></div>
                            <div className={`btn_bar ${showLinks ? "close_btn" : ""}`}></div>
                        </button>
                    </div>
                </div>
                <div className={`mobile_menu_container ${showLinks ? "show_mobile_menu_container" : "hide_mobile_menu_container"}`}
                    ref={mobile_menu_container}>
                    <div className="mobile_menu">
                        <div className="mobile_menu_header">
                            <div className="site_header_navbar_logo_container">
                                <img src={Logo} alt="J8ahmed logo"/>
                            </div>
                            <div className="mobile_menu_header_mobile_menu_button_container">
                                <button className="mobile_menu_header_mobile_menu_button" onClick={() => setShowLinks(showLinks => !showLinks)}>
                                    <div className={`btn_bar close_btn_bar`}></div>
                                    <div className={`btn_bar close_btn_bar`}></div>
                                    <div className={`btn_bar close_btn_bar`}></div>
                                </button>
                            </div>
                        </div>
                        <nav className={`mobile_menu_links_list_container`}>
                            <ul className="mobile_menu_links_list">
                                {default_menu_links.map( (link, i) => {
                                    return(
                                        <li key={i} className="mobile_menu_link_item">
                                            <Link className="site_link" to={link === "home" ? "/" : `/${link}`}>
                                            {link}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
