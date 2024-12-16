// -/-/-/-/-/-/-/-/-/-/--Smooth Scroll---/-/-/-/-/-/-/-/-/-/-/


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center' // Align the section to the center of the screen
            });
        }
    });
});


// -/-/-/-/-/-/-/-/-/-/--Toggle Switch---/-/-/-/-/-/-/-/-/-/-/


let ToggleHTML = `<label class="switch">
<span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
<span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
<input type="checkbox" class="input">
<span class="slider"></span>
</label>`

document.querySelector(".left").insertAdjacentHTML("beforeend", ToggleHTML);



// -/-/-/-/-/-/-/-/-/-/--Radio Button---/-/-/-/-/-/-/-/-/-/-/




document.addEventListener("DOMContentLoaded", () => {
    const computerOption = document.getElementById("computerOption");
    const universityOption = document.getElementById("universityOption");
    const computerCourses = document.getElementById("computer-courses");
    const universityCourses = document.getElementById("university-courses");

    // Function to show the appropriate course section
    function toggleCourses(section) {
        if (section === "computer") {
            computerCourses.style.display = "flex";
            universityCourses.style.display = "none";
            computerOption.checked = true;
            universityOption.checked = false;
        } else if (section === "university") {
            universityCourses.style.display = "flex";
            computerCourses.style.display = "none";
            universityOption.checked = true;
            computerOption.checked = false;
        }
    }

    // Handle clicking on the "Go to Computer Courses" link
    document.getElementById("goToComputerCourses").addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        // Scroll to the computer courses section and display it
        toggleCourses("computer");

        // Smooth scroll to the computer courses section
        const target = document.getElementById("computer-courses");
        window.scrollTo({
            top: target.offsetTop - 50, // Adjust for any offset like fixed header
            behavior: 'smooth'
        });
    });

    // Handle clicking on the "Go to University Courses" link
    document.getElementById("goToUniversityCourses").addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        // Scroll to the university courses section and display
        toggleCourses("university");

        // Smooth scroll to the university courses section
        const target = document.getElementById("university-courses");
        window.scrollTo({
            top: target.offsetTop - 50, // Adjust for any offset like fixed header
            behavior: 'smooth'
        });
    });

    // Event listeners to toggle visibility based on radio selection
    computerOption.addEventListener("change", () => {
        if (computerOption.checked) {
            computerCourses.style.display = "flex";
            universityCourses.style.display = "none";
        }
    });

    universityOption.addEventListener("change", () => {
        if (universityOption.checked) {
            computerCourses.style.display = "none";
            universityCourses.style.display = "flex";
        }
    });
});


// -/-/-/-/-/-/-/-/-/-/--Other Script---/-/-/-/-/-/-/-/-/-/-/