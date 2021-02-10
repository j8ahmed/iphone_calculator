import React, { useRef } from 'react'
// const {log} = console

const Portfolio_navigation = ({category_list, get_filtered_projects}) => {
    const search = useRef(null)
    
    return (
        <div className="portfolio_navigation_container">

            <div className="portfolio_navigation_search_container">
                <form className="search_bar_form" 
                onSubmit={(e) => {
                    e.preventDefault()
                    get_filtered_projects(search.current.value, false)
                }}
                >
                    <div className="search_bar_form_elem_container">
                        <label htmlFor="search" className="search_label site_page_subheading">Search Using Keywords:</label>
                        <input ref={search} tabIndex="1" name="search" type="search" placeholder="React I Phone Calculator" className="search_bar_input" 
                        onChange={ (e) => get_filtered_projects(e.target.value, false)}
                        />
                    </div>
                </form>
            </div>

            <div className="portfolio_navigation_categories_container">
                <nav className="portfolio_navigation_categories">
                    <ul className="portfolio_navigation_categories_list">
                        <li className="portfolio_category_item"
                        onClick={()=>{get_filtered_projects('')}}
                        >All</li>

                        {category_list.map((category, i) => {
                            return (
                                <li 
                                key={i}
                                className="portfolio_category_item"
                                onClick={()=>{get_filtered_projects(category)}} 
                                >{category}</li>
                            )
                        })}

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Portfolio_navigation

