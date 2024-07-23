const btn = document.body.querySelector('.btn');
btn.addEventListener('click', () => {
  const collapsible = document.body.querySelector('.collapsible');
  collapsible.classList.remove('hidden');
  if (collapsible.classList.contains('expanded')) {
    collapsible.classList.remove('expanded');
    collapsible.classList.add('collapsed');
  } else {
    collapsible.classList.remove('collapsed');
    collapsible.classList.add('expanded');
  }
});
