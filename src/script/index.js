const glideCarousel = document.querySelector(".glide");

const config = {
    type: "carousel",
    autoplay: 3000,
    keyboard: true,
    perView: 1,
    gap: 25    
};

new Glide(glideCarousel, config).mount();
