import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { data } from '../assets/page_data/portfolio/data'
import { load_page_anim } from '../assets/animations'

const Project_page = () => {
    const { id } = useParams()
    const current_project = data.projects.reduce( (a,b) => b.id === +id ? b : a) 
 
    // const similar_projects = 

    useEffect(() => {
        window.scrollTo(0,0)
        load_page_anim()
    }, [])

    const { name, image, category, site_link, github_repo, description} = current_project
    const { overview, key_features, conclusion } = description
    return (
        <main className="site_content_container">
            <div className="project_page_container">
                <div className="project_content">
                    <h2 className="site_page_heading">{name}</h2>
                    <h4 className="project_category">{category.join(" | ")}</h4>   
                    <div className="project_links_container">
                        <div className="external_links">
                            { !github_repo ? "" : <a className="project_link github_link" href={github_repo} target="_blank" rel="noopener noreferrer">GitHub <i className="fab fa-github"></i></a> }
                            <a className="project_link project_site_link" href={site_link} target="_blank" rel="noopener noreferrer">Site <i className="fas fa-external-link-alt"></i></a>    
                        </div>
                        <Link className="project_link back_link" to="/portfolio">
                            <i className="fas fa-chevron-left"></i> Back to Portfolio
                        </Link> 
                    </div> 
                    <div className="project_page_img_container">
                        <img src={image} alt={name}/>
                    </div>
                    <div className="project_description">
                        <p className="site_paragraph">{overview}</p>
                        <h4 className="project_subheading">Key Features:</h4>
                        <ul className="project_key_features_list">
                            {key_features.map( (feature,i) => {
                                return(
                                    <li key={i} className="project_key_feature">{feature}</li>
                                )
                            } )}
                        </ul>
                        <p className="site_paragraph">{conclusion}</p>
                    </div>
                    <Link className="project_link back_link" to="/portfolio">
                        <i className="fas fa-chevron-left"></i> Back to Portfolio
                    </Link>    
                </div>

            </div>
            
        </main>
    )
}

export default Project_page
