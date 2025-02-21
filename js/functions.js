gsap.registerPlugin(ScrollTrigger);

gsap.set(".circulo", { yPercent: -5 });
gsap.set(".puntos", { yPercent: 10 });
gsap.set(".img-formas", { yPercent: -20 });
gsap.set(".grupo-formas", { yPercent: 5 });

gsap.to(".circulo", {
    yPercent: 5,
    ease: "none",
    scrollTrigger: {
        trigger: ".grupo-formas",
        scrub: 1
    }
});

gsap.to(".puntos", {
    yPercent: -10,
    ease: "none",
    scrollTrigger: {
        trigger: ".grupo-formas",
        scrub: 1
    }
});

gsap.to(".img-formas", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
        trigger: ".grupo-formas",
        scrub: 1
    }
});

gsap.to(".grupo-formas", {
    yPercent: -5,
    ease: "none",
    scrollTrigger: {
        trigger: ".grupo-formas",
        end: "bottom center",
        scrub: 1
    }
});