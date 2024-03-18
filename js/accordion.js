const slideDown = function (el) {
  el.style.height = "auto";
  let h = el.offsetHeight;
  el.animate(
    {
      height: [0, h + "px"],
    },
    {
      duration: 300,
    }
  );
  el.style.height = "auto";
  el.setAttribute("aria-hidden", "false");
};
const slideUp = function (el) {
  let h = el.offsetHeight;
  el.style.height = h + "px";
  el.animate(
    {
      height: [h + "px", 0],
    },
    {
      duration: 300,
    }
  );
  el.style.height = 0;
  el.setAttribute("aria-hidden", "true");
};
const accordions = document.querySelectorAll(".include-accordion");
accordions.forEach(function (accordion) {
  const accordionBtns = accordion.querySelectorAll(".accordionBtn");
  accordionBtns.forEach(function (accordionBtn, index) {
    accordionBtn.addEventListener("click", function (e) {
      const isActive = e.target.parentNode.classList.toggle("active");
      accordionBtn.setAttribute("aria-expanded", isActive ? "true" : "false");
      const content = accordionBtn.nextElementSibling;
      if (isActive) {
        slideDown(content);
      } else {
        slideUp(content);
      }

      let container = accordion.closest(".scroll-control");
      if (!isActive && container) {
        container.classList.remove("active");
      } else if (container !== null) {
        container.classList.add("active");
      }
    });
  });
});
