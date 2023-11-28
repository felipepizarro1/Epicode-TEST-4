document.addEventListener('DOMContentLoaded', function () {
    const contenitoreLogoNav = document.querySelector('.contenitoreLogoNav');

    window.addEventListener('scroll', function () {
      if (window.scrollY >= document.querySelector('.section1').offsetTop) {
        contenitoreLogoNav.classList.add('scrolled');
      } else {
        contenitoreLogoNav.classList.remove('scrolled');
      }
    });
  });