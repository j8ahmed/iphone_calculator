import React, { useRef } from 'react'
import { debounce } from 'lodash'
// const {log} = console

const Portfolio_navigation = ({category_list, get_filtered_projects}) => {
    const search = useRef(null)
    const debounced_search = debounce( get_filtered_projects, 750)
    
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
                        <label htmlFor="categories" className="search_label">Category:</label>
                        <select 
                            id="categories" 
                            name="categories" 
                            className="search_bar_input"
                            onChange={ e => debounced_search(e.target.value, false) }
                        >
                            <option value="">All</option>
                            {category_list.map((category, i) => {
                                return (
                                    <option key={i} value={category}>{category}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="search_bar_form_elem_container">
                        <label htmlFor="search" className="search_label">Search by Keywords:</label>
                        <input ref={search} tabIndex="1" 
                            name="search" 
                            type="search"
                            placeholder="Project Name" 
                            className="search_bar_input" 
                            onChange={ (e) => debounced_search(e.target.value, false)}
                        />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Portfolio_navigation

