const text = ["Frontend Developer", "Web Designer", "JavaScript Enthusiast"];
let index = 0;
let char = 0;

function typeEffect() {
  const typingElement = document.querySelector(".typing");
  if (char < text[index].length) {
    typingElement.innerHTML += text[index].charAt(char);
    char++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  const typingElement = document.querySelector(".typing");
  if (char > 0) {
    typingElement.innerHTML = text[index].substring(0, char - 1);
    char--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
  
  // Section reveal logic
  const sections = document.querySelectorAll(".section");
  const reveal = () => {
    sections.forEach(s => {
      if (s.getBoundingClientRect().top < window.innerHeight - 100) s.classList.add("show");
    });
  };
  window.addEventListener("scroll", reveal);
  reveal(); // Initial check
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("successMsg").innerText = "Message sent successfully!";
});