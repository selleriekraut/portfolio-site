document.addEventListener("DOMContentLoaded", () => {
  // Ticker content generation
  const message = "welcome to my PORTFOLIO*";
  const content = document.querySelector(".ticker-content");
  const spans = Array.from(
    { length: 10 },
    () => `<span>${message}</span>`
  ).join("");
  content.innerHTML = spans + spans;

  //get fatter!
  const img = document.getElementById("me");
  let scaleX = 1;

  img.addEventListener("click", (event) => {
    event.stopPropagation(); // prevent document click from firing
    scaleX += 0.1;
    img.style.transform = `scaleX(${scaleX})`;
  });

  document.addEventListener("click", (event) => {
    if (!img.contains(event.target)) {
      scaleX = 1;
      img.style.transform = `scaleX(${scaleX})`;
    }
  });

  // CV Modal functionality
  initCVModal();
  // CV Modal functions
  const cvImageSrc = "pics/AndreyKrasavinCV.png";
  function initCVModal() {
    const cvImage = document.getElementById("cv");
    const modal = document.getElementById("cvModal");
    const closeBtn = document.querySelector(".modal-close");

    // Open modal when CV image is clicked
    cvImage.addEventListener("click", () => {
      openCVModal();
    });

    // Close modal when clicking close button
    closeBtn.addEventListener("click", () => {
      closeCVModal();
    });

    // Close modal when clicking outside of image
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeCVModal();
      }
    });

    // Close modal with Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("show")) {
        closeCVModal();
      }
    });
  }

  function openCVModal() {
    const modal = document.getElementById("cvModal");
    const modalImage = document.getElementById("modalImage");

    modalImage.src = cvImageSrc;
    modal.classList.add("show");
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }

  function closeCVModal() {
    const modal = document.getElementById("cvModal");
    modal.classList.remove("show");
    document.body.style.overflow = "auto"; // Restore scrolling
  }
});
