// Lightbox Function
function openLightbox(imgSrc, description) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxDesc = document.getElementById('lightbox-desc');
  
  lightboxImg.src = imgSrc;
  lightboxImg.alt = description;
  lightboxDesc.textContent = description;
  
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close lightbox when clicking outside content
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) {
    closeLightbox();
  }
});

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
  const polaroids = document.querySelectorAll('.polaroid');
  
  polaroids.forEach((polaroid, index) => {
    polaroid.style.animationDelay = `${index * 0.1}s`;
  });
});