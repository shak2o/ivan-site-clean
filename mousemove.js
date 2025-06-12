const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('close');
let scale = 1;

// открыть модальное окно
const images = document.querySelectorAll('.photo-gallery img');
images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = image.src;
    caption.textContent = image.alt;
    
    // сброс масштаба
    scale = 1;
    modalImg.style.transform = `scale(${scale})`;
    
    document.body.classList.add('modal-open');
  });
});

// закрытие
function closeModal() {
  modal.style.display = 'none';
  scale = 1;
  modalImg.style.transform = `scale(${scale})`;
  document.body.classList.remove('modal-open');
}

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// прокрутка колесиком = zoom
modalImg.addEventListener('wheel', (e) => {
  e.preventDefault(); // важно: чтобы не прыгал скролл страницы
  if (e.deltaY > 0) {
    scale *= 0.9;
  } else {
    scale *= 1.1;
  }

  scale = Math.min(Math.max(scale, 0.5), 3);
  modalImg.style.transform = `scale(${scale})`;
});
