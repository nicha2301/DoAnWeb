window.addEventListener("scroll", () => {
    var header = document.querySelector(".container");
    header.classList.toggle("sticky", window.scrollY > 90);

    var headding = document.querySelector(".summary-inner");
    headding.classList.toggle("headding-fix", window.scrollY > 30)
    headding.classList.toggle("headding-absolute", window.scrollY > 531)
});


var items = document.querySelectorAll(".product-image-thumbnail img");
// item.addEventListener("mouseover", e => {
//     console.log(e.target)
// })

var previewImg = document.querySelector(".product-image-wrap img")

items.forEach(item => {
    item.addEventListener("mouseover", e => {
        previewImg.src = e.target.src
    })
});