const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

// Menemukan semua elemen dengan kelas "hidden"
const hiddenElements = document.querySelectorAll(".hidden");

// Loop melalui setiap elemen dengan kelas "hidden"
hiddenElements.forEach((hiddenElement) => {
    // Mendapatkan elemen-elemen anak dari elemen tersebut
    const children = Array.from(hiddenElement.children);

    // Loop melalui setiap elemen anak
    children.forEach((child) => {
        // Lakukan operasi yang diinginkan pada setiap elemen anak di sini
        child.classList.add("hidden-el");
        observer.observe(child);
    });
});

const search = document.querySelector(".bi-search");
const searchBox = document.querySelector(".search-box");

search.addEventListener("click", () => {
    searchBox.classList.toggle("active");
});

// sticky //

const navbar = document.querySelector(".navbar-nav");
const observer2 = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.boundingClientRect.top <= -20) {
                navbar.classList.remove("sticky");
            } else {
                navbar.classList.add("sticky");
            }
        });
    },
    {threshold: 0}
);
observer2.observe(navbar);
