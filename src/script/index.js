const glideCarousel = document.querySelector(".glide");

const config = {
    type: "carousel",
    autoplay: 5000,
    keyboard: true,
    perView: 1,
    gap: 0   
};

new Glide(glideCarousel, config).mount();
