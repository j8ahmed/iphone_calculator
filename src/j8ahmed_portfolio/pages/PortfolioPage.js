import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import Header from '../components/Header'
import { data } from '../assets/page_data/portfolio/data'
import Navigation from '../components/portfolio/Portfolio_navigation'
import Project from '../components/portfolio/Portfolio_project'
import Loader from '../components/Loader'
import { load_page_anim, load_projects_anim } from '../assets/animations'
// const {log} = console

const Portfolio_page = () => {
    const init = useRef(false)
    const [projects, setProjects] = useState(data.projects)
    const [isLoading, setIsLoading ] = useState(false)

    const category_list = useMemo( ()=> {
        let list = data.projects.map( (item) => {
            return item.category;
        }).flat().sort()

        return [...new Set(list)]
    }, [] )

    const debounce = (func, wait, immediate) => {
        let timeout;
        
        return function(...args) {          
            clearTimeout(timeout)

            if (immediate){
                func(...args)
            } else {
                timeout = setTimeout(() => {
                    func(...args)
                }, wait);
            }            
        }
    }

    const filter_projects = useCallback( async (text, search_by_category=true) => {
        setIsLoading(true)
        //fake fetch to imitate async fetch()
        const fake_fetch = () => {
            return new Promise( resolve => {
                setTimeout(()=>{
                    const { projects } = data
                    resolve(projects)
                }, 500)
            })
        }
        
        const regex = new RegExp( `(${text})`, "i")
        const unfiltered_projects = await fake_fetch()
        const filtered_projects = unfiltered_projects.filter( (project) => {
            const { name, category } = project
            let match = false
            
            if(search_by_category){
                //test category
                if( regex.test(category.join(" ")) ) match = true
                
            } else {
                if( regex.test(name) ) match = true
                else if( regex.test(category.join(" ")) ) match = true
            }
            
            return match ? project : null
        })
        setProjects(filtered_projects)
        setIsLoading(false)
    },[] )
    
    useEffect(() => {
        let to
        if(init.current && !isLoading) {
            // adding delay to the load animation to ensure all the products get accessed and animated by GSAP
            to = setTimeout( () => {
                load_projects_anim(projects.length >= 1 ? ".portfolio_project_item" : ".no_projects_container")
            }, 250)
        }
        return () => clearTimeout(to)
    }, [isLoading, projects.length])

    useEffect(() => {
        window.scrollTo(0,0)
        const tl = load_page_anim()
        load_projects_anim(".portfolio_project_item", tl)
        init.current = true


        // const newFunction = debounce()
        // newFunction()
    }, [])



    return (
        <>
        <Header />
        <main className="site_content_container">
            <div className="portfolio_page_container">
                <h2 className="site_page_heading">Code Projects</h2>
                <Navigation 
                    category_list={category_list}
                    debounce={debounce}
                    get_filtered_projects={filter_projects}
                    />
                {isLoading ? <Loader /> : projects.length <= 0 ?  
                <div className="no_projects_container">
                    <h3 className="site_page_subheading">Sorry...<br/><br/>No Matching Projects.</h3>
                </div> :
                <div className="portfolio_projects_list_container">
                    <ul className="portfolio_projects_list">
                        {projects.map((project) => {
                            const { id } = project
                            return (
                                <Project key={id} {...project} />
                                )
                            })}
                    </ul>
                </div>
                }
            </div>
        </main>
        </>
    )
}

export default Portfolio_page


