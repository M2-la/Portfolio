document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('.project-title');
  const overlay = document.getElementById('project-overlay');
  const overlayTitle = document.getElementById('overlay-title');
  const gallery = document.getElementById('overlay-gallery');
  const closeBtn = document.getElementById('overlay-close');

  function openOverlay(titleText, images) {
    overlayTitle.textContent = titleText;
    gallery.innerHTML = '';
    images.forEach(src => {
      const card = document.createElement('div');
      card.className = 'overlay-image-card';
      const img = document.createElement('img');
      img.src = src.trim();
      img.alt = titleText + ' image';
      img.style.cursor = 'pointer';
      // when clicking a thumbnail, open the large viewer
      img.addEventListener('click', () => openViewer(img.src, img.alt));
      card.appendChild(img);
      gallery.appendChild(card);
    });
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeOverlay() {
    overlay.classList.remove('open');
    gallery.innerHTML = '';
    document.body.style.overflow = '';
  }

  // Lightbox / viewer for enlarged image
  function openViewer(src, alt) {
    // prevent multiple viewers
    const existing = document.getElementById('overlay-viewer');
    if (existing) existing.remove();

    const viewer = document.createElement('div');
    viewer.id = 'overlay-viewer';
    viewer.className = 'overlay-viewer';

    const viewerClose = document.createElement('button');
    viewerClose.className = 'overlay-viewer-close';
    viewerClose.setAttribute('aria-label', 'Fermer l\'image');
    viewerClose.innerText = '✕';
    viewerClose.addEventListener('click', () => viewer.remove());

    const img = document.createElement('img');
    img.className = 'overlay-viewer-img';
    img.src = src;
    img.alt = alt || 'Image agrandie';

    // close viewer on background click
    viewer.addEventListener('click', (e) => { if (e.target === viewer) viewer.remove(); });

    // ESC key to close viewer
    const escHandler = (e) => { if (e.key === 'Escape') { viewer.remove(); document.removeEventListener('keydown', escHandler); } };
    document.addEventListener('keydown', escHandler);

    viewer.appendChild(viewerClose);
    viewer.appendChild(img);
    // append to overlay content so it stays above gallery
    const content = overlay.querySelector('.overlay-content') || overlay;
    content.appendChild(viewer);
  }

  titles.forEach(t => {
    const imagesAttr = t.getAttribute('data-images');
    const images = imagesAttr ? imagesAttr.split(',') : [];
    t.addEventListener('click', () => openOverlay(t.textContent, images));
    t.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openOverlay(t.textContent, images); } });
  });

  closeBtn.addEventListener('click', closeOverlay);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeOverlay(); });
});
