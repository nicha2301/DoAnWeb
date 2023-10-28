window.addEventListener("scroll", () => {
    var header = document.querySelector(".container");
    header.classList.toggle("sticky", window.scrollY > 90);

    var headding = document.querySelector(".summary-inner");
    headding.classList.toggle("headding-fix", window.scrollY > 30)
    headding.classList.toggle("headding-absolute", window.scrollY > 553)
});


var items = document.querySelectorAll(".product-image-thumbnail img");
var previewImg = document.querySelector(".product-image-wrap img")
var seeMore = document.getElementById('see-more')

items.forEach(item => {
    item.addEventListener("mouseover", e => {
        previewImg.src = e.target.src
        seeMore.href = e.target.src
    })
});

var containerImg = document.querySelector('.product-image-wrap')

containerImg.addEventListener("mousemove", e => {
    var x = e.clientX - e.target.offsetLeft;
    var y = e.clientY - e.target.offsetTop;

    previewImg.style.transformOrigin = `${x}px ${y}px` 
    previewImg.style.transform = "scale(1.3)"
})

containerImg.addEventListener("mouseleave", e => {
    previewImg.style.transformOrigin = "center"
    previewImg.style.transform = "scale(1)"
})



