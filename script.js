
// MOBILE NAVIGATION

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuIcon.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// TYPING ANIMATION

const typingElement = document.getElementById("typing");

const roles = [
    "Software Developer",
    "Backend Developer",
    "Python Developer",
    "Computer Science Graduate"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingElement.textContent = currentRole.substring(
        0,
        characterIndex
    );

    let speed = deleting ? 45 : 90;

    if (!deleting && characterIndex === currentRole.length) {

        deleting = true;
        speed = 1300;

    } else if (deleting && characterIndex === 0) {

        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// PROFILE IMAGE CHECK

const profileImage = document.querySelector(".profile-image");

profileImage.addEventListener("error", function () {

    console.error(
        "Profile image not found. Check profile.png"
    );

});
