document.addEventListener("DOMContentLoaded", () => {
    const articleBlocks = document.querySelectorAll('main article');

    articleBlocks.forEach(article => {
        article.classList.add('article-hover');
        });

    const navLinks = document.querySelectorAll('nav ul li');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('nav-hover');
        });
        
        link.addEventListener('mouseout', () => {
            link.classList.remove('nav-hover');
        });
    });

    const message = "welcome to my PORTFOLIO*";
    const content = document.querySelector('.ticker-content');

    const spans = Array.from({ length: 10 }, () => `<span>${message}</span>`).join("");
    content.innerHTML = spans + spans;

    //get fatter!
    const img = document.getElementById("me");
    let scaleX = 1; // horizontal scale
    let scaleY = 1; // vertical scale
  
    img.addEventListener("click", (event) => {
        event.stopPropagation(); // prevent document click from firing
        scaleX += 0.1;
        img.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`;
      });
    
      document.addEventListener("click", (event) => {
        if (!img.contains(event.target)) {
          scaleX = 1;
          scaleY = 1;
          img.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`;
        }
      });
});