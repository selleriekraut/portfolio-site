document.addEventListener("DOMContentLoaded", () => {
  // Ticker content generation
  const message = "WELCOME TO MY PORTFOLIO";
  const content = document.querySelector(".ticker-content");
  // Ticker is optional (currently commented out in index.html)
  if (content) {
    const spans = Array.from(
      { length: 10 },
      () => `<span>${message}</span>`
    ).join("");
    content.innerHTML = spans + spans;
  }

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

  // Swing the CV frame once the mouse leaves it
  const cvFrame = document.querySelector(".cv-frame");
  cvFrame.addEventListener("mouseleave", () => {
    cvFrame.classList.remove("swing");
    void cvFrame.offsetWidth; // restart the animation if it's still running
    cvFrame.classList.add("swing");
  });
  cvFrame.addEventListener("animationend", () => {
    cvFrame.classList.remove("swing");
  });

  // Enlarged CV in a <dialog>
  const cvModal = document.getElementById("cvModal");
  document
    .querySelector(".cv-open")
    .addEventListener("click", () => cvModal.showModal());

  // Clicking the dimmed background (outside the image) closes it
  cvModal.addEventListener("click", (event) => {
    if (event.target === cvModal) {
      cvModal.close();
    }
  });
});
