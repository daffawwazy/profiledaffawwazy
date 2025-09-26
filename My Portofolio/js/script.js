// =========================
//  ANIMASI BACKGROUND BOLA
// =========================

// Fungsi untuk membuat bola
function createBall(isHero = false) {
    const ball = document.createElement('div');
    ball.className = isHero ? 'animated-ball hero-ball' : 'animated-ball';
    
    const size = Math.random() * 150 + 50;
    ball.style.width = `${size}px`;
    ball.style.height = `${size}px`;
    
    ball.style.left = `${Math.random() * 100}vw`;
    ball.style.top = `${Math.random() * 100}vh`;
    
    const duration = Math.random() * 10 + 5;
    ball.style.animationDuration = `${duration}s`;
    
    const delay = Math.random() * 5;
    ball.style.animationDelay = `-${delay}s`;
    
    return ball;
}

const backgroundAnimation = document.createElement('div');
backgroundAnimation.className = 'background-animation';
document.body.appendChild(backgroundAnimation);

const heroBackgroundAnimation = document.createElement('div');
heroBackgroundAnimation.className = 'hero-background-animation';
document.querySelector('.hero-container').appendChild(heroBackgroundAnimation);

for (let i = 0; i < 10; i++) {
    const ball = createBall();
    backgroundAnimation.appendChild(ball);
}

function createImageBall() {
    const ball = document.createElement('div');
    ball.className = 'animated-ball image-ball';
    
    const size = Math.random() * 80 + 30;
    ball.style.width = `${size}px`;
    ball.style.height = `${size}px`;
    
    ball.style.left = `${Math.random() * 80}%`;
    ball.style.top = `${Math.random() * 80}%`;
    
    const duration = Math.random() * 8 + 4;
    const delay = Math.random() * 3;
    ball.style.animationDuration = `${duration}s`;
    ball.style.animationDelay = `-${delay}s`;
    
    return ball;
}

const imageBackgroundAnimation = document.createElement('div');
imageBackgroundAnimation.className = 'image-background-animation';
document.querySelector('.hero-image').appendChild(imageBackgroundAnimation);

for (let i = 0; i < 6; i++) {
    const ball = createImageBall();
    imageBackgroundAnimation.appendChild(ball);
}

function createBackgroundAnimation() {
    const container = document.querySelector('.background-animation');
    const numberOfBalls = 2;

    for (let i = 0; i < numberOfBalls; i++) {
        const ball = document.createElement('div');
        ball.className = 'animated-ball';
        
        const size = Math.random() * (300 - 200) + 50;
        ball.style.width = `${size}px`;
        ball.style.height = `${size}px`;
        
        ball.style.left = `${Math.random() * 100}%`;
        ball.style.top = `${Math.random() * 100}%`;
        
        ball.style.animationDelay = `${Math.random() * 8}s`;
        
        container.appendChild(ball);
    }
}

window.addEventListener('load', createBackgroundAnimation);


// =========================
//  NAVBAR HAMBURGER MENU
// =========================

// Fungsi toggle menu hamburger
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, .hero-container, footer");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      } else {
        entry.target.classList.remove("fade-in"); // biar bisa animasi lagi pas masuk
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    section.classList.add("fade-section"); // kondisi awal transparan
    observer.observe(section);
  });
});

 window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

