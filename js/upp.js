const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  if(scrollY < 200) {
    btn.classList.add('btn-hide');
  } else {
    btn.classList.remove('btn-hide');
  }
});
