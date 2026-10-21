const slides = document.querySelectorAll(".service-grid, .stats-grid, .testimonials")

const options = {
    threshold: 0.3,
    rootMargin: "0px 0px -80px 0px"
};

const recipeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".stagger-item");

            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add("animate");
                }, index * 200);
            });
        }
    });
}, options);

animatedCont.foreach((card) => {
    animateObserver.observe(card);
});

const scrollIndicator = document.querySelector("scroll-progress");
window.addEventListener("scroll", () => {
    const percent = window.scrollY / (document.documentElement.scrollHeight - window.InnerHeight) * 100 + "%";
    scrollIndicator.style.width = percent
});

const headbgc = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        headbgc.style.background = "rgba(10, 10, 10, 0.95)";
    } else {
        headbgc.style.background = "rgba(10, 10, 10, 0.9)";
    }
});

const navlinks = document.querySelector(".nav-links a");
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const id = link.getAttribute("href");
        document.querySelectorAll(id).scrollIntoView({behavior: "smooth", block: "center"});
    });
});

for (let i = 0; i < 30; i++) {
    const flake = document.createElement("div");
    flake.classList.add("snowflake");
    flake.style.left = Math.random() * 100 + "%";
    flake.style.amimationsDelay = Math.random() * 100 + "ms";
    flake.style.amimationsDuration = Math.random() * 10000 + "ms";
    container.appendChild(flake);
}

function countUp(element, target, index, duration = 200) {
    let current = 0;
    const step = target / (duration / 16);
    setInterval(() => {
        if (current + step < target) {
            current += step
            element.innerHTML = Math.round(current)
        } else {
            switch (index) {
                case 0:
                    element.innerHTML = "1M+"
                    break;

                case 1:
                    element.innerHTML = "99.9%"
                    break;

                default:
                    element.innerHTML = target
                    break;
            }
        }
    }, duration / 16)
}

const statNum = document.querySelectorAll(".stat-number")

countUp(statNum[0], 1000, 0, 50)
countUp(statNum[1], 99.9, 1, 50)