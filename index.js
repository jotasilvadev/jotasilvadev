const glideCarousel = document.querySelector(".glide");

const config = {
    type: "carousel",
    autoplay: 3000,
    keyboard: true,
    perView: 1,
    gap: 0   
};

new Glide(glideCarousel, config).mount();
