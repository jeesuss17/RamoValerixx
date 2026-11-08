const opening = document.getElementById('opening');
const reveal = document.getElementById('reveal');
document.getElementById('revealButton').addEventListener('click', () => {
  opening.classList.add('hidden');
  reveal.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
