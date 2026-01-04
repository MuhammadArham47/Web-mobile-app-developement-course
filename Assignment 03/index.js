
const button = document.querySelector(".button");

button.addEventListener("click", ()=> {
  window.location.href = "enrollnow.html"
  console.log("This is clicked")
})




let currentIndex = 0;
const carouselTrack = document.getElementById("carouselTrack");
const cards = document.querySelectorAll(".carousel-card");
const totalCards = cards.length;
const prevButton = document.querySelector(".carousel-arrow-left");
const nextButton = document.querySelector(".carousel-arrow-right");

// Calculate how many cards are visible at once
const cardsVisible = 3;
const maxIndex = totalCards - cardsVisible;

function updateCarousel() {
  // Calculate the width of one card plus gap
  const cardWidth = cards[0].offsetWidth;
  const gap = 20;
  const moveDistance = cardWidth + gap;

  // Move by one card width
  const offset = -currentIndex * moveDistance;
  carouselTrack.style.transform = `translateX(${offset}px)`;

  // Update button states
  updateButtons();
}

function updateButtons() {
  // Disable prev button at the start
  if (currentIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  // Disable next button at the end
  if (currentIndex >= maxIndex) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

function nextSlide() {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

// Initialize button states
updateButtons();

// Recalculate on window resize
window.addEventListener("resize", () => {
  updateCarousel();
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevSlide();
  } else if (e.key === "ArrowRight") {
    nextSlide();
  }
});

// Touch swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

carouselTrack.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

carouselTrack.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX - 50) {
    nextSlide();
  }
  if (touchEndX > touchStartX + 50) {
    prevSlide();
  }
}