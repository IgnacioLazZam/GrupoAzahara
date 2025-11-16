function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}


document.querySelectorAll('#navLinks a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

function openModal(img) {
     if (window.innerWidth < 1000) {
    return;
  }
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const caption = document.getElementById('modalCaption');
  
  modal.style.display = 'block';
  modalImg.src = img.src;
  caption.innerHTML = img.nextElementSibling.textContent;
  
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});