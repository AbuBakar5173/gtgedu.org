
// ----------------------Why Us Cards----------------------

function appendCardsinWhyUs(icon, h2, p) {
    let WhyUsCards = document.querySelector(".us-container");

    let html = `<div class="AboutUs">
                        <i class='${icon}'></i>
                        <h2>${h2}</h2>
                        <p>${p}</p>
                    </div>`

    WhyUsCards.insertAdjacentHTML("beforeend", html);
}

const WhyUsCards = [
    {
        icon: "bx bx-compass",
        h2: "Guided Courses",
        p: "For every skill, from beginner to advanced"
    },
    {
        icon: "bx bx-medal",
        h2: "Get Certified",
        p: "Stand out in the job market and boost your resume"
    },
    {
        icon: "bx bx-briefcase",
        h2: "Job & Skill Path",
        p: "Master job skills or aquire new ones"
    },
    {
        icon: "bx bx-gift",
        h2: "Start for free",
        p: "Explore with a free trial or demo course"
    },
    {
        icon: "fa-regular fa-handshake",
        h2: "1-on-1 mentorship",
        p: "Personal mentoring with experts"
    },
    {
        icon: "bx bx-joystick",
        h2: "Learn with Fun",
        p: "Make learning exciting and engaging"
    }
];

WhyUsCards.forEach(course => {
    appendCardsinWhyUs(
        course.icon, course.h2, course.p
    );
});