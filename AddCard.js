
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

/* -------------------Frequently Asked Questions---------- */


const faqsCourses = [
    {
        question: "What types of courses are offered at Galaxy The Global?",
        answer: "We offer a wide range of courses, including Computer and IT courses like Programming, Financial Accounting, and AutoCAD, university courses in Arts, Science, Engineering, and Law, and vocational and technical courses."
    },
    {
        question: "Are the courses beginner-friendly?",
        answer: "Yes, we provide courses for all skill levels, from beginner to advanced. Basic computer courses are ideal for beginners."
    },
    {
        question: "How long are the courses?",
        answer: "Course durations vary depending on the program. Short-term courses can last a few weeks, while long-term programs can go up to a year."
    },
    {
        question: "Are the courses online or in-person?",
        answer: "Currently, we offer in-person classes. However, online classes may be introduced soon."
    }
];

const faqsAdmission = [
    {
        question: "How can I enroll in a course?",
        answer: "Enrollment is easy! Visit the 'Courses' section of our website, choose your desired program, and follow the instructions to register. You can also visit our institute for offline registration."
    },
    {
        question: "Are there any discounts or scholarships?",
        answer: "Yes, we occasionally offer discounts for early registrations and scholarships for meritorious students. Contact us for more details."
    },
    {
        question: "What payment methods are accepted?",
        answer: "We accept payments via cash, bank transfer, UPI, and credit/debit cards."
    },
    {
        question: "What is the fee structure?",
        answer: "The fee structure depends on the course you choose. Detailed fee information is available on the course pages or at our office."
    }
];

const faqsFees = [
    {
        question: "Are there any discounts or scholarships?",
        answer: "Yes, we occasionally offer discounts for early registrations and scholarships for meritorious students. Contact us for more details."
    },
    {
        question: "What payment methods are accepted?",
        answer: "We accept payments via cash, bank transfer, UPI, and credit/debit cards."
    },
    {
        question: "What is the fee structure?",
        answer: "The fee structure depends on the course you choose. Detailed fee information is available on the course pages or at our office."
    }
];

const faqsGeneral = [
    {
        question: "What is Galaxy The Global (GTG)?",
        answer: "Galaxy The Global (GTG) is a Computer Training Institute specializing in providing quality education and training in various fields, including computer and IT courses, university programs, and technical skills."
    },
    {
        question: "Where is Galaxy The Global located?",
        answer: "Our institute is located in [Insert location here]. For exact directions, check the 'Contact Us' section on our website."
    },
    {
        question: "Who can enroll in your courses?",
        answer: "Our courses are open to students, working professionals, and anyone interested in enhancing their knowledge and skills in computer training or other academic fields."
    }
];


function appendFaqsInSection(sectionClass, question, answer) {
    let faqCard = document.querySelector(`${sectionClass}`);

    let html = `<div class="faq-item">
                    <div class="faq-question">
                        <span>Q: ${question}</span>
                        <span class="faq-icon">+</span>
                    </div>
                    <div class="faq-answer">
                        Ans: ${answer}
                    </div>
                </div>`;

    faqCard.insertAdjacentHTML("beforeend", html);
}


faqsCourses.forEach(item => {
    appendFaqsInSection("#F-cour", item.question, item.answer);
});

faqsAdmission.forEach(item => {
    appendFaqsInSection("#F-admi", item.question, item.answer);
});

faqsFees.forEach(item => {
    appendFaqsInSection("#F-fees", item.question, item.answer);
});

faqsGeneral.forEach(item => {
    appendFaqsInSection("#F-gene", item.question, item.answer);
});
