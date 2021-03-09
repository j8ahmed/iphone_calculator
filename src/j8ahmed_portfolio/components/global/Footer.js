import React from 'react'
import DarkModeButton from './DarkModeButton'

const Footer = () => {
    return (
        <footer className="site_footer">

            <div className="site_footer_container">
                <div className="site_footer_navbar">

                    <DarkModeButton />
                    <div className="footer_navbar_social_links_container">
                        <ul className="footer_navbar_social_links_list">
                            <li className="footer_navbar_social_link_item">
                                <a className="footer_navbar_social_link site_link" href="https://twitter.com/j8ahmed">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="footer_navbar_social_link_item">
                                <a className="footer_navbar_social_link site_link" href="https://www.linkedin.com/in/j8ahmed/">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className="footer_navbar_social_link_item">
                                <a className="footer_navbar_social_link site_link" href="https://codepen.io/j8ahmed">
                                    <i className="fab fa-codepen"></i>  
                                </a>
                            </li>
                        </ul>
                    </div>
                
                </div>
                    <div className="footer_copyright">Copyright &copy; 2021 Jamal J8ahmed. All rights reserved.</div>
            </div>
            
        </footer>
    )
}

export default Footer
