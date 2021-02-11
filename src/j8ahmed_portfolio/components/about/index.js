import React from 'react'

const Index = ({change_section, section_links}) => {

    return (
        <React.Fragment>
            <div className="summary_container">
                <div className="about_text_container">
                    <h2 className="about_section_heading">Let Me Tell You<br/>About Myself</h2>
                    <p className="site_paragraph">I'm a team player, a self-starter, a learner, and a goal-focused worker. I combine my soft skills with my technical experience to provide clients with purposeful software solutions. I have over <span className="site_accent_text">3 years</span> of experience in Tech - preceded by my work in the Health &amp; Fitness industry.</p>
                    <p className="site_paragraph">I love coding but beyond anything else I enjoy solving problems.</p>
                </div>
                <div className="cta_btns_container summary_menu_container">
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

export default Index
