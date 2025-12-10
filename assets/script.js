function showSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
  target.classList.add('active');

  const menuItems = document.querySelectorAll('.sidebar li');
  menuItems.forEach(item => item.classList.remove('active-link'));

  const clickedItem = Array.from(menuItems).find(item =>
    item.textContent.trim().toLowerCase() === sectionId.toLowerCase()
  );
  if (clickedItem) clickedItem.classList.add('active-link');
}

function downloadBook() {
  showPopup("Book download is not available yet. Stay tuned!");
}


document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !email) {
    showPopup("Please fill in all required fields.");
    return;
  }

  const confirmation = document.getElementById('confirmation');
  confirmation.classList.remove('hidden');
  confirmation.classList.add('show');

  setTimeout(() => {
    confirmation.classList.remove('show');
    confirmation.classList.add('hidden');
  }, 3000);
});


document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slider-track");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  const visibleImages = 2;
  const totalImages = track.children.length;

  function updateSlider() {
    const imageWidth = track.children[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

    prevBtn.classList.toggle("hidden", currentIndex === 0);
    nextBtn.classList.toggle("hidden", currentIndex >= totalImages - visibleImages);
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalImages - visibleImages) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  window.addEventListener("resize", updateSlider);
  updateSlider();
});
