import React, { useMemo } from 'react'

const Tech_skills = ({change_section, section_links}) => {
    const technical_skills = useMemo( () => [
        {
            id: 1,
            category: "Front End Web Development",
            skills: [
                {
                    name: "React",
                    image: "",
                    value: 70,
                },
                {
                    name: "GSAP",
                    image: "",
                    value: 70,
                },
                {
                    name: "Angular",
                    image: "",
                    value: 30,
                },
                {
                    name: "Vue.js",
                    image: "",
                    value: 40,
                },
                {
                    name: "HTML",
                    image: "",
                    value: 70,
                },
                {
                    name: "Sass",
                    image: "",
                    value: 50,
                },
                

            ]
        },
        {
            id: 2,
            category: "Back End Web Development",
            skills: [
                {
                    name: "Node.js",
                    image: "",
                    value: 70,
                },
                {
                    name: "Python",
                    image: "",
                    value: 70,
                },
                {
                    name: "PHP",
                    image: "",
                    value: 70,
                },
                {
                    name: "WordPress",
                    image: "",
                    value: 70,
                },
            ]
        },
        {
            id: 3,
            category: "Additional Skills",
            skills: [
                {
                    name: "Presenting",
                    image: "",
                    value: 70,
                },
                {
                    name: "Data Science",
                    image: "",
                    value: 50,
                },
                {
                    name: "ML / A.I.",
                    image: "",
                    value: 40,
                },
                {
                    name: "Graphic Design",
                    image: "",
                    value: 50,
                },
                {
                    name: "Git / Linux",
                    image: "",
                    value: 60,
                },
            ]
        },
    ], [])
    
    return (
        <React.Fragment>
        <div className="tech_skills_container">
            <h2 className="about_section_heading">Technical Skills</h2>

            <div className="technical_skills_list_container">
                <ul className="technical_skills_list">
                    {technical_skills.map( skill_category => {
                        const { id, category, skills } = skill_category
                        return (
                            <li key={id} className="technical_skills_category_item">
                                <h3 className="category_item_name">{category}</h3>
                                <div className="category_item_skills_container">
                                    <ul className="category_item_skills_list">
                                        {skills.sort( (a, b) => b.value - a.value).map( (skill, i) => {
                                            const { name, value} = skill
                                            return (
                                                <li key={i} className="cateogry_item_skill_item">
                                                    <h4 className="skill_name">{name}</h4>
                                                    <div className="skill_bar" id={`skill_${name}`}>
                                                        <div 
                                                            className="skill_bar_value"
                                                            id={`skill_value_${name}`}
                                                            title={`${name}: ${value}%`}
                                                            style={{width:`${value}%`}}></div>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <h6 className="values_caption">*Values represent relative experience and comfort with respective technologies.</h6>
                            </li>
                        )
                    } )}
                </ul>
            </div>

            <div className="cta_btns_container">
                {section_links.map((section_link, i) => {
                    return (
                        <button key={i} className="cta_btn section_btn" onClick={()=> change_section(section_link)}>{section_link}</button>
                    )
                })}
            </div>
        </div>
        </React.Fragment>
    )
}

export default Tech_skills
