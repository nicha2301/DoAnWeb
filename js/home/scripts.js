window.addEventListener("scroll", () => {
    var header = document.querySelector(".container");
    header.classList.toggle("sticky", window.scrollY > 90);
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})