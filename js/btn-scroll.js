(() => {
  const scrollUpBtn = document.querySelector('.scroll-up');
  const scrollContainer = document.scrollingElement || document.documentElement;

  const showAfterPercent = 0.15;

  window.addEventListener('scroll', () => {
    const viewportHeight = window.innerHeight;

    if (scrollContainer.scrollTop > viewportHeight * showAfterPercent) {
      scrollUpBtn.classList.add('visible');
    } else {
      scrollUpBtn.classList.remove('visible');
    }
  });

  scrollUpBtn.addEventListener('click', () => {
    scrollContainer.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
})();
