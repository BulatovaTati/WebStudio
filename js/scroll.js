 const buttonToTop = document.querySelector('.scroll-to-top'); 

  buttonToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });    
  });

  