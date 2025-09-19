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
/* window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const greeting = document.getElementById("loader-greeting");
  const percentage = document.getElementById("loader-percentage");

  if (loader && greeting && percentage && window.gsap) {
    // Animate percentage from 0 to 100
    gsap.fromTo(
      { val: 0 },
      {
        val: 100,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: function () {
          percentage.textContent = Math.round(this.targets()[0].val) + "%";
        },
        onComplete: function () {
          // Animate greeting text in
          gsap.fromTo(
            greeting,
            { y: 40, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.7,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(loader, {
                  opacity: 0,
                  duration: 0.5,
                  delay: 0.5,
                  onComplete: () => {
                    loader.style.display = "none";
                  },
                });
              },
            }
          );
        },
      }
    );
  } else if (loader) {
    // fallback if GSAP not loaded
    percentage.textContent = "100%";
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 700);
  }
});
 */
