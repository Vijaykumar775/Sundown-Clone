
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function page3Animation() {

    let elemC = document.querySelector('.elem-container')
    let fixImg = document.querySelector("#fixed-img")
    let elems = document.querySelectorAll(".elem")


    elemC.addEventListener("mouseenter", function () {
        fixImg.style.display = "block"

    })

    elemC.addEventListener("mouseleave", function () {
        fixImg.style.display = "none"

    })

    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            let image = e.getAttribute("data-image")
            fixImg.style.backgroundImage = `url(${image})`
        })
    })
}
page3Animation()



function SwipperAni() {

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
SwipperAni()


function menuAni() {
    let menu = document.querySelector("nav h3")
    let fullscr = document.querySelector("#full-scr")
    let img = document.querySelector('nav img')
    let flag = 0;

    menu.addEventListener("click", function () {
        if (flag == 0) {
            fullscr.style.top = 0
            img.style.opacity = 0
            flag = 1
        }

    })

    fullscr.addEventListener("click", function () {
        fullscr.style.top = "-100%"
        img.style.opacity = 1
        flag = 0

    })

}
menuAni()


function loaderAni() {
    let load = document.querySelector('#loader')
    setTimeout(function () {
        load.style.top = "-100%"
    }, 4000)
}
loaderAni()