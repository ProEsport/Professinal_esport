const content = document.querySelector('.Section1--content');

function handleScroll() {
  const scrollPosition = window.pageYOffset;
  const contentPosition = content.offsetTop;
  const distance = contentPosition - scrollPosition;
  const opacity = 1 - (distance / window.innerHeight);
  const translateY = (distance / window.innerHeight) * 60;

  content.style.opacity = opacity;
  content.style.transform = 'translateY(' + translateY + 'px)';

  if (distance < -window.innerHeight * 0.5) {
    content.classList.add('is-hidden');
  } else {
    content.classList.remove('is-hidden');
  }
}

window.addEventListener('scroll', handleScroll);

/*/////////////////////////////// */

function addScrollAnimation() {
  const content = document.querySelector('.Section4--content');
  const scrollPosition = window.pageYOffset;
  const contentPosition = content.offsetTop;
  const distance = contentPosition - scrollPosition;
  const opacity = 1 - (distance / window.innerHeight);
  const translateY = (distance / window.innerHeight) * 60;

  content.style.opacity = opacity;
  content.style.transform = `translateY(${translateY}px)`;

  if (distance < -window.innerHeight * 0.5) {
    content.classList.add('is-hidden');
  } else {
    content.classList.remove('is-hidden');
  }
}

window.addEventListener('scroll', addScrollAnimation);

 /*////////////////////////////// */
