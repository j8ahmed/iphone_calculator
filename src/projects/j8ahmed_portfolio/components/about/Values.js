import React, { useMemo } from 'react'
import be_clean from '../../assets/images/icons/be_clean_icon.svg'
import be_flexible from '../../assets/images/icons/be_flexible_icon.svg'
import be_teachable from '../../assets/images/icons/be_teachable_icon.svg'
import be_dynamic from '../../assets/images/icons/be_dynamic_icon.svg'
// const {log} = console

const Values = ({change_section, section_links}) => {
    const values_list = useMemo( () => [
        {
            id: 1,
            name: 'Be Clean',
            image: be_clean,
            description: "Know the 'Why'. Build from clear and intuitive designs.",
        },
        {
            id: 2,
            name: 'Be Flexible',
            image: be_flexible,
            description: "Open and ready to change to improve outcomes.",
        },
        {
            id: 3,
            name: 'Be Teachable',
            image: be_teachable,
            description: `Actively learning and asking how we can do better.`,
        },
        {
            id: 4,
            name: 'Be Dynamic',
            image: be_dynamic,
            description: "Support creativity. Keep pushing the envelope.",
        },

    ], [])

    return (
        <React.Fragment>
        <div className="values_container">
            <h2 className="about_section_heading">Professional Values</h2>
            <div className="values_list_container">
                <ul className="values_list">
                    {values_list.map( (value_item) => {
                        const { id, name, image, description } = value_item
                        return (
                            <li key={id} className="value_item">
                                <div className="value_item_image_container">
                                    <img src={image} alt={name}/>
                                </div>
                                <div className="value_item_text_container">
                                    <h3 className="value_item_subheading">{name}</h3>
                                    <p className="value_item_description">{description}</p>
                                </div>
                            </li>
                        )
                    } )}
                </ul>
            </div>

            <div className="cta_btns_container values_menu_container">
                {section_links.map((section_link, i) => {
                    return (
                        <button key={i} className="cta_btn" onClick={()=> change_section(section_link)}>{section_link}</button>
                    )
                })}
            </div>
        </div>
        </React.Fragment>
    )
}

export default Values
