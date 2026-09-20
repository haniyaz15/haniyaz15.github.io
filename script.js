/* =========================
TYPING EFFECT
========================= */

const typingText = document.getElementById("typing");

const words = [
"Graphic Designer",
"Digital Marketer",
"Data Analytics Learner",
"Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

```
const currentWord = words[wordIndex];

if (!deleting) {

    typingText.textContent =
        currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {

        deleting = true;

        setTimeout(typeEffect, 1300);

        return;
    }

} else {

    typingText.textContent =
        currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

        deleting = false;

        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }

    }
}

setTimeout(
    typeEffect,
    deleting ? 60 : 100
);
```

}

typeEffect();

/* =========================
MOBILE MENU
========================= */

const menuIcon = document.getElementById("menuIcon");
const navbar = document.getElementById("navbar");

if (menuIcon && navbar) {

```
menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuIcon.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});
```

}

/* =========================
CLOSE MOBILE MENU
========================= */

document.querySelectorAll("nav a").forEach(link => {

```
link.addEventListener("click", () => {

    if (navbar) {
        navbar.classList.remove("active");
    }

    if (menuIcon) {

        const icon = menuIcon.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});
```

});

/* =========================
ACTIVE NAVBAR
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

```
let current = "";

sections.forEach(section => {

    const sectionTop =
        section.offsetTop - 250;

    const sectionHeight =
        section.clientHeight;

    if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
    ) {

        current = section.getAttribute("id");

    }

});


navLinks.forEach(link => {

    link.classList.remove("active");

    if (
        link.getAttribute("href") === "#" + current
    ) {

        link.classList.add("active");

    }

});
```

});

/* =========================
SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver(
(entries) => {

```
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.12
    }
);
```

revealElements.forEach(element => {

```
revealObserver.observe(element);
```

});

/* =========================
CONTACT FORM - FORMSPREE
========================= */

const contactForm =
document.querySelector(".contact-form form");

if (contactForm) {

```
contactForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const submitButton =
        contactForm.querySelector("button[type='submit']");

    const originalText =
        submitButton.innerHTML;


    submitButton.disabled = true;

    submitButton.innerHTML =
        'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';


    try {

        const response = await fetch(
            contactForm.action,
            {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    "Accept": "application/json"
                }
            }
        );


        if (response.ok) {

            submitButton.innerHTML =
                'Message Sent <i class="fa-solid fa-check"></i>';

            contactForm.reset();

            setTimeout(() => {

                submitButton.innerHTML =
                    originalText;

                submitButton.disabled = false;

            }, 3000);


        } else {

            throw new Error("Form submission failed.");

        }


    } catch (error) {

        submitButton.disabled = false;

        submitButton.innerHTML =
            'Try Again <i class="fa-solid fa-rotate-right"></i>';

        alert(
            "Something went wrong. Please try again."
        );

    }

});
```

}
