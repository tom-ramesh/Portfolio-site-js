import ScrollReveal from "scrollreveal";

//toggle menu icon
const menuIcon = document.querySelector("#menu-icon")! as HTMLLIElement;
const navbar = document.querySelector(".navbar")! as HTMLElement;

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// select nav button as per scroll
const sections = document.querySelectorAll(
  "section"
)! as NodeListOf<HTMLElement>;
const navLinks = document.querySelectorAll(
  "header nav a"
)! as NodeListOf<HTMLAnchorElement>;

window.onscroll = () => {
  sections.forEach((section) => {
    // console.log("sectyio", section.offsetHeight, section.offsetTop);
    //how far away from top
    const top = window.scrollY;
    //element how far away from top
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          ?.classList.add("active");
      });
    }
  });

  // sticky navbar
  const header = document.querySelector("header")! as HTMLElement;
  header.classList.toggle("sticky", window.scrollY > 100);

  //remove toggleicn and navbar when click navbar link/scroll
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//scroll reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
