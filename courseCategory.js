const ComputerCourseCards = [
    {
        img_src: "Assets/Certificate.webp",
        category: "Certificate/Diploma",
        subHead: "ADCA, DCA, Tally",
        supportingText: "Ideal for Students, Freshers and Working Professionals.",
        link: "#why-us"
    },
    {
        img_src: "Assets/Programming.webp",
        category: "Programming/IT",
        subHead: "Frontend, Backend, Data Science",
        supportingText: "Ideal for aspiring programmers, developers and IT enthusiasts.",
        link: "#why-us"
    },
    {
        img_src: "Assets/Basics.webp",
        category: "Basic Skills",
        subHead: "Typing, Advance Excel, Internet",
        supportingText: "Ideal for Beginners and anyone looking to dive into computer literacy",
        link: "#why-us"
    },
    {
        img_src: "Assets/Career.webp",
        category: "Career-Oriented",
        subHead: "Digital Marketing, Management",
        supportingText: "Ideal for Individuals aiming to advance in their careers.",
        link: "#why-us"
    },
    {
        img_src: "Assets/Accounting.webp",
        category: "Accounting/Financial",
        subHead: "Accounting Basics, Excel",
        supportingText: "Ideal for Students and Business owners managing finance",
        link: "#why-us"
    },
    {
        img_src: "Assets/Creative.webp",
        category: "Creative",
        subHead: "Designing, Animation & VFX",
        supportingText: "Ideal for aspiring designers, animators and creative professionals",
        link: "#why-us"
    }
];

// -/-/-/-/-/-/-/-/-/-/-/-/-/- University Course Cards -/-/-/-/-/-/-/-/-/-/-/-/-/-

const UniversityCourseCards = [
    {
        img_src: "Assets/Arts.webp",
        category: "Arts-Humanities",
        subHead: "BA, MA",
        supportingText: "Ideal for creative students and culture enthusiasts.",
        link: "#why-us"
    },
    {
        img_src: "Assets/Business.webp",
        category: "Commerce-Business",
        subHead: "B.com, M.com, MBA",
        supportingText: "Ideal for students, freshers, and aspiring entrepreneurs.",
        link: "#why-us"
    },
    {
        img_src: "Assets/Science.webp",
        category: "Science-Technology",
        subHead: "B.sc, M.sc",
        supportingText: "Ideal for researchers, innovators, and science enthusiasts.",
        link: "#why-us"
    },
    {
        img_src: "Assets/Technical.webp",
        category: "Engineering",
        subHead: "Mechanical, Technical",
        supportingText: "Ideal for aspiring engineers and technical professionals.",
        link: "#why-us"
    },
    {
        img_src: "Assets/Computers.webp",
        category: "Computer-IT",
        subHead: "BCA, MCA",
        supportingText: "Ideal for programmers, developers, and IT enthusiasts.",
        link: "#why-us"
    },
    {
        img_src: "Assets/law.webp",
        category: "Law-Management",
        subHead: "PGDCl, MBL",
        supportingText: "Ideal for future lawyers and business leaders.",
        link: "#why-us"
    },
    {
        img_src: "Assets/Education.webp",
        category: "Education",
        subHead: "B.Ed, M.Ed",
        supportingText: "Ideal for aspiring teachers and education professionals.",
        link: "#why-us"
    },
    {
        img_src: "Assets/Safety.webp",
        category: "Safety",
        subHead: "DFSM, PGDISM",
        supportingText: "Ideal for future lawyers and business leaders.",
        link: "#why-us"
    }
];

// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


let swiperContainerHtml = `<div class="swiper mySwiper">
    <div class="swiper-wrapper">
        <!-- Cards will be added Dynamically -->
    </div>
    <div class="swiper-pagination"></div>
</div>`;

// Insert Swiper Containers
document.querySelector("#university-courses").insertAdjacentHTML("beforeend", swiperContainerHtml);
document.querySelector("#computer-courses").insertAdjacentHTML("beforeend", swiperContainerHtml);

// Reusable Function for Appending Cards
function appendCardsInSection(sectionId, img_src, category, subHead, supportingText, link) {
    let CourseContainer = document.querySelector(`${sectionId} .swiper-wrapper`);

    let html = `<div class="swiper-slide">
                <article>
                    <img src="${img_src}" alt="${category} Image">
                    <div>
                        <h2>${category}</h2>
                        <h3>${subHead}</h3>
                        <p>${supportingText}</p>
                        <a class="btn" href="${link}">
                            <span>View Courses</span>
                        </a>
                    </div>
                </article>
            </div>`;

    CourseContainer.insertAdjacentHTML("beforeend", html);
}

// Append Computer Course Cards
ComputerCourseCards.forEach(course => {
    appendCardsInSection("#computer-courses", course.img_src, course.category, course.subHead, course.supportingText, course.link);
});

// Append University Course Cards
UniversityCourseCards.forEach(course => {
    appendCardsInSection("#university-courses", course.img_src, course.category, course.subHead, course.supportingText, course.link);
});
