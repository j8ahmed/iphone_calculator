import gsap from 'gsap'
// const {log} = console

export const toggle_mobile_nav_menu_anim = (container, menu, open = true, tl = gsap.timeline()) => {
    const height = gsap.getProperty(menu, "height")
    
    if(open){
        tl
        .fromTo(container, {height: 0}, {height: height})
        ;
    } else {
        tl
        .fromTo(container, {height: height}, {height: 0})
        ;
    }
    
    return tl
}

export const load_page_anim = (tl = gsap.timeline({autoAlpha:0})) => {
    const elem = ".site_content_container"
    tl
    .to(elem, {visibility:"visible"})
    .fromTo(elem, {opacity: 0}, {opacity: 1})
    ;
    return tl
}

//animation for reloading filtered projects on the portfolio page.
export const load_projects_anim = (elem, tl = gsap.timeline({autoAlpha:0})) => {
    tl
    .fromTo(elem, {visibility:"hidden"}, {visibility:"visible"})
    .fromTo(elem, {opacity: 0, y:50}, {opacity: 1, y:0, stagger:0.1, ease:"back"}, "<")
    ;
    return tl
}




//animation for tech skills load bars
export const load_tech_skills_anim = (elem, values, tl = gsap.timeline({autoAlpha:0})) => {
    const elems = document.getElementsByClassName(elem)
    values.forEach( (value, i) => {
        tl
        .to(elems[i], {width:`${value}%`, duration: 0.5, ease:"back"}, "<0.25")
        ;

    } )
    
    
    return tl
}


export const fade_page_out_anim = (tl = gsap.timeline()) => {
    const elem = ".site_content_container"
    tl
    .to(elem, {visibility:"hidden", opacity:0, duration: 0.2})
    ;
    return tl
}