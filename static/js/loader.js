/* function loader() {
  var t1 = gsap.timeline();

  t1.from("#loader h2", {
    x: 40,
    duration: 0.75,
    stagger: 0.1,
    opacity: 0,
  });
  t1.to("#loader h2", {
    x: -10,
    duration: 0.75,
    stagger: 0.1,
    opacity: 0,
  });
  t1.to("#loader", {
    opacity: 0,
  });
  t1.from(".main-heading h2 span", {
    y: 100,
    duration: 0.75,
    stagger: 0.1,
    opacity: 0,
    delay: -0.75,
  });
  t1.to("#loader", {
    display: "none",
  });
}

loader();
 */
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 1500);
  }
});
