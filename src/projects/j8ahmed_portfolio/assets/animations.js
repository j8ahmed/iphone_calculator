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
export const fade_page_out_anim = (tl = gsap.timeline()) => {
    const elem = ".site_content_container"
    tl
    .to(elem, {visibility:"hidden", opacity:0, duration: 0.2})
    ;
    return tl
}