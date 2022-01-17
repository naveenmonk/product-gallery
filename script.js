const galleryFilter = document.querySelector('.gallery-filter');
const galleryImage = document.querySelectorAll('.image');

galleryFilter.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-gallery')) {
    galleryFilter.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    const filter = e.target.dataset.filter;
    galleryImage.forEach((image) => {
      if (filter === 'all' || image.classList.contains(filter)) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  }
});
