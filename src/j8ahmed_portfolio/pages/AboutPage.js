import React, { useState, useEffect, useCallback } from 'react'
import Index from '../components/about'
import Values from '../components/about/Values'
import SoftSkills from '../components/about/SoftSkills'
import TechSkills from '../components/about/TechSkills'
import { load_page_anim, fade_page_out_anim } from '../assets/animations'
// const {log} = console

const About_page = () => {
    const sections_list = ["summary", "values", "tech skills", "soft skills"]
    const [ section, setSection] = useState(localStorage.getItem("about_section"))

    const change_section = useCallback( (section) => {
        const tl = fade_page_out_anim()
        tl.add( () => {
            window.scrollTo(0,0)
            setSection(section)
        }, ">0.1")
    },[])

    const props = {
        change_section,
        section_links: sections_list.filter( (section_name) => section_name !== section )
    }

    useEffect(() => {
        window.scrollTo(0,0)
        localStorage.setItem("about_section", section)
        load_page_anim()
    }, [section])

    useEffect(() => {
        
    }, [section])
    
    let current_section
    switch(section){
        case "values":
            current_section = <Values  {...props} />
            break;

        case "tech skills":
            current_section = <TechSkills  {...props} />
            break;

        case "soft skills":
            current_section = <SoftSkills  {...props} />
            break;

        case "summary":
            current_section = <Index {...props} />
            break;

        default:
            current_section = <Index {...props} />
            break;
    }

    return (
        <main className="site_content_container">
            <div className="about_content_container">
                {current_section}
            </div>
        </main>
    )
}

export default About_page