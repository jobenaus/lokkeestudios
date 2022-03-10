/*========= INITIALIZATION =========*/
import Splide from "@splidejs/splide";

/*========= SPLIDEJS PROJECTS SLIDER =========*/
if (document.querySelector(".splide") != null) {
  new Splide(".splide", {
    perPage: 2,
    gap: "0.3rem",
    breakpoints: {
      1536: {},
      1024: {
        perPage: 1,
      },
    },
    classes: {
      pagination: "hidden",
    },
  }).mount();
}
