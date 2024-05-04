const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Header container
ScrollReveal().reveal(".header__container h1", scrollRevealOption);

ScrollReveal().reveal(".header__container h4", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
});

// About container
ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__container .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__container .about__flex", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__container .btn", {
    ...scrollRevealOption,
    delay: 1500,
});

// Discover container
ScrollReveal().reveal(".discover__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".discover__card__content", {
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
});

// Blog container
ScrollReveal().reveal(".blogs__card", {
    ...scrollRevealOption,
    interval: 400,
});

// Journals container
ScrollReveal().reveal(".journals__card", {
    ...scrollRevealOption,
    interval: 400,
});
