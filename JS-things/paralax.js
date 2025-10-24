window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const particles = document.querySelectorAll('.particle');

  particles.forEach((particle, index) => {
    const speed = (index + 1) * 0.5;
    particle.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
