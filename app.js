document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        // Check if the element is intersecting
        if (entry.isIntersecting) {
          // Add the class to animate in
          entry.target.classList.add("element-visible");
        }
      });
    },
    { threshold: 0.1 }
  ); // Trigger when at least 10% of the element is visible

  // Target elements with the class `.element-slide-in`
  var targets = document.querySelectorAll(".element-slide-in");
  targets.forEach((target) => {
    observer.observe(target); // Start observing
  });
});
