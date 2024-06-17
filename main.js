let typed = new Typed(".text", {
    strings:[ "Frontend Developer" , "YouTuber"  ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// ......................... navbar click show nav bar .........................

const showSidebar = document.querySelector(".barico");
const hideSidebar = document.querySelector(".xmarkico");
const navbar2 = document.querySelector(".navbar2");
const ancer = document.getElementById("ancer");
const ancer2 = document.getElementById("ancer2");
const ancer3 = document.getElementById("ancer3");
const ancer4 = document.getElementById("ancer4");
const ancer5 = document.getElementById("ancer5");


showSidebar.addEventListener("click", function () {
    navbar2.style.display = "block";
});

ancer.addEventListener("click", function () {
    navbar2.style.display = "none";
});

ancer2.addEventListener("click", function () {
    navbar2.style.display = "none";
});

ancer3.addEventListener("click", function () {
    navbar2.style.display = "none";
});

ancer4.addEventListener("click", function () {
    navbar2.style.display = "none";
});

ancer5.addEventListener("click", function () {
    navbar2.style.display = "none";
});

showSidebar.addEventListener("click", function () {
    showSidebar.style.display = "none";
});

ancer.addEventListener("click", function () {
    showSidebar.style.display = "block";
});

ancer2.addEventListener("click", function () {
    showSidebar.style.display = "block";
});

ancer3.addEventListener("click", function () {
    showSidebar.style.display = "block";
});

ancer4.addEventListener("click", function () {
    showSidebar.style.display = "block";
});

ancer5.addEventListener("click", function () {
    showSidebar.style.display = "block";
});

// ......................... navbar click .........................

let sections = document.querySelector("section");
let navlink = document.querySelector(".navbar a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.hetAttribute(id);

        if (top >= offset && top < offset + height) {
            links.classList.remove("active");
            document.querySelector("navbar a [href*=" + id +"]").classList.add("active");
        }
    })
};

// .........................portfolio javascript code end......................... 
