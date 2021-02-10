import ProjectImage01  from "../../images/project_thumbnail_images/rain_animation.jpeg"
import ProjectImage02  from "../../images/project_thumbnail_images/iphone_calculator.jpeg"
import ProjectImage1   from "../../images/project_thumbnail_images/shopping_cart.jpeg"
import ProjectImage2   from "../../images/project_thumbnail_images/stripe_navbar_imitation.jpeg"
import ProjectImage3   from "../../images/project_thumbnail_images/products_page_app.jpeg"
import ProjectImage4   from "../../images/project_thumbnail_images/reviews_slider.jpeg"
import ProjectImage5   from "../../images/project_thumbnail_images/restaurant_menu.jpeg"
import ProjectImage6   from "../../images/project_thumbnail_images/grocery_list.jpeg"
import ProjectImage7   from "../../images/project_thumbnail_images/accordion_faqs.jpeg"
import ProjectImage8   from "../../images/project_thumbnail_images/birthday_reminders.jpeg"
import ProjectImage9   from "../../images/project_thumbnail_images/experience_tabs.jpeg"
import ProjectImage10  from "../../images/project_thumbnail_images/color_generator.jpeg"
import ProjectImage11  from "../../images/project_thumbnail_images/tours_list.jpeg"

export const data = {
    projects: [
        {
            id: 10001,
            name: "Rain Animation",
            image: ProjectImage01,
            category: ["TypeScript", "Sass", "HTML5"],
            site_link: "https://j8ahmed-rain-animation-2021.netlify.app/",
            github_repo: "https://github.com/j8ahmed/rain_animation_2021",
            description: {
                overview: "This project was for fun to help me practice using TypeScript in my development process. This is an old web animation that I designed and built a while ago.",
                key_features: [
                    "HTML 5 Canvas element to draw the rain droplets on the page.",
                    "Used TypeScript for inferred type setting.",
                    "Used Sass to become more comfortable using it outside of any JavaScript frameworks.",
                ],
                conclusion: "Overall, it's one of my favourite and most hearted pens on CodePen. I really enjoyed when I first built it so I am happy to give a bit of an update.",
            },
        },
        {
            id: 1,
            name: "Shopping Cart App",
            image: ProjectImage1,
            category: ["React", "GSAP"],
            site_link: "https://j8ahmed-react-shopping-cart-app.netlify.app/",
            github_repo: "https://github.com/j8ahmed/react_shopping_cart_app",
            description: {
                overview: "This project was built as a React Single Page Application (SPA). It is an example shopping cart page that includes adjustable item quantities, a running cart total and a running count of the total number of cart items.",
                key_features: [
                    "It allows for users to delete items, increase the quantity of items, and view the running price of the cart.",
                    "It utilizes the React useReducer hook to run and manage the state change for the app.",
                    "It stages functional event and runs animations around those events using the Greensock Animation Platform (GSAP).",
                    "It was built with a mobile first approach.",
                ],
                conclusion: "Overall, it was a great project that helped me further hone my animation skills while staging functional events and React component re-renders. I completed this project as part of a React projects YouTube course in January 2021 from freeCodeCamp.",
            },
        },
        {
            id: 2,
            name: "Stripe Menu Imitation",
            image: ProjectImage2,
            category: ["React", "GSAP"],
            site_link: "https://j8ahmed-react-stripe-imitation-navbar.netlify.app/",
            github_repo: "https://github.com/j8ahmed/react_stripe_navbar_imitation",
            description: {
                overview: "This project was built as a React Single Page Application (SPA). It is a functional imitation of Stripe's Navigation menu.",
                key_features: [
                    "It functions with a dynamically set sub menu.",
                    "Reflects the Stripe menu's animations. Except for the slider transitions. Due to time restrictions I could not implement this.",
                    "It stages functional event and runs animations around those events using the Greensock Animation Platform (GSAP).",
                ],
                conclusion: "Overall, it was a challenging project. It required a considerable amount of planning and understanding of html element inheritance on my part. I learned a lot and would like to revisit this to further improve it in the future. I completed this project as part of a React projects YouTube course in January 2021 from freeCodeCamp.",
            },
        },
        {
            id: 3,
            name: "Products Page App",
            image: ProjectImage3,
            category: ["React", "GSAP"],
            site_link: "https://j8ahmed-react-products-page-app.netlify.app/",
            github_repo: "https://github.com/j8ahmed/react_products_page_app",
            description: {
                overview: "This project was built as a React Single Page Application (SPA). It is a sample products page for an e-commerce site.",
                key_features: [
                    "It uses a search bar that loads products on input change. The search was based on Regular expressions compared to product names.",
                    "It Features a custom loader animation",
                    "It was built utilizing the 'react-router-dom' library to implement multiple pages.",
                    "It was built using the React useContext hook to pass properties to React child components directly from the Provider component.",
                    "It stages functional events and runs animations around those events using the Greensock Animation Platform (GSAP).",
                ],
                conclusion: "Overall, it was a great project. It was a great summary of all my previous projects in the React project courses. The staging of animations around functional events really made it all come together. I completed this project as part of a React projects YouTube course in January 2021 from freeCodeCamp.",
            },
        },
        {
            id: 4,
            name: "Slider Reviews",
            image: ProjectImage4,
            category: ["React", "GSAP"],
            site_link: "https://j8ahmed-react-review-slider-app.netlify.app/",
            github_repo: "https://github.com/j8ahmed/react_slider_reviews_app",
            description: {
                overview: "This project was built as a React Single Page Application (SPA). It is a slider build with React using GitHub API users data.",
                key_features: [
                    "It features an automatic slide change set to a timer.",
                    "It has alternating directions on slide change.",
                    "The load animations were built using the Greensock Animation Platform (GSAP).",
                ],
                conclusion: "Overall, it was a fun project. It was small but cover a key component to many client sites. Sliders are very popular and although there are libraries that build sliders it is always great to know how to build it from scratch. I completed this project as part of a React projects YouTube course in January 2021 from freeCodeCamp.",
            }
        },
        {
            id: 5,
            name: "Restaurant Menu",
            image: ProjectImage5,
            category: ["React", "GSAP"],
            site_link: "https://j8ahmed-react-food-menu-app.netlify.app/",
            github_repo: "https://github.com/j8ahmed/react_restaurant_menu_app",
            description: {
                overview: "This project was built as a React Single Page Application (SPA). It is a sample restaurant menu app.",
                key_features: [
                    "It features category selectors that filter menu item data by their respective category fields.",
                    "It includes a dynamically set categories list built around the unique category list values from all the menu items listed",
                    "The load animations were built using the Greensock Animation Platform (GSAP).",
                ],
                conclusion: "Overall, it was a fun project. I completed this project as part of a React projects YouTube course in January 2021 from freeCodeCamp.",
            },
        },
        {
            id: 6,
            name: "Grocery List App",
            image: ProjectImage6,
            category: ["React", "GSAP"],
            site_link: "https://j8ahmed-react-grocery-list-app.netlify.app/",
            github_repo: "https://github.com/j8ahmed/react_grocery_list_app",
            description: {
                overview: "This project was built as a React Single Page Application (SPA). It is a grocery list app.",
                key_features: [
                    "It features multiple component states like adding, editing, and deleting list items.",
                    "It includes a modal component that displays messages highlighting event completion and errors.",
                    "It stages functional events and runs animations around those events using the Greensock Animation Platform (GSAP).",
                ],
                conclusion: "Overall, it was a really fun project. It felt complete rather than a component of a bigger website. I completed this project as part of a React projects YouTube course in January 2021 from freeCodeCamp.",
            },
        },
        {
            id: 7,
            name: "Accordian FAQs App",
            image: ProjectImage7,
            category: ["React", "GSAP"],
            site_link: "https://j8ahmed-react-faqs-app.netlify.app/",
            github_repo: "https://github.com/j8ahmed/react_accordion_faqs",
            description: {
                overview: "This project was built as a React Single Page Application (SPA). It is a sample FAQs section for a website.",
                key_features: [
                    "An animation and icon change when question elements are expanded.",
                    "Built to be responsive with a mobile first approach.",
                    "The load animations were built using the Greensock Animation Platform (GSAP).",
                ],
                conclusion: "Overall, it was a fun project. I completed this project as part of a React projects YouTube course in January 2021 from freeCodeCamp.",
            },
        },
        {
            id: 8,
            name: "Birthday App",
            image: ProjectImage8,
            category: ["React", "GSAP"],
            site_link: "https://j8ahmed-react-birthday-reminder.netlify.app/",
            github_repo: "https://github.com/j8ahmed/react_birthday_reminder_app",
            description: {
                overview: "This project was built as a React Single Page Application (SPA). It is a sample Birthday Reminder App.",
                key_features: [
                    "An animation on Birthdays clear.",
                    "The load animations were built using the Greensock Animation Platform (GSAP).",
                ],
                conclusion: "Overall, it was a fun project. It was simple and was one of the earlier projects in the course. I completed this project as part of a React projects YouTube course in January 2021 from freeCodeCamp.",
            },
        },
        {
            id: 9,
            name: "Job Exp Tabs",
            image: ProjectImage9,
            category: ["React", "GSAP"],
            site_link: "https://j8ahmed-react-exp-app.netlify.app/",
            github_repo: "https://github.com/j8ahmed/react_experience_tabs_app",
            description: {
                overview: "This project was built as a React Single Page Application (SPA). It is a Job Expierences Component for a resume website.",
                key_features: [
                    "An animation on initial load and reloads.",
                    "Component reloads based on button clicks.",
                    "The load animations were built using the Greensock Animation Platform (GSAP).",
                ],
                conclusion: "Overall, it was a fun project. It was simple and was one of the earlier projects in the course. I might implement this on my own portfolio site in the future. I completed this project as part of a React projects YouTube course in January 2021 from freeCodeCamp.",
            },
        },
        {
            id: 10,
            name: "Color Generator App",
            image: ProjectImage10,
            category: ["React", "GSAP"],
            site_link: "",
            github_repo: "https://github.com/j8ahmed/react_color_generator_app",
            description: {
                overview: "This project was built as a React Single Page Application (SPA). It is a color generator that accepts a hex code color value (3 value or 6 value syntax) and produces a gradient of color along a lightness to darkness spectrum.",
                key_features: [
                    "It's use of the Values.js library for the color gradient production.",
                    "It supports copying to the device's clipboard on one left click of the color.",
                    "It utilizes the React useEffect hook's cleanup function to prevent memory leakage as a result of repeatedly adding event listeners to components that are re-rendering multiple times.",
                    "It runs animations using the Greensock Animation Platform (GSAP).",
                ],
                conclusion: "Overall, it was a fun project which I completed as part of a React projects YouTube course in January 2021 from freeCodeCamp.",
            },
        },
        {
            id: 11,
            name: "Tours List App",
            image: ProjectImage11,
            category: ["React", "GSAP"],
            site_link: "https://j8ahmed-react-tour-list-app.netlify.app/",
            github_repo: "https://github.com/j8ahmed/react_tours_list_app",
            description: {
                overview: "This project was built as a React Single Page Application (SPA). It is a sample Tours List App.",
                key_features: [
                    "An animation on initial load and reloads.",
                    "Component reloads based on button clicks.",
                    "It stages functional events and runs animations around those events using the Greensock Animation Platform (GSAP).",
                ],
                conclusion: "Overall, it was a fun project. It was simple and was one of the earlier projects in the course. I improved my skills a lot more since completing this project. I completed this project as part of a React projects YouTube course in January 2021 from freeCodeCamp.",
            },
        },
        {
            id: 10002,
            name: "React I Phone Calculator",
            image: ProjectImage02,
            category: ["React", "Redux"],
            site_link: "https://codepen.io/J8ahmed/pen/GBwgBe",
            github_repo: "",
            description: {
                overview: "This project was one of my favorite projects from when I first learned React and Redux.",
                key_features: [
                    "React Components for the Calculator display and buttons.",
                    "input checking and staged calculations that mimic the I Phone's default calculator app features.",
                ],
                conclusion: "Overall, it's one of my favourite U.I. projects. I really enjoyed when I first built. I plan to update it to include the scientific calculator features from the I Phone calculator as well. This project was built as a part of the Front-end frameworks curriculum at freeCodeCamp.",
            },
        },
        
    ]
}


