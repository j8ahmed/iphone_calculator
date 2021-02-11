import React from 'react'
// import canvas_thumbnail from '../../assets/images/youtube_thumbnails/color-particle-animation-thumbnail.jpeg'

const Soft_skills = ({change_section, section_links}) => {

    return (
        <React.Fragment>
        <div className="soft_skills_container">
            <h2 className="about_section_heading">Soft Skills</h2>
 
            <div className="soft_skills_info_container">
                <div className="about_text_container">
                    <p className="site_paragraph">I'm more than just a Software Developer. I'm a former teacher, Boys &amp; Girls Club Leader, Sales Rep, and an avid sports fan.</p>
                    <p className="site_paragraph">As a result, I'm highly focused on customer service and being a well-rounded team member. I'm also known to tell a good joke every once in a while... ;)</p>
                    <p className="site_paragraph">I believe in value driven solutions and effective communication amongst team members. I pride myself on my ability to manage conflict and work as a member of a team. I believe that our most unhappy customers are our greatest source of learning.</p>
                    <p className="site_paragraph">When I'm not coding, I'm usually working on designing graphics, 3D models, or learning something new (I'm really into A.I. and Machine Learning Models right now). I'm also currently working on improving my YouTube Channel where I code through projects to help myself as well as others.</p>
                </div>
                <div className="soft_skills_img_container">
                    <iframe className="youtube_video" title="J8ahmed YouTube Channel video" src="https://www.youtube.com/embed/2HYfgzGWPhU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
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

export default Soft_skills
